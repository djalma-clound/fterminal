const express = require('express');
const router = express.Router();
const pool = require('../config/db');
const nodemailer = require('nodemailer');

router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Save to database
    await pool.query(
      'INSERT INTO contacts (name, email, message) VALUES ($1, $2, $3)',
      [name, email, message]
    );

    // Only try email if env vars exist
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS && process.env.EMAIL_TO) {

      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      });

      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_TO,
        replyTo: email,
        subject: "New Contact Form Message",
        html: `
          <h3>New message from website</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `
      });

    } else {
      console.log("Email skipped — env vars missing");
    }

    res.json({ success: true, message: "Message saved successfully!" });

  } catch (err) {
    console.error("CONTACT ERROR:", err.message);
    res.status(500).json({ success: false, message: "Server error." });
  }
});

module.exports = router;