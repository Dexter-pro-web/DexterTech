/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        glow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(255, 255, 255, 0.2)' },
          '50%': { boxShadow: '0 0 20px rgba(255, 255, 255, 0.6)' },
        },
        glowing: {
          '0%, 100%': { backgroundPosition: '0 0' },
          '50%': { backgroundPosition: '400% 0' },
        },
      },
      animation: {
        glow: 'glow 3s ease-in-out infinite',
        glowing: 'glowing 20s linear infinite',
      },
    },
  },
  plugins: [],
}

