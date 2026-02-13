/**
 * Configuration for Pan Logistics Website
 */

// API Configuration
// For production, set your API URL here
const CONFIG = {
    API_URL: 'http://localhost:3000/api', // Development
    // API_URL: 'https://your-api-domain.com/api', // Production
    SITE_NAME: 'Pan Logistics',
    DEFAULT_LANGUAGE: 'en'
};

// Detect environment
const isProduction = window.location.hostname !== 'localhost';

// Use production API if not on localhost
if (isProduction) {
    // Update this with your production API URL
    CONFIG.API_URL = '/api'; // Vercel serverless function or separate backend
}

// Export for use in other scripts
window.CONFIG = CONFIG;
