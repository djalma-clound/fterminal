const express = require('express');
const router = express.Router();
const pool = require('../config/db');
const nodemailer = require('nodemailer');

router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    await pool.query(
      'INSERT INTO contacts (name, email, message) VALUES ($1, $2, $3)',
      [name, email, message]
    );

    const transporter = nodemailer.createTransport({
  host: "smtp.hostinger.com",
  port: 465,
  secure: true,
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

    res.json({ success: true, message: "Message saved & email sent!" });

  } catch (err) {
  console.error("EMAIL ERROR FULL:", err);
  res.status(500).json({ success: false, message: err.message });
}
});

module.exports = router;