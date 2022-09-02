/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        slate: {
          400: '#94a3b8',
          500: '#64748b',
        },
      },
    },
  },
  plugins: [],
};
