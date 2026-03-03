const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  console.log("CONTACT HIT");
  res.json({ success: true, message: "Route working!" });
});

module.exports = router;



// const express = require('express');
// const router = express.Router();
// const pool = require('../config/db');
// const nodemailer = require('nodemailer');

// router.post('/', async (req, res) => {
//   try {
//     const { name, email, message } = req.body;

//     // ✅ Save to database
//     await pool.query(
//       'INSERT INTO contacts (name, email, message) VALUES ($1, $2, $3)',
//       [name, email, message]
//     );

//     // ✅ Create transporter
//     const transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS
//       }
//     });

//     // ✅ Send email
// await transporter.sendMail({
//   from: process.env.EMAIL_USER,
//   to: process.env.EMAIL_TO,
//   replyTo: email,
//   subject: "New Contact Form Message 🚀",
//   html: `
//     <h3>New message from website</h3>
//     <p><strong>Name:</strong> ${name}</p>
//     <p><strong>Email:</strong> ${email}</p>
//     <p><strong>Message:</strong></p>
//     <p>${message}</p>
//   `
// });
//     res.json({ success: true, message: "Message saved & email sent!", link: "https://djalmad.onrender.com" });

//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ success: false, message: "Error sending message", link: "https://djalmad.onrender.com" });
//   }
// });

// module.exports = router;