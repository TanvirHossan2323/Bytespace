# Bytespace

Bytespace is a responsive course discovery website built with React, Vite, Tailwind CSS, and Lucide icons.

## Run locally

```bash
npm install
npm run dev
```

Vite prints the local URL in the terminal. Use `npm run build` to create a production build and `npm run preview` to view that build locally.

## Project layout

```text
src/
  App.jsx                      Route selection for the home, sign-in, and sign-up pages
  main.jsx                     React entry point and global styles
  pages/
    HomePage.jsx               Homepage layout, page state, and section markup
    AuthPage.jsx               Shared sign-in and sign-up page
  components/
    branding/
      HomeBranding.jsx         Logo, partner mark, and decorative hero shapes
    home/
      HeroSection.jsx          Main navigation, search, and hero artwork
      CourseCatalogSection.jsx Course filters and course cards
      LearningPathsSection.jsx Learning category navigation
      ProfessionalGrowthSection.jsx Learner growth feature
      CreatorToolsSection.jsx  Course creator dashboard feature
      CreatorCtaSection.jsx    Creator call-to-action banner
      TestimonialsSection.jsx  Learner testimonials
      PartnerLogos.jsx         Partner logo strip
      SiteFooter.jsx           Newsletter and footer links
  data/
    homepage.js                Course catalog and learner portrait paths
  index.css                    Tailwind setup and global utilities
public/
  Image/                       Uploaded images used by the pages
```

## Where to make changes

- Update course details and learner images in `src/data/homepage.js`.
- Change the home page sections and their interactions in `src/pages/HomePage.jsx`.
- Change sign-in or sign-up presentation and form behavior in `src/pages/AuthPage.jsx`.
- Change shared brand marks or decorative artwork in `src/components/branding/HomeBranding.jsx`.
- Update global colors and fonts in `tailwind.config.js`, and global styles in `src/index.css`.

## Routes

- `/` displays the homepage.
- `/login` displays the sign-in page.
- `/signup` displays the sign-up page.
