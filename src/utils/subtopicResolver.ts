import { Question } from '../types';

/**
 * Intelligent Sub-topic Classifier & Resolver
 * Accurately extracts and assigns specific subtopics for all questions across
 * Biology, Physics, and Chemistry, eliminating long comma-separated syllabus strings.
 */

// Keyword rules for The Living World subtopics
const LIVING_WORLD_SUBTOPICS = [
  {
    name: 'Taxonomical Aids',
    keywords: [
      'herbarium', 'botanical garden', 'museum', 'zoological park', 'zoo',
      'key', 'couplet', 'lead', 'flora', 'manual', 'monograph', 'catalogue',
      'preserved in', 'sheets', 'kew', 'howrah'
    ]
  },
  {
    name: 'Taxonomic Categories & Hierarchy',
    keywords: [
      'species', 'genus', 'family', 'order', 'class', 'phylum', 'division',
      'kingdom', 'taxon', 'taxa', 'hierarchy', 'solanaceae', 'felidae',
      'canidae', 'panthera', 'homo', 'sapiens', 'suffix', 'tricolor',
      'nigrum', 'tuberosum', 'musca', 'domestica', 'mangifera', 'indica',
      'triticum', 'aestivum', 'hominidae', 'primata', 'mammalia', 'chordata',
      'poaceae', 'poales', 'monocotyledonae', 'angiospermae'
    ]
  },
  {
    name: 'Binomial Nomenclature',
    keywords: [
      'binomial', 'nomenclature', 'linnaeus', 'icbn', 'iczn', 'generic',
      'specific epithet', 'latin', 'author citation', 'mayr', 'systema',
      'two-word', 'scientific name', 'handwritten', 'italics', 'identification',
      'classification system'
    ]
  },
  {
    name: 'What is Living?',
    keywords: [
      'growth', 'reproduction', 'metabolism', 'consciousness', 'cellular organisation',
      'self-consciousness', 'defining property', 'defining feature', 'extrinsic',
      'intrinsic', 'twin characteristic', 'sterile', 'mule', 'worker bee',
      'in vitro', 'catabolism', 'anabolism', 'homeostasis'
    ]
  },
  {
    name: 'Diversity in the Living World',
    keywords: [
      'biodiversity', 'million', 'identified', 'known species', 'range', 'variability',
      '1.7', '1.8'
    ]
  }
];

