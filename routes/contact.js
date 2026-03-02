const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ error: "All fields are required" });
        }

        console.log("New message:", { name, email, message });

        // You can connect database or email service here

        res.status(200).json({ success: true, message: "Message received!" });

    } catch (error) {
        console.error("Contact error:", error);
        res.status(500).json({ error: "Server error" });
    }
});

module.exports = router;