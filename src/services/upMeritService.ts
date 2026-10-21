import {
  UP_MERIT_R1_SUMMARY,
  UP_MERIT_R2_SUMMARY,
  UpMeritCandidate,
  UpRoundSummary
} from '../data/upMeritSummary';

export interface UpForecastResult {
  round: 'Round 1' | 'Round 2';
  air: number;
  estimatedMarks: number;
  stateRank: number;
  categoryRank: number;
  totalInState: number;
  totalInCat: number;
  statePercentile: number;
  categoryPercentile: number;
  mappedCategory: string;
  nearbyCandidates: UpMeritCandidate[];
}

// Map general predictor category to UP categories:
// 'OPEN' -> 'UR'
// 'OBC' -> 'BC'
// 'EWS' -> 'EW'
// 'SC' -> 'SC'
// 'ST' -> 'ST'
export function mapToUpCategory(cat: string): string {
  const c = cat.toUpperCase();
  if (c === 'OPEN' || c === 'UR' || c.includes('GEN')) return 'UR';
  if (c === 'OBC' || c === 'BC') return 'BC';
  if (c === 'EWS' || c === 'EW') return 'EW';
  if (c === 'SC') return 'SC';
  if (c === 'ST') return 'ST';
  return 'UR';
}

export function getUpRoundSummary(round: 'Round 1' | 'Round 2'): UpRoundSummary {
  return round === 'Round 1' ? UP_MERIT_R1_SUMMARY : UP_MERIT_R2_SUMMARY;
}

export function getUpForecast(
  air: number,
  round: 'Round 1' | 'Round 2',
  category: string = 'OPEN'
): UpForecastResult {
  const summary = getUpRoundSummary(round);
  const upCat = mapToUpCategory(category);
  const samples = summary.samples;

  if (samples.length === 0) {
    return {
      round,
      air,
      estimatedMarks: 0,
      stateRank: 0,
      categoryRank: 0,
      totalInState: summary.totalCandidates,
      totalInCat: summary.categoryCounts[upCat] || 0,
      statePercentile: 0,
      categoryPercentile: 0,
      mappedCategory: upCat,
      nearbyCandidates: []
    };
  }

  // Find exact match or surrounding samples
  let exact = samples.find(s => s.air === air);
  let lowerSample: UpMeritCandidate | null = null;
  let upperSample: UpMeritCandidate | null = null;

  for (let i = 0; i < samples.length; i++) {
    const s = samples[i];
    if (s.air <= air) {
      if (!lowerSample || s.air > lowerSample.air) {
        lowerSample = s;
      }
    }
    if (s.air >= air) {
      if (!upperSample || s.air < upperSample.air) {
        upperSample = s;
      }
    }
  }

  let stateRank = 1;
  let estimatedMarks = summary.maxScore;
  let categoryRank = 1;

  if (exact) {
    stateRank = exact.sr;
    estimatedMarks = exact.marks;
    categoryRank = exact.catRank;
  } else if (!lowerSample && upperSample) {
    // Top of the state
    stateRank = Math.max(1, Math.round(upperSample.sr * (air / Math.max(1, upperSample.air))));
    estimatedMarks = summary.maxScore;
    categoryRank = Math.max(1, Math.round(upperSample.catRank * (air / Math.max(1, upperSample.air))));
  } else if (lowerSample && !upperSample) {
    // Bottom of the state
    stateRank = summary.totalCandidates;
    estimatedMarks = summary.minScore;
    const catTotal = summary.categoryCounts[upCat] || 1000;
    categoryRank = catTotal;
  } else if (lowerSample && upperSample) {
    const airDiff = upperSample.air - lowerSample.air;
    const ratio = airDiff > 0 ? (air - lowerSample.air) / airDiff : 0;
    stateRank = Math.round(lowerSample.sr + ratio * (upperSample.sr - lowerSample.sr));
    estimatedMarks = Math.round(lowerSample.marks + ratio * (upperSample.marks - lowerSample.marks));

    // Category rank interpolation
    const lowCatRank = lowerSample.catRank || 1;
    const upCatRank = upperSample.catRank || lowCatRank;
    categoryRank = Math.round(lowCatRank + ratio * (upCatRank - lowCatRank));
  }

  stateRank = Math.max(1, Math.min(stateRank, summary.totalCandidates));
  const totalInCat = summary.categoryCounts[upCat] || Math.round(summary.totalCandidates * 0.4);
  categoryRank = Math.max(1, Math.min(categoryRank, totalInCat));

  const statePercentile = Math.max(0, Math.min(100, Number(((1 - stateRank / summary.totalCandidates) * 100).toFixed(2))));
  const categoryPercentile = Math.max(0, Math.min(100, Number(((1 - categoryRank / totalInCat) * 100).toFixed(2))));

  // Pick nearby candidates from samples centered around stateRank
  const sortedByDistance = [...samples].sort((a, b) => Math.abs(a.air - air) - Math.abs(b.air - air));
  const nearbyCandidates = sortedByDistance.slice(0, 7).sort((a, b) => a.air - b.air);

  return {
    round,
    air,
    estimatedMarks,
    stateRank,
    categoryRank,
    totalInState: summary.totalCandidates,
    totalInCat,
    statePercentile,
    categoryPercentile,
    mappedCategory: upCat,
    nearbyCandidates
  };
}
