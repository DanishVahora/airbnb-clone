const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken'); // Ensure you include jwt for token generation
const User = require('./models/user');
require('dotenv').config();
const cors = require('cors');
const bodyParser = require('body-parser');

// Middleware
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: 'http://localhost:5173',
  })
);

// Parse JSON requests
app.use(bodyParser.json());

// MongoDB connection
mongoose
  .connect('mongodb://localhost:27017/booking-app', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Test route
app.get('/test', (req, res) => {
  console.log('Test route hit');
  res.json('Test Ok');
});

// Register route
app.post('/register', async (req, res) => {
  try {
    const { name, email, password, username } = req.body;

    if (!name || !email || !password || !username) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      return res.status(400).json({ error: 'Email or username already exists' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      name,
      email,
      username,
      password: hashedPassword,
    });
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error('Registration error:', err);
    res.status(500).json({ error: 'Registration failed', details: err.message });
  }
});

// Login route
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Log received data
        console.log('Login attempt:', { email });

        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: "Invalid email or password" });
        }

        // Verify the password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: "Invalid email or password" });
        }

        // Generate JWT
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Respond with success
        res.status(200).json({
            message: "Login successful",
            token,
            userId: user._id, // Ensure you send the correct key
        });
    } catch (err) {
        console.error('Login error:', err.message); // Log error details
        res.status(500).json({ error: "Internal server error" });
    }
});


// Start server
app.listen(4000, () => {
  console.log('Server running on http://localhost:4000');
});
