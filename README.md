# Keen Keeper

Keen Keeper is a relationship-tracking web app built to help you stay close to the people who matter most. It gives you a clean dashboard for monitoring friend activity, viewing interaction timelines, and checking connection health at a glance.

## Description

This project focuses on personal relationship management and lightweight relationship tracking. It is built to help users keep an organized view of the people in their lives, understand how often they connect, and act before important relationships drift.

The app is organized around a few core workflows:

- Browse a friend list and quickly scan connection status, notes, and profile details.
- Open an individual friend page to review contact information, goals, and recent relationship context.
- Log quick check-ins such as calls, texts, and video chats so every interaction is captured in the timeline.
- Review analytics and charts to see how communication is distributed across interaction types.
- Use the animated global 404 page and responsive layout for a polished experience across devices.

The interface is designed to feel calm, polished, and responsive across desktop and mobile devices, with a strong focus on readability and quick navigation.

## Technologies Used

- Next.js 16
- React 19
- Tailwind CSS 4
- daisyUI
- Recharts
- React Icons
- React Toastify
- React Spinners
- Motion

## Key Features

- Dashboard with friend summary cards and status counts
- Friend detail pages with profile information and quick check-in actions
- Timeline view for recent interactions
- Stats page with interaction breakdown charts
- Responsive UI across mobile, tablet, and desktop
- Custom animated global 404 page
- Local JSON-based friend data for fast prototyping

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `src/app/Home` - main dashboard
- `src/app/Details` - friend overview and detail views
- `src/app/Timeline` - interaction history
- `src/app/Stats` - analytics and charts
- `src/context` - shared event state

## Notes

The project currently uses local JSON data for friends and context-based state for timeline events. That makes it easy to extend later with a real backend or database.
