-- ============================================================================
-- CENTRALIZED QUESTION-BANK PUBLISHING & DISTRIBUTION SYSTEM
-- Schema: Admin Users, Draft/Published Question Bank, Atomic Version Snapshots
-- ============================================================================

-- Enable pgcrypto for UUID generation if not enabled
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- 1. ADMIN USERS TABLE
-- Server-authoritative admin identity for authoring and publishing sessions
CREATE TABLE IF NOT EXISTS admin_users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(100) NOT NULL,
    role VARCHAR(50) NOT NULL DEFAULT 'admin' CHECK (role IN ('admin', 'super_admin', 'editor')),
    is_active BOOLEAN NOT NULL DEFAULT TRUE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_login_at TIMESTAMPTZ
);

CREATE INDEX IF NOT EXISTS idx_admin_users_email ON admin_users(email);

-- Seed default initial admin if not present
INSERT INTO admin_users (email, name, role)
VALUES ('admin@neetcbtexam.com', 'Master Academic Director', 'super_admin')
ON CONFLICT (email) DO NOTHING;


-- 2. QUESTION BANK ITEMS TABLE
-- Central single source of truth for questions.
-- Supports two-stage lifecycle: 'draft' vs 'published' with optimistic concurrency (version tokens).
CREATE TABLE IF NOT EXISTS question_bank_items (
    id VARCHAR(64) PRIMARY KEY,
    subject VARCHAR(50) NOT NULL CHECK (subject IN ('Physics', 'Chemistry', 'Biology')),
    chapter VARCHAR(120) NOT NULL,
    topic VARCHAR(120),
    subtopic VARCHAR(120),
    difficulty VARCHAR(20) NOT NULL DEFAULT 'Medium' CHECK (difficulty IN ('Easy', 'Medium', 'Hard')),
    question_text TEXT NOT NULL,
    options JSONB NOT NULL,                   -- Array of 4 string options: ["Opt A", "Opt B", "Opt C", "Opt D"]
    correct_answer INT NOT NULL CHECK (correct_answer >= 0 AND correct_answer <= 3),
    explanation TEXT,
    diagram_svg TEXT,                          -- Responsive inline SVG diagram if applicable
    tags JSONB NOT NULL DEFAULT '[]'::jsonb,  -- Array of tags: ["NEET 2026", "NTA"]
    status VARCHAR(20) NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'archived')),
    order_index INT NOT NULL DEFAULT 0,
    version INT NOT NULL DEFAULT 1,           -- Optimistic locking token (increments on every update)
    updated_by VARCHAR(100) DEFAULT 'admin',
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_qb_items_status ON question_bank_items(status);
CREATE INDEX IF NOT EXISTS idx_qb_items_subject ON question_bank_items(subject);
CREATE INDEX IF NOT EXISTS idx_qb_items_chapter ON question_bank_items(chapter);
CREATE INDEX IF NOT EXISTS idx_qb_items_order ON question_bank_items(order_index ASC);


-- 3. PUBLISHED VERSIONS TABLE
-- Immutable version registry. Each publish action captures a full atomic snapshot.
CREATE TABLE IF NOT EXISTS published_versions (
    version_id SERIAL PRIMARY KEY,
    version_tag VARCHAR(50) NOT NULL UNIQUE,     -- e.g. 'v1.0.0', 'v2.0.0'
    published_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    published_by VARCHAR(100) NOT NULL,
    summary TEXT NOT NULL,                      -- Changelog description
    question_count INT NOT NULL,
    snapshot_checksum VARCHAR(64) NOT NULL,     -- SHA-256 integrity hash of payload
    is_current BOOLEAN NOT NULL DEFAULT FALSE,  -- True for exactly ONE active production version
    snapshot_payload JSONB NOT NULL             -- Complete immutable array of all published questions
);

-- Partial unique index guarantees that AT MOST ONE version is marked as current at any instant.
CREATE UNIQUE INDEX IF NOT EXISTS idx_single_current_version 
ON published_versions (is_current) 
WHERE is_current = TRUE;

CREATE INDEX IF NOT EXISTS idx_published_versions_tag ON published_versions(version_tag);
CREATE INDEX IF NOT EXISTS idx_published_versions_published_at ON published_versions(published_at DESC);


-- 4. ATOMIC PUBLISH STORED PROCEDURE
-- Promotes all current draft items to a new immutable version snapshot atomically.
CREATE OR REPLACE FUNCTION publish_question_bank_version(
    p_admin_email TEXT,
    p_summary TEXT
)
RETURNS JSONB
LANGUAGE plpgsql
AS $$
DECLARE
    v_next_version_num INT;
    v_version_tag VARCHAR(50);
    v_question_count INT;
    v_snapshot JSONB;
    v_checksum TEXT;
    v_result JSONB;
