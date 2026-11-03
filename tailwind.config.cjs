const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['Inter', ...defaultTheme.fontFamily.sans] },
      colors: {
        // Brand accent — change these to rebrand the whole site.
        brand: { 50: '#f2f8ee', 100: '#e1f0d8', 500: '#6ab23e', 600: '#5a9933', 700: '#477a28' },
        ink: '#0a0a0a',
        sand: '#f9f8f5'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
