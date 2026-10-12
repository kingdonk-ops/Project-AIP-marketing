module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: { extend: { colors: { brand: { 50: '#eff6ff', 500: '#2563eb', 600: '#1d4ed8', 900: '#0f172a', 950: '#090d16' } } } },
  plugins: [require('@tailwindcss/typography')]
};