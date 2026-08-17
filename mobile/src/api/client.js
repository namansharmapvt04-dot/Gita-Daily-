// Point this at your deployed backend URL, or localhost:4000 during development
// (use your machine's LAN IP instead of localhost if testing on a physical device).
const BASE_URL = process.env.EXPO_PUBLIC_API_URL || 'https://gita-daily-production-a39d.up.railway.app';
async function request(path, options = {}) {
  const res = await fetch(`${BASE_URL}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.error || `Request failed: ${res.status}`);
  }
  return res.json();
}

// Simple in-memory cache for GET requests — avoids duplicate network calls
// within the same app session. Cache clears on app restart.
const _cache = {};
const CACHE_TTL = 60 * 1000; // 1 minute

async function cachedGet(path) {
  const now = Date.now();
  const hit = _cache[path];
  if (hit && now - hit.ts < CACHE_TTL) return hit.data;
  const data = await request(path);
  _cache[path] = { data, ts: now };
  return data;
}

function invalidate(prefix) {
  Object.keys(_cache).forEach(k => { if (k.startsWith(prefix)) delete _cache[k]; });
}

export const api = {
  getStates: () => cachedGet('/users/states'),           // rarely changes
  getUser: (id) => cachedGet(`/users/${id}`),
  getMyRank: (id) => cachedGet(`/leaderboard/me/${id}`),
  getTodayContent: (id) => cachedGet(`/content/today/${id}`),
  getProgress: (id) => cachedGet(`/content/progress/${id}`),
  getPart: (id, language) => cachedGet(`/content/part/${id}?language=${language || 'en'}`),

  googleAuth: (idToken) => request('/auth/google', { method: 'POST', body: JSON.stringify({ idToken }) }),

  updateUserPrefs: async (id, data) => {
    const result = await request(`/users/${id}`, { method: 'PATCH', body: JSON.stringify(data) });
    invalidate(`/users/${id}`);
    // Language changes affect these too — without this, a stale cache in the old
    // language can stick around for up to CACHE_TTL after switching.
    invalidate(`/content/today/${id}`);
    invalidate(`/content/progress/${id}`);
    return result;
  },

  resetProgress: async (id) => {
    const result = await request(`/users/${id}/reset-progress`, { method: 'POST' });
    invalidate(`/users/${id}`);
    invalidate(`/leaderboard/me/${id}`);
    invalidate(`/content/today/${id}`);
    invalidate(`/content/progress/${id}`);
    return result;
  },

  submitReading: async (data) => {
    const result = await request('/reading/submit', { method: 'POST', body: JSON.stringify(data) });
    // Invalidate cached data that changes after a submission
    invalidate(`/users/${data.userId}`);
    invalidate(`/leaderboard/me/${data.userId}`);
    invalidate(`/content/today/${data.userId}`);
    invalidate(`/content/progress/${data.userId}`);
    return result;
  },

  getLeaderboard: (scope, scopeValue, metric) =>
    request(`/leaderboard?scope=${scope}&scopeValue=${encodeURIComponent(scopeValue || '')}&metric=${metric}`),
};

export default api;