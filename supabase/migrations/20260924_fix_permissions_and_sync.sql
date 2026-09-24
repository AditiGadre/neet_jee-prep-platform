-- ==============================================================================
-- NEET CBT PLATFORM: COMPLETE SUPABASE PERMISSIONS & SYNC FIX
-- Run this in your Supabase SQL Editor (Dashboard -> SQL Editor -> New Query)
-- ==============================================================================

-- 1. EXTEND QUESTIONS TABLE WITH MISSING COLUMNS
ALTER TABLE IF EXISTS public.questions
  ADD COLUMN IF NOT EXISTS marks INTEGER DEFAULT 4,
  ADD COLUMN IF NOT EXISTS negative_marks INTEGER DEFAULT 1,
  ADD COLUMN IF NOT EXISTS correct_option INTEGER,
  ADD COLUMN IF NOT EXISTS created_by TEXT DEFAULT 'Institutional Master Admin',
  ADD COLUMN IF NOT EXISTS updated_at TIMESTAMPTZ DEFAULT NOW();

-- Ensure correct_option is populated from correct_answer if empty
UPDATE public.questions
SET correct_option = correct_answer
WHERE correct_option IS NULL AND correct_answer IS NOT NULL;

-- 2. CREATE ADMIN_SESSIONS TABLE (For 3-device concurrency cap)
CREATE TABLE IF NOT EXISTS public.admin_sessions (
  id TEXT PRIMARY KEY,
  admin_id TEXT NOT NULL DEFAULT 'admin',
  device_id TEXT NOT NULL,
  device_label TEXT NOT NULL,
  last_active_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  CONSTRAINT unique_admin_device UNIQUE (admin_id, device_id)
);

CREATE INDEX IF NOT EXISTS idx_admin_sessions_last_active 
  ON public.admin_sessions (admin_id, last_active_at DESC);

-- 3. CREATE TEST_SETS TABLE (For atomic question ordering and swaps)
CREATE TABLE IF NOT EXISTS public.test_sets (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  question_ids JSONB NOT NULL DEFAULT '[]'::jsonb,
  status TEXT NOT NULL DEFAULT 'live' CHECK (status IN ('draft', 'live', 'archived')),
  metadata JSONB DEFAULT '{}'::jsonb,
  created_by TEXT DEFAULT 'Institutional Master Admin',
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 4. GRANT FULL PERMISSIONS TO ALL ROLES (Fixes 42501 permission denied)
GRANT ALL PRIVILEGES ON TABLE public.questions TO anon, authenticated, service_role;
GRANT ALL PRIVILEGES ON TABLE public.admin_sessions TO anon, authenticated, service_role;
GRANT ALL PRIVILEGES ON TABLE public.test_sets TO anon, authenticated, service_role;

-- 5. CONFIGURE ROW LEVEL SECURITY (RLS) POLICIES
-- Enable RLS
ALTER TABLE public.questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.admin_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.test_sets ENABLE ROW LEVEL SECURITY;

-- Questions RLS: Permissive for anon and authenticated
DROP POLICY IF EXISTS "Allow full access on questions" ON public.questions;
DROP POLICY IF EXISTS "Allow all for anon on questions" ON public.questions;
CREATE POLICY "Allow full access on questions"
  ON public.questions
  FOR ALL
  TO anon, authenticated, service_role
  USING (true)
  WITH CHECK (true);

-- Admin Sessions RLS: Permissive for anon and authenticated
DROP POLICY IF EXISTS "Allow full access on admin_sessions" ON public.admin_sessions;
DROP POLICY IF EXISTS "Allow all for anon on admin_sessions" ON public.admin_sessions;
CREATE POLICY "Allow full access on admin_sessions"
  ON public.admin_sessions
  FOR ALL
  TO anon, authenticated, service_role
  USING (true)
  WITH CHECK (true);

-- Test Sets RLS: Permissive for anon and authenticated
DROP POLICY IF EXISTS "Allow full access on test_sets" ON public.test_sets;
DROP POLICY IF EXISTS "Allow all for anon on test_sets" ON public.test_sets;
CREATE POLICY "Allow full access on test_sets"
  ON public.test_sets
  FOR ALL
  TO anon, authenticated, service_role
  USING (true)
  WITH CHECK (true);

-- 6. ENABLE REALTIME PUBLICATION ON ALL TABLES
DO $$
BEGIN
  BEGIN
    ALTER PUBLICATION supabase_realtime ADD TABLE public.questions;
  EXCEPTION WHEN duplicate_object THEN
    NULL;
  END;

  BEGIN
    ALTER PUBLICATION supabase_realtime ADD TABLE public.admin_sessions;
  EXCEPTION WHEN duplicate_object THEN
    NULL;
  END;

  BEGIN
    ALTER PUBLICATION supabase_realtime ADD TABLE public.test_sets;
  EXCEPTION WHEN duplicate_object THEN
    NULL;
  END;
END $$;

-- 7. ATOMIC STORED PROCEDURE: Register Device & Enforce 3-Device Cap
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
  v_active_count INTEGER;
  v_evicted_label TEXT := NULL;
  v_oldest_id TEXT;
  v_result JSONB;
BEGIN
  -- Purge sessions inactive for more than 24 hours
  DELETE FROM public.admin_sessions
  WHERE last_active_at < (NOW() - INTERVAL '24 hours');

  -- Update existing session if already registered
  IF EXISTS (SELECT 1 FROM public.admin_sessions WHERE admin_id = p_admin_id AND device_id = p_device_id) THEN
    UPDATE public.admin_sessions
    SET last_active_at = NOW(),
        device_label = p_device_label
    WHERE admin_id = p_admin_id AND device_id = p_device_id;

    RETURN jsonb_build_object(
      'status', 'refreshed',
      'active_count', (SELECT COUNT(*) FROM public.admin_sessions WHERE admin_id = p_admin_id)
    );
  END IF;

  -- Count current active devices
  SELECT COUNT(*) INTO v_active_count
  FROM public.admin_sessions
  WHERE admin_id = p_admin_id;

  -- Enforce 3-device cap
  IF v_active_count >= 3 THEN
    IF NOT p_auto_evict THEN
      RETURN jsonb_build_object(
        'status', 'device_limit_exceeded',
        'message', 'Maximum 3 active admin devices reached.',
        'active_count', v_active_count
      );
    ELSE
      -- Auto-evict least recently active session
      SELECT id, device_label INTO v_oldest_id, v_evicted_label
      FROM public.admin_sessions
      WHERE admin_id = p_admin_id
      ORDER BY last_active_at ASC
      LIMIT 1;

      DELETE FROM public.admin_sessions WHERE id = v_oldest_id;
    END IF;
  END IF;

  -- Insert new device session
  INSERT INTO public.admin_sessions (id, admin_id, device_id, device_label, last_active_at, created_at)
  VALUES (
    'sess_' || substr(md5(random()::text || clock_timestamp()::text), 1, 12),
    p_admin_id,
    p_device_id,
    p_device_label,
    NOW(),
    NOW()
  );

  RETURN jsonb_build_object(
    'status', CASE WHEN v_evicted_label IS NOT NULL THEN 'admitted_with_eviction' ELSE 'admitted' END,
    'evicted_label', v_evicted_label,
    'active_count', (SELECT COUNT(*) FROM public.admin_sessions WHERE admin_id = p_admin_id)
  );
END;
$$;

GRANT EXECUTE ON FUNCTION public.register_admin_device_session(TEXT, TEXT, TEXT, BOOLEAN) TO anon, authenticated, service_role;

SELECT 'NEET CBT Platform database permissions and schema successfully updated!' AS status;
