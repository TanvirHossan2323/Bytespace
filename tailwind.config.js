export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#164DF0',
        'brand-lime': '#D4F000',
        'brand-dark': '#111827',
        'brand-gray': '#F3F4F6',
        'brand-light-gray': '#F9FAFB',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
      },
      backgroundSize: {
        'hero-pattern-size': '40px 40px',
      }
    },
  },
  plugins: [],
}
