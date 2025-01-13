/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}" // Include all Angular component templates and TypeScript files
  ],
  theme: {
    extend: {}, // Add customizations here if needed
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};