BEGIN
    -- 1. Grab lock to prevent concurrent publish races
    PERFORM pg_advisory_xact_lock(987654321);

    -- 2. Aggregate all active items (ordered by order_index) into an immutable JSON snapshot
    SELECT 
        COUNT(*),
        COALESCE(jsonb_agg(
            jsonb_build_object(
                'id', id,
                'subject', subject,
                'chapter', chapter,
                'topic', topic,
                'subtopic', subtopic,
                'difficulty', difficulty,
                'questionText', question_text,
                'options', options,
                'correctAnswer', correct_answer,
                'explanation', explanation,
                'diagramSvg', diagram_svg,
                'tags', tags,
                'orderIndex', order_index,
                'version', version
            ) ORDER BY order_index ASC, id ASC
        ), '[]'::jsonb)
    INTO v_question_count, v_snapshot
    FROM question_bank_items
    WHERE status IN ('draft', 'published');

    IF v_question_count = 0 THEN
        RAISE EXCEPTION 'Cannot publish: No questions exist in draft or published state.';
    END IF;

    -- 3. Calculate next version number and tag
    SELECT COALESCE(MAX(version_id), 0) + 1 INTO v_next_version_num FROM published_versions;
    v_version_tag := 'v' || v_next_version_num || '.0.0';

    -- 4. Compute SHA-256 checksum for immutable verification
    v_checksum := encode(digest(v_snapshot::text, 'sha256'), 'hex');

    -- 5. Atomic switch of the active production pointer
    -- Demote previous current version
    UPDATE published_versions SET is_current = FALSE WHERE is_current = TRUE;

    -- Insert new authoritative version
    INSERT INTO published_versions (
        version_id,
        version_tag,
        published_at,
        published_by,
        summary,
        question_count,
        snapshot_checksum,
        is_current,
        snapshot_payload
    ) VALUES (
        v_next_version_num,
        v_version_tag,
        NOW(),
        p_admin_email,
        p_summary,
        v_question_count,
        v_checksum,
        TRUE,
        v_snapshot
    );

    -- 6. Mark all draft questions as published and bump their version token
    UPDATE question_bank_items
    SET status = 'published',
        version = version + 1,
        updated_at = NOW(),
        updated_by = p_admin_email
    WHERE status = 'draft';

    -- 7. Return summary object
    v_result := jsonb_build_object(
        'success', TRUE,
        'versionId', v_next_version_num,
        'versionTag', v_version_tag,
        'questionCount', v_question_count,
        'checksum', v_checksum,
        'publishedAt', NOW(),
        'publishedBy', p_admin_email
    );

    RETURN v_result;
END;
$$;


-- 5. ATOMIC ROLLBACK STORED PROCEDURE
-- Rolls back production to a specified previous version snapshot instantly.
CREATE OR REPLACE FUNCTION rollback_question_bank_version(
    p_target_version_id INT,
    p_admin_email TEXT
)
RETURNS JSONB
LANGUAGE plpgsql
AS $$
DECLARE
    v_target_row RECORD;
    v_next_version_num INT;
    v_rollback_tag VARCHAR(50);
    v_result JSONB;
BEGIN
    PERFORM pg_advisory_xact_lock(987654321);

    -- Fetch target snapshot
    SELECT * INTO v_target_row
    FROM published_versions
    WHERE version_id = p_target_version_id;

    IF NOT FOUND THEN
        RAISE EXCEPTION 'Target version ID % does not exist in publish history.', p_target_version_id;
    END IF;

    -- Calculate next version number for clear historical progression
    SELECT COALESCE(MAX(version_id), 0) + 1 INTO v_next_version_num FROM published_versions;
    v_rollback_tag := 'v' || v_next_version_num || '.0.0-rollback-to-v' || p_target_version_id;

    -- Demote previous current version
    UPDATE published_versions SET is_current = FALSE WHERE is_current = TRUE;

    -- Create new version record preserving target payload
    INSERT INTO published_versions (
        version_id,
        version_tag,
        published_at,
        published_by,
        summary,
        question_count,
        snapshot_checksum,
        is_current,
        snapshot_payload
    ) VALUES (
        v_next_version_num,
        v_rollback_tag,
        NOW(),
        p_admin_email,
        'Emergency Rollback to Version #' || p_target_version_id || ' (' || v_target_row.version_tag || ')',
        v_target_row.question_count,
        v_target_row.snapshot_checksum,
        TRUE,
        v_target_row.snapshot_payload
    );

    v_result := jsonb_build_object(
        'success', TRUE,
        'versionId', v_next_version_num,
        'versionTag', v_rollback_tag,
        'rolledBackToVersionId', p_target_version_id,
        'questionCount', v_target_row.question_count,
        'checksum', v_target_row.snapshot_checksum,
        'restoredAt', NOW(),
        'restoredBy', p_admin_email
    );

    RETURN v_result;
END;
$$;


-- ============================================================================
-- 6. SECURITY & ACCESS GRANTS (ANON & AUTHENTICATED ROLES)
-- ============================================================================
GRANT USAGE ON SCHEMA public TO anon, authenticated, service_role;
GRANT ALL ON TABLE admin_users TO anon, authenticated, service_role;
GRANT ALL ON TABLE question_bank_items TO anon, authenticated, service_role;
GRANT ALL ON TABLE published_versions TO anon, authenticated, service_role;
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO anon, authenticated, service_role;

-- Grant procedure execution
GRANT EXECUTE ON FUNCTION publish_question_bank_version(TEXT, TEXT) TO anon, authenticated, service_role;
GRANT EXECUTE ON FUNCTION rollback_question_bank_version(INT, TEXT) TO anon, authenticated, service_role;

-- Row Level Security policies
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE question_bank_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE published_versions ENABLE ROW LEVEL SECURITY;

-- Permissive policies for publishing system
DROP POLICY IF EXISTS "Allow public read published_versions" ON published_versions;
CREATE POLICY "Allow public read published_versions" ON published_versions FOR SELECT USING (true);

DROP POLICY IF EXISTS "Allow admin write published_versions" ON published_versions;
CREATE POLICY "Allow admin write published_versions" ON published_versions FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Allow public read question_bank_items" ON question_bank_items;
CREATE POLICY "Allow public read question_bank_items" ON question_bank_items FOR SELECT USING (true);

DROP POLICY IF EXISTS "Allow admin write question_bank_items" ON question_bank_items;
CREATE POLICY "Allow admin write question_bank_items" ON question_bank_items FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Allow admin access admin_users" ON admin_users;
CREATE POLICY "Allow admin access admin_users" ON admin_users FOR ALL USING (true) WITH CHECK (true);

