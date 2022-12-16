/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [],
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: { extend: { screens: { xs: '475px' } } }
}
