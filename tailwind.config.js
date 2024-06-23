/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      borderRadius: {
        'lg': '1.5rem',
        'md': '0.5rem',
      },
    },
  },
  plugins: [],
}
