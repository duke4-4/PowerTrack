/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
        }
      }
    },
  },
  plugins: [],
} 