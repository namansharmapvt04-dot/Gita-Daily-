# Gita Daily — multi-language Bhagavad Gita reading app

A daily-streak reading app for the Bhagavad Gita: short "Parts" (not full chapters),
per-shloka explanations, comprehension quizzes, and city + national leaderboards.

## Structure

```
gita-app/
  backend/    Node.js + Express API, PostgreSQL
  mobile/     React Native (Expo) app
```

## Why this stack

- **Read-heavy, mostly-static content** (shlokas, explanations, questions) → served from
  Postgres but designed to sit behind a CDN/cache once traffic grows. No live AI calls at
  runtime — everything is pre-generated and stored.
- **Write-light** — the only frequent writes are: mark part read, submit quiz answer,
  update streak/score. This is what actually needs to scale for concurrent users, and it's
  a small, simple write path (a few rows per user per day).
- **1000 concurrent users is not a hard scaling problem** for this shape of app. The plan:
  1. Postgres with proper indexes (see schema.sql) handles this alone, easily.
  2. Redis cache in front of leaderboard queries (expensive aggregate reads) — added in Phase 2.
  3. Static content (verses/explanations) cached at the edge (CDN or Redis) — added in Phase 2.
  4. Horizontal scaling of the API server (stateless, so this is trivial) if needed later.

## Getting started

### Backend
```
cd backend
cp .env.example .env   # fill in your Postgres connection string
npm install
npm run db:setup       # creates schema + seeds states/cities + sample chapter 1 content
npm run dev
```

### Mobile
```
cd mobile
npm install
npx expo start
```

## Build phases (matches our plan)

- [x] Phase 1: schema, seed data, core API, onboarding + home screen wired to real data
- [ ] Phase 2: Redis caching, all 18 chapters seeded, notifications
- [ ] Phase 3: streak freeze logic, quick-read mode, city leaderboard page
- [ ] Phase 4: load testing at 1000+ concurrent, CDN for static content, international expansion
