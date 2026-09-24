-- ============================================================================
-- NEET CBT PLATFORM: ADMIN MULTI-DEVICE SYNC & REALTIME TEST SET SCHEMA
-- Migration: 20260924_admin_sync_and_sessions.sql
-- ============================================================================

CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- ============================================================================
-- 1. ADMIN SESSIONS TABLE (CAPPED AT 3 ACTIVE DEVICES)
-- ============================================================================
CREATE TABLE IF NOT EXISTS public.admin_sessions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    admin_id TEXT NOT NULL,
    device_id TEXT NOT NULL,
    device_label TEXT NOT NULL,
    last_active_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CONSTRAINT uq_admin_device UNIQUE (admin_id, device_id)
);

CREATE INDEX IF NOT EXISTS idx_admin_sessions_lookup ON public.admin_sessions(admin_id, last_active_at DESC);
CREATE INDEX IF NOT EXISTS idx_admin_sessions_device ON public.admin_sessions(device_id);

-- ============================================================================
-- 2. QUESTIONS TABLE SCHEMA ENHANCEMENT
-- Align with data model expectations: id, subject, chapter, difficulty,
-- question_text, options (jsonb), correct_option, marks, negative_marks, created_by, updated_at
-- ============================================================================
CREATE TABLE IF NOT EXISTS public.questions (
    id TEXT PRIMARY KEY,
    subject TEXT NOT NULL,
    chapter TEXT NOT NULL,
    topic TEXT,
    difficulty TEXT NOT NULL DEFAULT 'Medium',
    question_text TEXT NOT NULL,
    options JSONB NOT NULL DEFAULT '[]'::jsonb,
    correct_option INT NOT NULL DEFAULT 0,
    correct_answer INT DEFAULT 0,
    marks NUMERIC NOT NULL DEFAULT 4,
    negative_marks NUMERIC NOT NULL DEFAULT 1,
    explanation TEXT,
    created_by TEXT NOT NULL DEFAULT 'admin',
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_schema='public' AND table_name='questions' AND column_name='correct_option') THEN
        ALTER TABLE public.questions ADD COLUMN correct_option INT DEFAULT 0;
        UPDATE public.questions SET correct_option = COALESCE(correct_answer, 0);
    END IF;

    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_schema='public' AND table_name='questions' AND column_name='marks') THEN
        ALTER TABLE public.questions ADD COLUMN marks NUMERIC DEFAULT 4;
    END IF;

    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_schema='public' AND table_name='questions' AND column_name='negative_marks') THEN
        ALTER TABLE public.questions ADD COLUMN negative_marks NUMERIC DEFAULT 1;
    END IF;

    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_schema='public' AND table_name='questions' AND column_name='created_by') THEN
        ALTER TABLE public.questions ADD COLUMN created_by TEXT DEFAULT 'admin';
    END IF;

    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_schema='public' AND table_name='questions' AND column_name='updated_at') THEN
        ALTER TABLE public.questions ADD COLUMN updated_at TIMESTAMPTZ DEFAULT NOW();
    END IF;
END $$;

-- ============================================================================
-- 3. TEST SETS TABLE (ORDERED QUESTION IDS & STATUS)
-- ============================================================================
CREATE TABLE IF NOT EXISTS public.test_sets (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    question_ids JSONB NOT NULL DEFAULT '[]'::jsonb,
    status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'live', 'archived')),
    metadata JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_test_sets_status ON public.test_sets(status);
CREATE INDEX IF NOT EXISTS idx_test_sets_updated_at ON public.test_sets(updated_at DESC);

-- ============================================================================
-- 4. ATOMIC QUESTION SWAP STORED PROCEDURE
-- ============================================================================
CREATE OR REPLACE FUNCTION public.swap_test_set_question(
    p_test_set_id TEXT,
    p_old_question_id TEXT,
    p_new_question_id TEXT
)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
    v_test_set public.test_sets%ROWTYPE;
    v_question_ids JSONB;
    v_new_array JSONB := '[]'::jsonb;
    v_item JSONB;
    v_swapped BOOLEAN := FALSE;
