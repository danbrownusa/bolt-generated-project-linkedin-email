/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2D3748',
        secondary: '#4299E1',
        text: '#1A202C'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        body: ['Open Sans', 'system-ui', 'sans-serif']
      }
    },
  },
  plugins: [],
}
