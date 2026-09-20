import type { VercelRequest, VercelResponse } from '@vercel/node';
import { 
  serverSupabase, 
  getMemoryCurrentVersion, 
  setMemoryCurrentVersion, 
  getMemoryVersion 
} from '../_supabase';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Global CORS for cross-device student access
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, If-None-Match');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method Not Allowed. Use GET to retrieve published questions.' });
  }

  try {
    const requestedVersion = req.query.v ? Number(req.query.v) : null;
    let cacheStatus = 'MISS';

    // 1. Check in-memory Edge Cache first
    if (requestedVersion) {
      const memoryHit = getMemoryVersion(requestedVersion);
      if (memoryHit) {
        cacheStatus = 'HIT_MEMORY';
        return servePublishedResponse(req, res, memoryHit, true, cacheStatus);
      }
    } else {
      const memoryCurrent = getMemoryCurrentVersion();
      if (memoryCurrent) {
        cacheStatus = 'HIT_MEMORY';
        return servePublishedResponse(req, res, memoryCurrent, false, cacheStatus);
      }
    }

    // 2. Query Authoritative PostgreSQL Database (Only on cache miss)
    let query = serverSupabase.from('published_versions').select('*');
    if (requestedVersion) {
      query = query.eq('version_id', requestedVersion);
    } else {
      query = query.eq('is_current', true);
    }

    const { data: rows, error } = await query.limit(1);

    if (error || !rows || rows.length === 0) {
      // Fallback: If no published version exists yet, return empty standard structure
      res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=30');
      return res.status(200).json({
        success: true,
        versionId: 0,
        versionTag: 'v0.0.0-draft',
        publishedAt: new Date().toISOString(),
        questionCount: 0,
        checksum: 'none',
        questions: [],
        message: 'No published version available yet. Showing draft preview.'
      });
    }

    const row = rows[0];
    const snapshotObj = {
      versionId: row.version_id,
      versionTag: row.version_tag,
      checksum: row.snapshot_checksum,
      publishedAt: row.published_at,
      questionCount: row.question_count,
      payload: row.snapshot_payload,
      cachedAt: Date.now()
    };

    // Pre-warm in-memory edge cache
    if (!requestedVersion) {
      setMemoryCurrentVersion(snapshotObj);
    }

    return servePublishedResponse(req, res, snapshotObj, !!requestedVersion, 'MISS_ORIGIN_POPULATED');

  } catch (error: any) {
    console.error('Published questions API error:', error);
    return res.status(500).json({ success: false, error: error.message || 'Internal Server Error' });
  }
}

/**
 * Serves the published payload with strict CDN caching headers and ETag validation
 */
function servePublishedResponse(
  req: VercelRequest,
  res: VercelResponse,
  snapshot: any,
  isImmutableVersion: boolean,
  cacheStatus: string
) {
  const etag = `"v${snapshot.versionId}-${snapshot.checksum}"`;

  // 1. ETag Conditional Validation (304 Not Modified saves 100% bandwidth on repeat checks)
  const clientEtag = req.headers['if-none-match'];
  if (clientEtag && clientEtag === etag) {
    res.setHeader('ETag', etag);
    res.setHeader('X-Cache-Status', cacheStatus);
    res.setHeader('X-Cache-Strategy', isImmutableVersion ? 'IMMUTABLE_VERSION' : 'EDGE_CDN_60S_BOUNDED');
    return res.status(304).end();
  }

  // 2. High-Scale CDN Cache Headers
  if (isImmutableVersion) {
    // Permanent cache for specific historical version (never changes)
    res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    res.setHeader('CDN-Cache-Control', 'max-age=31536000');
  } else {
    // Current published version: 60-second staleness window + 5-minute stale-while-revalidate
    res.setHeader('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=300');
    res.setHeader('CDN-Cache-Control', 'max-age=60');
  }

  res.setHeader('ETag', etag);
  res.setHeader('X-Cache-Status', cacheStatus);
  res.setHeader('X-Cache-Strategy', isImmutableVersion ? 'IMMUTABLE_VERSION' : 'EDGE_CDN_60S_BOUNDED');
  res.setHeader('X-Staleness-Window-Seconds', '60');
  res.setHeader('X-Scale-Target', '1000000_STUDENTS');

  return res.status(200).json({
    success: true,
    versionId: snapshot.versionId,
    versionTag: snapshot.versionTag,
    publishedAt: snapshot.publishedAt,
    questionCount: snapshot.questionCount,
    checksum: snapshot.checksum,
    stalenessWindowSeconds: 60,
    questions: snapshot.payload
  });
}
