require('dotenv').config();
const express = require('express');
const cors = require('cors');
const compression = require('compression');
const rateLimit = require('express-rate-limit');

const authRouter = require('./routes/auth');
const usersRouter = require('./routes/users');
const contentRouter = require('./routes/content');
const readingRouter = require('./routes/reading');
const leaderboardRouter = require('./routes/leaderboard');

const app = express();

// ── Middleware ──
app.use(cors());
app.use(compression());           // gzip all responses — cuts payload size ~70%
app.use(express.json());

// Rate limiting — prevents a single client from hammering the server.
// 100 requests per minute per IP is generous for normal use.
const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many requests, please slow down.' },
});
app.use(limiter);

// ── Routes ──
app.get('/health', (req, res) => res.json({ status: 'ok' }));
app.use('/auth', authRouter);
app.use('/users', usersRouter);
app.use('/content', contentRouter);
app.use('/reading', readingRouter);
app.use('/leaderboard', leaderboardRouter);

// ── Global error handler ──
// Catches any unhandled error thrown in a route so the server never crashes.
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

// ── Uncaught exception / rejection guards ──
// Last-resort safety net — logs the error but keeps the process alive.
process.on('uncaughtException', (err) => {
  console.error('Uncaught exception (server kept alive):', err);
});
process.on('unhandledRejection', (reason) => {
  console.error('Unhandled promise rejection (server kept alive):', reason);
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Gita Daily API running on port ${PORT}`));