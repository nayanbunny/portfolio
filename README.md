# Portfolio Website

A modern, interactive portfolio website built with Next.js, featuring smooth animations, 3D visualizations, and a responsive design.

## Features

- 🎨 **Modern UI** - Glassmorphism and neumorphism design elements
- ✨ **Smooth Animations** - Powered by Framer Motion
- 🌌 **Interactive Effects** - Shooting stars, star backgrounds, and cursor glow effects
- 📊 **3D Visualizations** - Skills radar chart using Three.js
- 🌓 **Theme Support** - Dark and light mode
- 📱 **Responsive Design** - Optimized for all devices
- 🚀 **Static Export** - Deployed to GitHub Pages

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **3D Graphics:** Three.js, React Force Graph 3D
- **Icons:** Lucide React, React Icons
- **Theming:** next-themes

## Getting Started

### Prerequisites

- Node.js 20 or higher
- npm, yarn, pnpm, or bun

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
# Build for production (static export)
npm run build

# Start production server (local testing)
npm start
```

## Project Structure

```
portfolio/
├── app/              # Next.js app directory
├── components/       # React components
│   ├── backgrounds/ # Background effects
│   ├── effects/     # Visual effects
│   ├── layouts/     # Layout components
│   ├── sections/    # Page sections
│   └── ui/          # UI components
├── data/            # Content data files
├── lib/             # Utilities and constants
└── public/          # Static assets
```

## Deployment

The site is automatically deployed to GitHub Pages via GitHub Actions on push to the `main` branch. The build process creates a static export optimized for GitHub Pages.

## License

Private project - All rights reserved.
