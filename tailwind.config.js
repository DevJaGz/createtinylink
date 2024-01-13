/** @type {import('tailwindcss').Config} */
import tailwindCssAnimated from 'tailwindcss-animated';

module.exports = {
  important: true,
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    tailwindCssAnimated
  ],
}

