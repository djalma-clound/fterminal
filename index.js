require('dotenv').config();
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Routes
const contactRoute = require('./routes/contact');
app.use('/contact', contactRoute);

// Health check (important for Render)
app.get('/', (req, res) => {
    res.send("Server is running 🚀");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});