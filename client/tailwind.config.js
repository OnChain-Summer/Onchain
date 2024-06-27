/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        gradient1: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(50px, 50px)' },
        },
        gradient2: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(-100px, -100px)' },
        },
        gradient3: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(100px, -100px)' },
        },
        gradient4: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(30px, -30px)' },
        },
      },
      animation: {
        gradient1: 'gradient1 10s ease-in-out infinite',
        gradient2: 'gradient2 10s ease-in-out infinite',
        gradient3: 'gradient3 10s ease-in-out infinite',
        gradient4: 'gradient4 10s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
