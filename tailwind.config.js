/** @type { import('tailwindcss').Config } */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  safelist: [
    '!opacity-0',
    '!-translate-x-1/2',
    '!-translate-y-0',
    '!-translate-y-1/2',
    'from-[#6a14d1]', 'to-[#c82090]',
    'from-[#d19f14]', 'to-[#c8bd20]',
    'from-[#606060]', 'to-[#a0a0a0]',
    'from-[#1466d1]', 'to-[#20c2c8]',
    'from-[#43b32d]', 'to-[#23e77c]',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