BEGIN
    SELECT * INTO v_test_set
    FROM public.test_sets
    WHERE id = p_test_set_id
    FOR UPDATE;

    IF NOT FOUND THEN
        RETURN jsonb_build_object('success', false, 'error', 'Test set not found: ' || p_test_set_id);
    END IF;

    v_question_ids := v_test_set.question_ids;

    FOR v_item IN SELECT * FROM jsonb_array_elements(v_question_ids)
    LOOP
        IF v_item #>> '{}' = p_old_question_id AND NOT v_swapped THEN
            v_new_array := v_new_array || to_jsonb(p_new_question_id);
            v_swapped := TRUE;
        ELSE
            v_new_array := v_new_array || v_item;
        END IF;
    END LOOP;

    IF NOT v_swapped THEN
        RETURN jsonb_build_object('success', false, 'error', 'Target question to swap not found in test set: ' || p_old_question_id);
    END IF;

    UPDATE public.test_sets
    SET question_ids = v_new_array,
        updated_at = NOW()
    WHERE id = p_test_set_id;

    RETURN jsonb_build_object(
        'success', true,
        'test_set_id', p_test_set_id,
        'old_question_id', p_old_question_id,
        'new_question_id', p_new_question_id,
        'total_questions', jsonb_array_length(v_new_array),
        'updated_at', NOW()
    );
END;
$$;

CREATE OR REPLACE FUNCTION public.swap_test_set_question_at_index(
    p_test_set_id TEXT,
    p_index INT,
    p_new_question_id TEXT
)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
    v_test_set public.test_sets%ROWTYPE;
    v_new_array JSONB;
BEGIN
    SELECT * INTO v_test_set
    FROM public.test_sets
    WHERE id = p_test_set_id
    FOR UPDATE;

    IF NOT FOUND THEN
        RETURN jsonb_build_object('success', false, 'error', 'Test set not found: ' || p_test_set_id);
    END IF;

    IF p_index < 0 OR p_index >= jsonb_array_length(v_test_set.question_ids) THEN
        RETURN jsonb_build_object('success', false, 'error', 'Index out of bounds: ' || p_index);
    END IF;

    v_new_array := jsonb_set(v_test_set.question_ids, ARRAY[p_index::text], to_jsonb(p_new_question_id));

    UPDATE public.test_sets
    SET question_ids = v_new_array,
        updated_at = NOW()
    WHERE id = p_test_set_id;

    RETURN jsonb_build_object(
        'success', true,
        'test_set_id', p_test_set_id,
        'index', p_index,
        'new_question_id', p_new_question_id,
        'total_questions', jsonb_array_length(v_new_array),
        'updated_at', NOW()
    );
END;
$$;

-- ============================================================================
-- 5. ADMIN DEVICE SESSION MANAGEMENT STORED PROCEDURE
-- ============================================================================
CREATE OR REPLACE FUNCTION public.register_admin_device_session(
    p_admin_id TEXT,
    p_device_id TEXT,
    p_device_label TEXT,
    p_auto_evict BOOLEAN DEFAULT FALSE
)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
    v_active_count INT;
    v_already_registered BOOLEAN;
    v_oldest_session RECORD;
    v_sessions JSONB;
