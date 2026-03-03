const express = require('express');
const router = express.Router();
const pool = require('../config/db');

router.post('/', async (req, res) => {
  try {
    console.log("BODY:", req.body);

    const { name, email, message } = req.body;

    await pool.query(
      'INSERT INTO contacts (name, email, message) VALUES ($1, $2, $3)',
      [name, email, message]
    );

    res.json({ success: true, message: "Database working!" });

  } catch (err) {
    console.error("DB ERROR:", err);
    res.status(500).json({ success: false, message: "Database failed." });
  }
});

module.exports = router;