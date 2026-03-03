require('dotenv').config();
const express = require('express');
const app = express();
const pool = require('./config/db');

const PORT = process.env.PORT || 3000;

// =====================
// Middleware
// =====================
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// =====================
// Routes
// =====================
const contactRoute = require('./routes/contact');
app.use('/contact', contactRoute);

// Root route
app.get('/', (req, res) => {
    res.send("Server is running 🚀");
});

// =====================
// Start Server AFTER DB Connects
// =====================
async function startServer() {
  try {

    await pool.query('SELECT NOW()');
    console.log("Database connected ✅");

    await pool.query(`
      CREATE TABLE IF NOT EXISTS contacts (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(150) NOT NULL,
        message TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    console.log("Contacts table ready ✅");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

  } catch (err) {
    console.error("Startup error ❌", err);
    process.exit(1);
  }
}

startServer();