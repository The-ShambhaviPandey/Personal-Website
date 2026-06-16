# Personal Website Portfolio

This repository contains a personal portfolio website built with React, Vite, Tailwind CSS, and Node.js / Express for a content-backed portfolio. The project includes a frontend SPA, a backend API for posts, and a CMS-style post viewer.

## Project Overview

- **Frontend:** React 18 + Vite
- **Styling:** Tailwind CSS + custom global CSS
- **Routing:** React Router DOM
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Backend:** Node.js + Express
- **Database:** MongoDB via Mongoose

## Features

- Landing page with multi-section portfolio highlights
- Content-driven work posts and case studies
- Universal post viewer at `/post/:slug`
- Responsive navigation and section pages
- Background music player with local playback state
- API endpoints for fetching published posts

## Repository Structure

```text
.
├── public/                # Static assets and public files
├── server/                # Backend API server
│   ├── models/            # Mongoose schemas
│   ├── routes/            # Express route handlers
│   ├── scripts/           # Seed / setup scripts
│   └── index.js           # Server entry point
├── src/                   # Frontend source
│   ├── api/               # Frontend API helpers
│   ├── assets/            # Imported media assets
│   ├── components/        # Reusable UI components
│   ├── data/              # App content and static data
│   ├── pages/             # Page components / routes
│   ├── App.jsx            # App router and layout
│   ├── index.css          # Global styles
│   └── main.jsx           # React entry point
├── package.json           # Frontend dependencies and scripts
├── tailwind.config.js     # Tailwind configuration
├── postcss.config.js      # PostCSS configuration
└── vite.config.js         # Vite configuration
```

## Getting Started

### Frontend

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run development server:

   ```bash
   npm run dev
   ```

3. Build for production:

   ```bash
   npm run build
   ```

4. Preview production build:
   ```bash
   npm run preview
   ```

### Backend

1. Install backend dependencies (if not already installed):

   ```bash
   cd server
   npm install
   ```

2. Create a `.env` file with:

   ```env
   MONGODB_URI=your_mongodb_connection_string
   PORT=5000
   ```

3. Start the server:
   ```bash
   npm start
   ```

> The backend server exposes:
>
> - `GET /api/posts?section=SECTION_NAME` — fetch posts for a section
> - `GET /api/posts/:slug` — fetch a single post by slug

## Environment Variables

The backend uses the following environment variables:

- `MONGODB_URI` — MongoDB connection string
- `PORT` — server port (default: `5000`)

## Key Frontend Pages

- `/` — Home page
- `/know-me` — About page
- `/learnings` — Learning journey
- `/experiments` — Experiment projects
- `/experiences` — Experience listings
- `/milestones` — Milestone stories
- `/contact` — Contact page
- `/post/:slug` — Individual post detail view

## Notes

- The app currently fetches live content from the backend API.
- Post metadata and page content are stored in MongoDB using the `Post` schema.
- The frontend uses static data for non-post pages and page-specific presentation.

## Recommended Improvements

- Add a backend `seed` script in `server/scripts/seed.js` if you want to populate the database locally.
- Add production-ready CORS origins and deployment configuration.
- Add a secure admin panel or content management workflow if editing content is needed.

## License

This repository is for a personal portfolio project.
