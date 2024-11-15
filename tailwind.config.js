/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  safelist: [
    'opacity-0',
    '-translate-x-1/2',
    '!-translate-y-0',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