export function resolveQuestionSubtopic(q: Question): string {
  if (!q) return 'General';

  const sub = q.subject || 'General';
  const ch = (q.chapter || '').trim();
  const top = (q.topic || (q as any).subtopic || '').trim();
  const qText = ((q.questionText || (q as any).question || '') + ' ' + (q.explanation || '')).toLowerCase();

  // 1. BIOLOGY
  if (sub === 'Biology') {
    const chLower = ch.toLowerCase();
    
    // Specially handle The Living World / Diversity in Living World
    if (chLower.includes('living world') || chLower.includes('diversity in the living world')) {
      let bestSub = 'The Living World';
      let maxScore = 0;
      for (const rule of LIVING_WORLD_SUBTOPICS) {
        let score = 0;
        for (const kw of rule.keywords) {
          if (qText.includes(kw)) score++;
        }
        if (score > maxScore) {
          maxScore = score;
          bestSub = rule.name;
        }
      }
      return bestSub;
    }

    // If topic is already specific and clean (no commas / syllabus list)
    if (top && !top.includes(',') && top.length <= 45 && !top.toLowerCase().includes('chapter')) {
      return top;
    }

    // If topic has comma-separated syllabus list (like fingertips biology)
    if (top && top.includes(',')) {
      const candidates = top.split(',').map(s => s.trim()).filter(s => s.length > 2);
      let bestCandidate = candidates[0];
      let bestScore = 0;
      for (const cand of candidates) {
        const words = cand.toLowerCase().split(/[^a-z0-9]+/).filter(w => w.length >= 3);
        let score = 0;
        for (const w of words) {
          if (qText.includes(w)) score++;
        }
        if (score > bestScore) {
          bestScore = score;
          bestCandidate = cand;
        }
      }
      return bestCandidate;
    }

    return ch || 'General Biology';
  }

  // 2. PHYSICS
  if (sub === 'Physics') {
    const chLower = ch.toLowerCase();
    
    // Kinematics (Motion in 1D and 2D combined)
    if (
      chLower.includes('motion in one dimension') ||
      chLower.includes('motion in a straight line') ||
      chLower.includes('motion in a plane') ||
      chLower.includes('motion in 1d') ||
      chLower.includes('motion in 2d') ||
      chLower.includes('kinematic')
    ) {
      const is2D = (
        chLower.includes('plane') ||
        chLower.includes('2d') ||
        qText.includes('projectile') ||
        qText.includes('trajectory') ||
        qText.includes('circular motion') ||
        qText.includes('radius') ||
        qText.includes('angular velocity') ||
        qText.includes('range') ||
        qText.includes('angle of projection')
      );
      if (top && !top.includes(',') && top.length <= 35 && !top.toLowerCase().includes('motion in')) {
        return top;
      }
      return is2D ? 'Motion in a Plane (2D)' : 'Motion in a Straight Line (1D)';
    }

    // Units and Measurements
    if (
      chLower.includes('unit') ||
      chLower.includes('dimension') ||
      chLower.includes('measurement') ||
      chLower.includes('physical world')
    ) {
      if (qText.includes('dimension') || qText.includes('m^') || qText.includes('l^') || qText.includes('t^-') || qText.includes('[m') || qText.includes('[l') || qText.includes('[t')) {
        return 'Dimensional Analysis';
      }
      if (qText.includes('error') || qText.includes('percentage') || qText.includes('delta')) {
        return 'Errors of Measurement';
      }
      if (qText.includes('significant') || qText.includes('rounding')) {
        return 'Significant Figures';
      }
      if (qText.includes('vernier') || qText.includes('screw gauge') || qText.includes('least count')) {
        return 'Measuring Instruments';
      }
      if (qText.includes('unit') || qText.includes('joule') || qText.includes('newton') || qText.includes('si unit')) {
        return 'Units & Systems of Units';
      }
      if (top && !top.includes(',') && top.length <= 40) {
        return top;
      }
      return 'Units and Measurements';
    }

    if (top && !top.includes(',') && top.length <= 40) {
      return top;
    }
    return ch || 'General Physics';
  }

  // 3. CHEMISTRY
  if (top && !top.includes(',') && top.length <= 40) {
    return top;
  }
  return ch || 'General Chemistry';
}

export function normalizeChapterForDisplay(subject: string, chapter: string): string {
  const ch = (chapter || '').trim();
  const chLower = ch.toLowerCase();

  if (subject === 'Physics') {
    if (
      chLower.includes('motion in one dimension') ||
      chLower.includes('motion in a straight line') ||
      chLower.includes('motion in a plane') ||
      chLower.includes('motion in 1d') ||
      chLower.includes('motion in 2d') ||
      chLower.includes('kinematic')
    ) {
      return 'Kinematics';
    }
    if (
      chLower.includes('unit') ||
      chLower.includes('physical world') ||
      chLower.includes('physics and measurement') ||
      chLower.includes('physics & measurement') ||
      chLower.includes('physics measurement')
    ) {
      return 'Units and Measurements';
    }
  }

  if (subject === 'Biology') {
    if (chLower.includes('living world') || chLower.includes('diversity in the living world')) {
      return 'The Living World';
    }
  }

  return ch;
}

export function getQuestionDisplayTag(q: Question): string {
  const sub = q.subject || 'General';
  const cleanCh = normalizeChapterForDisplay(sub, q.chapter || '');
  const subtopic = resolveQuestionSubtopic(q);

  if (subtopic && subtopic !== cleanCh && !subtopic.includes(',')) {
    return '[' + sub + ' • ' + cleanCh + ' • ' + subtopic + ']';
  }
  return '[' + sub + ' • ' + cleanCh + ']';
}