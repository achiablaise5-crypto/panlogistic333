/**
 * Vercel Serverless Function Entry Point
 * This handles all /api/* routes on Vercel deployment
 */

require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

// CORS - Allow all origins for mobile compatibility
app.use(cors());
app.use(express.json({ limit: '10mb' }));

// Import routes from server folder
const authRoutes = require('../server/routes/auth');
const bookingRoutes = require('../server/routes/bookings');
const trackingRoutes = require('../server/routes/tracking');
const contactRoutes = require('../server/routes/contact');
const blogRoutes = require('../server/routes/blog');

// Mount routes
app.use('/auth', authRoutes);
app.use('/bookings', bookingRoutes);
app.use('/tracking', trackingRoutes);
app.use('/contact', contactRoutes);
app.use('/blog', blogRoutes);

// Health check
app.get('/health', (req, res) => {
    res.json({ success: true, message: 'API is running' });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({ success: false, message: 'Endpoint not found' });
});

// Export for Vercel
module.exports = app;