BEGIN
    DELETE FROM public.admin_sessions
    WHERE last_active_at < NOW() - INTERVAL '24 hours';

    SELECT EXISTS (
        SELECT 1 FROM public.admin_sessions
        WHERE admin_id = p_admin_id AND device_id = p_device_id
    ) INTO v_already_registered;

    IF v_already_registered THEN
        UPDATE public.admin_sessions
        SET last_active_at = NOW(),
            device_label = p_device_label
        WHERE admin_id = p_admin_id AND device_id = p_device_id;

        SELECT jsonb_agg(to_jsonb(s.*)) INTO v_sessions
        FROM (SELECT id, admin_id, device_id, device_label, last_active_at, created_at FROM public.admin_sessions WHERE admin_id = p_admin_id ORDER BY last_active_at DESC) s;

        RETURN jsonb_build_object(
            'success', true,
            'status', 'refreshed',
            'device_id', p_device_id,
            'active_sessions', COALESCE(v_sessions, '[]'::jsonb)
        );
    END IF;

    SELECT COUNT(*) INTO v_active_count
    FROM public.admin_sessions
    WHERE admin_id = p_admin_id;

    IF v_active_count >= 3 THEN
        IF p_auto_evict THEN
            SELECT id, device_id, device_label INTO v_oldest_session
            FROM public.admin_sessions
            WHERE admin_id = p_admin_id
            ORDER BY last_active_at ASC
            LIMIT 1;

            DELETE FROM public.admin_sessions WHERE id = v_oldest_session.id;

            INSERT INTO public.admin_sessions (admin_id, device_id, device_label, last_active_at)
            VALUES (p_admin_id, p_device_id, p_device_label, NOW());

            SELECT jsonb_agg(to_jsonb(s.*)) INTO v_sessions
            FROM (SELECT id, admin_id, device_id, device_label, last_active_at, created_at FROM public.admin_sessions WHERE admin_id = p_admin_id ORDER BY last_active_at DESC) s;

            RETURN jsonb_build_object(
                'success', true,
                'status', 'admitted_with_eviction',
                'evicted_device', v_oldest_session.device_label,
                'device_id', p_device_id,
                'active_sessions', COALESCE(v_sessions, '[]'::jsonb)
            );
        ELSE
            SELECT jsonb_agg(to_jsonb(s.*)) INTO v_sessions
            FROM (SELECT id, admin_id, device_id, device_label, last_active_at, created_at FROM public.admin_sessions WHERE admin_id = p_admin_id ORDER BY last_active_at DESC) s;

            RETURN jsonb_build_object(
                'success', false,
                'status', 'device_limit_exceeded',
                'message', '3 devices are already active. Please log out one device to continue.',
                'active_sessions', COALESCE(v_sessions, '[]'::jsonb)
            );
        END IF;
    END IF;

    INSERT INTO public.admin_sessions (admin_id, device_id, device_label, last_active_at)
    VALUES (p_admin_id, p_device_id, p_device_label, NOW());

    SELECT jsonb_agg(to_jsonb(s.*)) INTO v_sessions
    FROM (SELECT id, admin_id, device_id, device_label, last_active_at, created_at FROM public.admin_sessions WHERE admin_id = p_admin_id ORDER BY last_active_at DESC) s;

    RETURN jsonb_build_object(
        'success', true,
        'status', 'admitted',
        'device_id', p_device_id,
        'active_sessions', COALESCE(v_sessions, '[]'::jsonb)
    );
END;
$$;

-- ============================================================================
-- 6. REALTIME REPLICATION & PERMISSIONS
-- ============================================================================
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_publication_tables 
        WHERE pubname = 'supabase_realtime' AND schemaname = 'public' AND tablename = 'questions'
    ) THEN
        ALTER PUBLICATION supabase_realtime ADD TABLE public.questions;
    END IF;

    IF NOT EXISTS (
        SELECT 1 FROM pg_publication_tables 
        WHERE pubname = 'supabase_realtime' AND schemaname = 'public' AND tablename = 'test_sets'
    ) THEN
        ALTER PUBLICATION supabase_realtime ADD TABLE public.test_sets;
    END IF;

    IF NOT EXISTS (
        SELECT 1 FROM pg_publication_tables 
        WHERE pubname = 'supabase_realtime' AND schemaname = 'public' AND tablename = 'admin_sessions'
    ) THEN
        ALTER PUBLICATION supabase_realtime ADD TABLE public.admin_sessions;
    END IF;
EXCEPTION
    WHEN OTHERS THEN
        NULL;
END $$;

ALTER TABLE public.admin_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.test_sets ENABLE ROW LEVEL SECURITY;

GRANT ALL ON TABLE public.admin_sessions TO anon, authenticated, service_role;
GRANT ALL ON TABLE public.questions TO anon, authenticated, service_role;
GRANT ALL ON TABLE public.test_sets TO anon, authenticated, service_role;

GRANT EXECUTE ON FUNCTION public.swap_test_set_question(TEXT, TEXT, TEXT) TO anon, authenticated, service_role;
GRANT EXECUTE ON FUNCTION public.swap_test_set_question_at_index(TEXT, INT, TEXT) TO anon, authenticated, service_role;
GRANT EXECUTE ON FUNCTION public.register_admin_device_session(TEXT, TEXT, TEXT, BOOLEAN) TO anon, authenticated, service_role;

DROP POLICY IF EXISTS "Public can read live test sets" ON public.test_sets;
CREATE POLICY "Public can read live test sets" ON public.test_sets FOR SELECT USING (true);

DROP POLICY IF EXISTS "Admin write test sets" ON public.test_sets;
CREATE POLICY "Admin write test sets" ON public.test_sets FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Public can read questions" ON public.questions;
CREATE POLICY "Public can read questions" ON public.questions FOR SELECT USING (true);

DROP POLICY IF EXISTS "Admin write questions" ON public.questions;
CREATE POLICY "Admin write questions" ON public.questions FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Admin access sessions" ON public.admin_sessions;
CREATE POLICY "Admin access sessions" ON public.admin_sessions FOR ALL USING (true) WITH CHECK (true);
