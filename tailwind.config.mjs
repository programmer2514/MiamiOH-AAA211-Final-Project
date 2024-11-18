/**
 * @type { import('tailwindcss').Config }
 */
export default {
  content: ['./src/**/*.{html,mjs,md}'],
  safelist: [
    '!opacity-0',
    '!-translate-x-1/4',
    '!translate-x-1/4',
    '!-translate-y-0',
    '!-translate-y-1/4',
    'from-[#6a14d1]', 'to-[#c82090]',
    'from-[#d19f14]', 'to-[#c8bd20]',
    'from-[#606060]', 'to-[#a0a0a0]',
    'from-[#1466d1]', 'to-[#20c2c8]',
    'from-[#43b32d]', 'to-[#23e77c]',
    'transition-all',
    'duration-500',
    'duration-500',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
