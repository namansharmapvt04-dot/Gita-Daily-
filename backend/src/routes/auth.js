const express = require('express');
const router = express.Router();
const { OAuth2Client } = require('google-auth-library');
const pool = require('../config/db');

const client = new OAuth2Client(process.env.GOOGLE_WEB_CLIENT_ID);

// POST /auth/google - sign in (or create on first sign-in) via a Google ID token.
// Matching by google_id first means a returning user always lands back on their
// existing row - streak, score and reading history intact - instead of a fresh one.
router.post('/google', async (req, res) => {
  const { idToken } = req.body;
  if (!idToken) return res.status(400).json({ error: 'Missing idToken' });

  try {
    const ticket = await client.verifyIdToken({
      idToken,
      audience: process.env.GOOGLE_WEB_CLIENT_ID,
    });
    const payload = ticket.getPayload();
    const { sub: googleId, email, name } = payload;

    let result = await pool.query(`SELECT * FROM users WHERE google_id = $1`, [googleId]);

    if (result.rows.length === 0 && email) {
      // Backfill: account created by the old email-based flow, now signing in with Google.
      result = await pool.query(
        `UPDATE users SET google_id = $1 WHERE email = $2 RETURNING *`,
        [googleId, email]
      );
    }

    if (result.rows.length === 0) {
      result = await pool.query(
        `INSERT INTO users (name, email, google_id, auth_provider)
         VALUES ($1, $2, $3, 'google')
         RETURNING *`,
        [name || 'Reader', email, googleId]
      );
    }

    const user = result.rows[0];
    res.json({ user, needsOnboarding: user.state_id === null });
  } catch (err) {
    console.error('POST /auth/google error:', err);
    res.status(401).json({ error: 'Google sign-in failed' });
  }
});

module.exports = router;
