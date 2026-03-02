const express = require('express');
const router = express.Router();
const pool = require('../config/db');

router.post('/', async (req, res) => {
    try {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ error: "All fields required" });
        }

        await pool.query(
            "INSERT INTO contacts (name, email, message) VALUES ($1, $2, $3)",
            [name, email, message]
        );

        res.status(200).json({ success: true, message: "Message saved!" });

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Database error" });
    }
});

module.exports = router;