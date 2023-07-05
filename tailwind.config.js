/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        moveBanner: {
          '0%': {
            transform: 'translateX(100%)' /* Starting position: translate the banner 100% to the right */
          },
          '100%': {
            transform: 'translateX(-100%)' /* Ending position: translate the banner 100% to the left */
          }
        }
      },
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'primary-orange': '#FF5722',
      },
    },
  },
  plugins: [],
};
