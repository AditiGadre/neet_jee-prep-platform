import React, { useState } from 'react';
import { Lock } from 'lucide-react';

// SHA-256 of the section password. Only the hash is kept in the code, never the password itself.
// To change the password: run  node -e "console.log(require('crypto').createHash('sha256').update('NewPassword').digest('hex'))"
// and paste the result here.
const SECTION_PASSWORD_SHA256 = 'cd5452630c3ce0c6d094394874205ed0c383aa076749305b25ee9ea240158ad6';
const UNLOCK_KEY = 'neet_admin_section_unlocked_until';
const UNLOCK_MINUTES = 30;

async function sha256Hex(text: string): Promise<string> {
  const bytes = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text));
  return Array.from(new Uint8Array(bytes)).map(b => b.toString(16).padStart(2, '0')).join('');
}

/** True while this browser tab has entered the section password in the last UNLOCK_MINUTES minutes. */
export function isSectionUnlocked(): boolean {
  try {
    return Date.now() < Number(sessionStorage.getItem(UNLOCK_KEY) || 0);
  } catch {
    return false;
  }
}

export function lockSection(): void {
  try { sessionStorage.removeItem(UNLOCK_KEY); } catch { /* storage unavailable */ }
}

/** Password screen shown in place of the Students and Payments tabs until the admin enters the section password. */
export const SectionPasswordGate: React.FC<{ sectionName: string; onUnlock: () => void }> = ({ sectionName, onUnlock }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [fails, setFails] = useState(0);
  const [waitUntil, setWaitUntil] = useState(0);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (Date.now() < waitUntil) {
      setError('Too many wrong tries. Wait a minute and try again.');
      return;
    }
    if ((await sha256Hex(password)) === SECTION_PASSWORD_SHA256) {
      try { sessionStorage.setItem(UNLOCK_KEY, String(Date.now() + UNLOCK_MINUTES * 60_000)); } catch { /* storage unavailable */ }
      setPassword('');
      setError(null);
      setFails(0);
      onUnlock();
    } else {
      const n = fails + 1;
      setFails(n);
      if (n >= 5) setWaitUntil(Date.now() + 60_000);
      setPassword('');
      setError('Wrong password.');
    }
  };

  return (
    <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#e2e8f4] text-[#0f172a] shadow-sm max-w-md mx-auto">
      <form onSubmit={submit} className="space-y-4">
        <div className="flex items-center space-x-2">
          <Lock className="w-5 h-5 text-[var(--primary)]" />
          <h2 className="text-lg font-bold">{sectionName} is password-protected</h2>
        </div>
        <p className="text-sm text-slate-500">Enter the section password to view it. It stays open in this tab for {UNLOCK_MINUTES} minutes.</p>
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          autoFocus
          autoComplete="current-password"
          aria-label="Section password"
          placeholder="Section password"
          className="w-full px-3 py-2 rounded-lg border border-[#e2e8f4] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
        />
        {error && <p role="alert" className="text-sm text-red-600">{error}</p>}
        <button type="submit" className="px-4 py-2 rounded-full bg-[var(--primary)] text-white text-sm font-bold cursor-pointer">
          Unlock
        </button>
      </form>
    </div>
  );
};
