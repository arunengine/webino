# NOVA Studio — Digital Design Agency

A modern creative agency homepage built from scratch using Next.js 14 App Router, Tailwind CSS, and Lucide React. The project focuses on responsive design, reusable React components, clean UI structure, accessibility, and subtle interactions.

## Features

- Fully responsive design across mobile, tablet, and desktop
- Hero section with agency branding, tagline, and CTAs
- Services section with 4 service cards
- Portfolio section showcasing 6 projects
- Contact form with basic client-side validation
- Responsive mobile navigation
- Subtle hover effects and animations
- SEO metadata using Next.js App Router
- Image optimization using next/image

## Tech Stack

- Next.js 14
- React 18
- JavaScript / JSX
- Tailwind CSS
- Lucide React
- Next/Image

## Project Structure

```
nova-studio/
├── app/
│   ├── globals.css         # Global Tailwind directives, grid background, and custom styles
│   ├── layout.js          # Root layout with font configuration, metadata, and viewport export
│   └── page.js            # Main landing page assembling all section components
├── components/
│   ├── Navbar.jsx         # Sticky navigation bar and responsive mobile drawer
│   ├── Hero.jsx           # Hero banner with headline, agency badge, and scroll indicator
│   ├── Services.jsx       # Services section grid container
│   ├── ServiceCard.jsx    # Individual service card component
│   ├── Portfolio.jsx      # Selected work portfolio grid container
│   ├── ProjectCard.jsx    # Portfolio item card with image zoom and hover overlay
│   ├── Contact.jsx        # Contact form with validation and submission state
│   └── Footer.jsx         # Footer with navigation links, branding, and copyright
└── public/
    └── images/            # Project showcase graphics (SVG format)
```

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Production Build

Build the application for production:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## Deployment

The project is structured using the Next.js App Router and is ready to be deployed to Vercel.

## Assumptions & Additional Information

- The contact form is frontend-only and uses simulated submission feedback.
- Portfolio projects and content are demonstration content created for this assignment.
- The NOVA Studio branding and visual design were created specifically for this project.
