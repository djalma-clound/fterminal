const express = require('express');
const router = express.Router();
const pool = require('../config/db');

router.post('/', async (req, res) => {
    try {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ error: "All fields required" });
        }

        await pool.execute(
            "INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)",
            [name, email, message]
        );

        // res.status(200).json({ success: true, message: "Message saved successfully!" });
        res.status(200).json({ success: true, message: "thank you for your message", redirectUrl: "https://djalmad.onrender.com" });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Database error" });
    }
});

module.exports = router;