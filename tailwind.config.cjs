const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['Inter', ...defaultTheme.fontFamily.sans] },
      colors: {
        // Brand accent — change these to rebrand the whole site.
        brand: { 50: '#f3f9ea', 100: '#e3f1cf', 500: '#76b82a', 600: '#5f9a1f', 700: '#4a7a18' },
        ink: '#0a0a0a',
        sand: '#f9f8f5'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
