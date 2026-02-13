/**
 * Configuration for Pan Logistics Website
 * 
 * This config uses RELATIVE PATHS for API calls, which works on both:
 * - Local development (localhost:3000/api/...)
 * - Vercel deployment (your-domain.vercel.app/api/...)
 */

const CONFIG = {
    // API URL - Using relative path for Vercel serverless compatibility
    // In production, use relative path so Vercel routes to /api/*
    API_URL: '/api',
    
    SITE_NAME: 'Pan Logistics',
    DEFAULT_LANGUAGE: 'en'
};

/**
 * Safe fetch wrapper that handles JSON parsing errors
 * @param {string} url - The API endpoint (relative path like '/api/login')
 * @param {Object} options - Fetch options
 * @returns {Promise<Object>} - Parsed JSON response
 */
async function safeFetch(url, options = {}) {
    try {
        const response = await fetch(url, {
            ...options,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                ...options.headers
            }
        });

        // Get response text first (safer than direct json())
        const responseText = await response.text();

        // Check if response is empty
        if (!responseText || responseText.trim() === '') {
            throw new Error('Server returned empty response');
        }

        // Try to parse JSON
        let data;
        try {
            data = JSON.parse(responseText);
        } catch (parseError) {
            console.error('JSON parse error:', parseError, 'Response:', responseText.substring(0, 500));
            throw new Error('Invalid JSON from server');
        }

        // Check response status
        if (!response.ok) {
            throw new Error(data.message || `Server error: ${response.status}`);
        }

        return data;
    } catch (error) {
        console.error('API request error:', url, error.message);
        throw error;
    }
}

/**
 * Make authenticated API request
 * @param {string} endpoint - API endpoint (e.g., '/auth/login')
 * @param {Object} options - Fetch options
 * @returns {Promise<Object>} - Parsed JSON response
 */
async function apiRequest(endpoint, options = {}) {
    const token = localStorage.getItem('adminToken');
    const headers = {
        ...options.headers
    };
    
    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }
    
    return safeFetch(`${CONFIG.API_URL}${endpoint}`, {
        ...options,
        headers
    });
}

// Export for use in other scripts
window.CONFIG = CONFIG;
window.safeFetch = safeFetch;
window.apiRequest = apiRequest;
