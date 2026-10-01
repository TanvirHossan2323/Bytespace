# Bytespace

> A responsive learning platform UI for discovering courses, building new skills, and connecting learners with course creators.

[Live Website](https://tanvirhossan2323.github.io/Bytespace/) · React · Vite · Tailwind CSS · Lucide

## About

Bytespace is the frontend for an online learning platform. Visitors can browse and search courses, filter by category, and explore sections for creators and learners. The layout is designed to work across desktop and mobile screens.

## Features

- Course search and category filters
- Course cards with images, ratings, lesson details, instructors, and prices
- Learning paths, creator features, and learner testimonials
- Responsive mobile navigation
- Sign-in and sign-up pages
- GitHub Actions workflow for GitHub Pages deployment

## Tech Stack

| Technology | Purpose |
| --- | --- |
| React | UI components and pages |
| Vite | Development server and production builds |
| Tailwind CSS | Responsive styling and design system |
| Lucide React | Interface icons |
| GitHub Actions | Automated build and deployment |
| GitHub Pages | Static website hosting |

## Run Locally

Clone the repository, open the project folder, and install the dependencies:

```bash
git clone https://github.com/TanvirHossan2323/Bytespace.git
cd Bytespace
npm install
npm run dev
```

Open the local URL printed in the terminal. The sign-in and sign-up pages are available at `/login` and `/signup`.

## Useful Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Create the production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run the code linter |

## Project Structure

```text
src/
├── App.jsx                         # Selects a page based on the URL
├── main.jsx                        # React application entry point
├── pages/
│   ├── HomePage.jsx                # Homepage layout and shared state
│   └── AuthPage.jsx                # Sign-in and sign-up UI
├── components/
│   ├── NavigationLink.jsx          # Client-side page navigation
│   ├── branding/
│   │   └── HomeBranding.jsx        # Logo and decorative artwork
│   └── home/                       # Individual homepage sections
├── data/
│   └── homepage.js                 # Course catalog and learner image data
├── utils/
│   └── publicPaths.js              # Deployment-aware image and route paths
└── index.css                      # Tailwind setup and global styles

public/
└── Image/                          # Images used throughout the website
```

## Deploy to GitHub Pages

Pushing changes to the `main` branch triggers `.github/workflows/deploy.yml`. The workflow installs dependencies, builds the site, and publishes the `dist/` folder to GitHub Pages.

In the repository settings, set **Settings → Pages → Build and deployment → Source** to **GitHub Actions**.

## Authentication Note

The sign-in and sign-up pages currently provide the frontend UI and form validation. Real account creation, sign-in, and social authentication require a backend or authentication provider.
