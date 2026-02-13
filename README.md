# Pan Logistics Website

A complete logistics company website with admin dashboard, blog, booking system, and Supabase database integration.

## Features

- **Public Pages**: Home, Services, About, Booking, Tracking, Blog, Contact
- **Admin Dashboard**: Full CMS with rich text editor (Quill), data management, export functionality
- **Authentication**: JWT-based admin login
- **Database**: Supabase (PostgreSQL) integration
- **Bilingual**: English/French language support
- **Responsive**: Mobile-friendly design

## Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Backend**: Node.js + Express (for API)
- **Database**: Supabase (PostgreSQL)
- **Deployment**: Vercel (frontend), Node.js server (backend)

## Getting Started

### 1. Database Setup (Supabase)

1. Create a project at [supabase.com](https://supabase.com)
2. Go to SQL Editor and run the schema files:
   - `server/database/supabase-schema.sql` - Main tables
   - `server/database/blog-schema.sql` - Blog tables

### 2. Environment Variables

Copy `.env.example` to `.env` and fill in your values:

```bash
cp server/.env.example server/.env
```

Required variables:
- `SUPABASE_URL` - Your Supabase project URL
- `SUPABASE_KEY` - Your Supabase anon/public key
- `JWT_SECRET` - Secret key for JWT tokens
- `PORT` - Server port (default: 3000)

### 3. Install Dependencies

```bash
cd server
npm install
```

### 4. Start Development Server

```bash
cd server
npm start
```

Visit `http://localhost:3000`

## Deployment

### Frontend (Vercel)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will auto-detect static files
4. Set environment variables in Vercel dashboard if needed

### Backend API

For production, deploy the Node.js server:

**Option 1: Heroku/Railway/Render**
```bash
# Push server folder to your platform
```

**Option 2: Vercel Serverless**
Create `api/` directory with endpoints, or use Vercel Edge Functions.

### API URL Configuration

For production, update `js/config.js`:

```javascript
CONFIG.API_URL = 'https://your-api-domain.com/api';
```

Or set environment variable:
```html
<script>
window.API_URL = 'https://your-api-domain.com/api';
</script>
```

## Admin Login

Default credentials (change in production):
- Email: admin@panlogistics.com
- Password: admin123

## Project Structure

```
├── index.html          # Home page
├── services.html       # Services page
├── about.html          # About page
├── booking.html        # Booking form
├── tracking.html       # Shipment tracking
├── blog.html           # Public blog
├── contact.html        # Contact form
├── admin-login.html    # Admin login
├── admin-dashboard.html # Admin dashboard
├── css/
│   └── style.css       # Main stylesheet
├── js/
│   ├── config.js       # API configuration
│   ├── script.js       # Main JavaScript
│   ├── language.js     # Language switcher
│   ├── translations.js # Translation strings
│   ├── en.json         # English translations
│   └── fr.json         # French translations
├── server/
│   ├── server.js       # Express server
│   ├── config/
│   │   ├── db.js       # Database config
│   │   └── supabase.js # Supabase client
│   ├── controllers/    # API controllers
│   ├── models/         # Data models
│   ├── routes/         # API routes
│   ├── middleware/     # Auth middleware
│   ├── database/       # SQL schemas
│   └── utils/          # Utilities
└── vercel.json         # Vercel configuration
```

## License

MIT
