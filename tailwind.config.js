/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#0d0d0d',
        'primary-gold': '#d4af37',
        'secondary-gold': '#f4e4a6',
        'light-gold': '#faf6e8',
        'dark-gray': '#1a1a1a',
        'medium-gray': '#333333',
        'light-gray': '#666666',
      },
      fontFamily: {
        'vazir': ['Vazirmatn', 'sans-serif'],
      },
      backdropBlur: {
        'xs': '2px',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
      }
    },
  },
  plugins: [],
}
