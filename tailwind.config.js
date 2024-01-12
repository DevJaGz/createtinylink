/** @type {import('tailwindcss').Config} */
import tailwindCssAnimated from 'tailwindcss-animated';

module.exports = {
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

