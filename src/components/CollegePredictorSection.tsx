import React, { useState, useEffect } from 'react';
import { Search, MapPin, Building2, TrendingUp, Trophy } from 'lucide-react';

interface CollegeData {
  institute: string;
  course: string;
  category: string;
  quota: string;
  closing_rank: number;
  opening_rank: number;
}

export const CollegePredictorSection: React.FC<{ initialAir?: number; isInsideScorecard?: boolean; }> = ({ initialAir, isInsideScorecard }) => {
  const [userRank, setUserRank] = useState<string>(initialAir ? initialAir.toString() : '');
  const [userCategory, setUserCategory] = useState<string>('Open');
  const [userQuota, setUserQuota] = useState<string>('All');
  const [searchInstitute, setSearchInstitute] = useState<string>('');
  const [data, setData] = useState<CollegeData[]>([]);
  const [results, setResults] = useState<CollegeData[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data/closing_ranks.json')
      .then(res => res.json())
      .then(d => {
        setData(d);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to load college data:', err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (initialAir && initialAir > 0) {
      setUserRank(initialAir.toString());
    }
  }, [initialAir]);

  const handlePredict = () => {
    const rank = parseInt(userRank, 10);
    if (isNaN(rank) || rank <= 0) return;

    // Filter by rank, category, quota and optional institute search
    const available = data.filter(d => {
      const catLower = d.category.toLowerCase();
      const userCatLower = userCategory.toLowerCase();

      let matchCategory = false;
      if (userCatLower.includes('pwd') || userCatLower.includes('ph')) {
        matchCategory = catLower.includes(userCatLower);
      } else {
        const isPwdEntry = catLower.includes('pwd') || catLower.includes('ph');
        if (isPwdEntry) {
          matchCategory = false;
        } else {
          matchCategory = catLower === userCatLower || catLower.includes(userCatLower);
        }
      }

      const matchQuota = userQuota === 'All' || d.quota === userQuota;
      const matchRank = rank <= d.closing_rank;
      const matchInstitute = searchInstitute 
        ? d.institute.toLowerCase().includes(searchInstitute.toLowerCase()) 
        : true;
        
      return matchCategory && matchQuota && matchRank && matchInstitute;
    });

    // Sort by closing rank ascending (best colleges first)
    available.sort((a, b) => a.closing_rank - b.closing_rank);
    setResults(available);
  };

  const getProbability = (rank: number, closing: number) => {
    if (rank <= closing * 0.6) return { label: 'High', color: 'bg-emerald-100 text-emerald-700 border-emerald-200' };
    if (rank <= closing * 0.85) return { label: 'Good', color: 'bg-orange-100 text-orange-700 border-orange-200' };
    return { label: 'Borderline', color: 'bg-amber-100 text-amber-700 border-amber-200' };
  };

  // Trigger search dynamically when data, userRank, or filters change
  useEffect(() => {
    if (!loading && data.length > 0 && userRank) {
      handlePredict();
    }
  }, [loading, data, userRank, userCategory, userQuota, searchInstitute]);

  const uniqueCategories = Array.from(new Set(data.map(d => d.category)));
  const uniqueQuotas = Array.from(new Set(data.map(d => d.quota))).filter(Boolean);

  return (
    <div className="max-w-6xl mx-auto space-y-6 animate-in fade-in duration-300">
      <div className="bg-sky-50/60 p-6 rounded-2xl shadow-sm border border-sky-200">
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-3 bg-orange-100 rounded-lg">
            <Trophy className="w-6 h-6 text-orange-600" />
          </div>
          <h2 className="text-2xl font-bold text-sky-900">All India Rank College Predictor</h2>
        </div>
        <p className="text-sky-600 mb-6 text-sm">
          Enter your expected or actual NEET All India Rank (AIR) and category to predict your probability of getting into top medical colleges (AIIMS, JIPMER, and other premium institutes).
        </p>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-sky-800">All India Rank (AIR)</label>
            <input 
              type="number"
              min="1"
              value={userRank}
              onChange={e => setUserRank(e.target.value)}
              placeholder="e.g. 450"
              className="w-full p-3 rounded-xl border border-sky-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-sky-800">Category</label>
            <select 
              value={userCategory}
              onChange={e => setUserCategory(e.target.value)}
              className="w-full p-3 rounded-xl border border-sky-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition bg-sky-50/60"
            >
              {uniqueCategories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-sky-800">Quota</label>
            <select 
              value={userQuota}
              onChange={e => setUserQuota(e.target.value)}
              className="w-full p-3 rounded-xl border border-sky-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition bg-sky-50/60"
            >
              <option value="All">All Quotas</option>
              {uniqueQuotas.map(q => (
                <option key={q} value={q}>{q}</option>
              ))}
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-sky-800">Search Institute</label>
            <input 
              type="text"
              value={searchInstitute}
              onChange={e => setSearchInstitute(e.target.value)}
              placeholder="e.g. AIIMS"
              className="w-full p-3 rounded-xl border border-sky-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition"
            />
          </div>
          <div className="flex items-end">
            <button
              onClick={handlePredict}
              disabled={!userRank || loading}
              className="w-full p-3 bg-orange-600 hover:bg-orange-700 disabled:opacity-50 text-white font-bold rounded-xl transition shadow-md shadow-amber-200 flex justify-center items-center gap-4"
            >
              <Search className="w-5 h-5" />
              <span>Predict Colleges</span>
            </button>
          </div>
        </div>
      </div>

      {results !== null && (
        <div className="bg-sky-50/60 p-6 rounded-2xl shadow-sm border border-sky-200">
          <h3 className="text-lg font-bold text-sky-900 mb-4 flex items-center gap-4">
            <Building2 className="w-5 h-5 text-rose-500" />
            <span>Predicted Colleges ({results.length})</span>
          </h3>
          
          {results.length === 0 ? (
            <div className="text-center py-8 text-sky-600 bg-sky-50 rounded-xl border border-stone-100 border-dashed">
              No colleges found for Rank {userRank} in {userCategory} category based on previous year closing ranks.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-sky-50 text-sky-600 text-xs uppercase tracking-wider">
                    <th className="p-3 font-semibold rounded-tl-lg">Institute</th>
                    <th className="p-3 font-semibold">Course</th>
                    <th className="p-3 font-semibold">Quota</th>
                    <th className="p-3 font-semibold">Category</th>
                    <th className="p-3 font-semibold">Probability</th>
                    <th className="p-3 font-semibold text-right rounded-tr-lg">Closing Rank</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  {results.map((r, idx) => {
                    const prob = getProbability(parseInt(userRank, 10), r.closing_rank);
                    return (
                      <tr key={idx} className="hover:bg-orange-50/50 transition">
                        <td className="p-3">
                          <div className="font-semibold text-sm text-sky-900">{r.institute}</div>
                        </td>
                        <td className="p-3 text-sm text-sky-700">{r.course}</td>
                        <td className="p-3 text-sm text-sky-700">{r.quota}</td>
                        <td className="p-3">
                          <span className="inline-block px-2 py-1 bg-sky-50 text-sky-700 text-[11px] font-bold rounded-md">
                            {r.category}
                          </span>
                        </td>
                        <td className="p-3">
                          <span className={`inline-block px-2.5 py-1 text-xs font-bold rounded-full border ${prob.color}`}>
                            {prob.label}
                          </span>
                        </td>
                        <td className="p-3 text-right">
                          <span className="inline-block px-2 py-1 bg-sky-800 text-white text-sm font-bold rounded-md font-mono shadow-sm">
                            {r.closing_rank}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

