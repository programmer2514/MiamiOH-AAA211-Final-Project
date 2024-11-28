/**
 * @type { import('tailwindcss').Config }
 */
export default {
  content: ['./src/**/*.{html,mjs,md}'],
  safelist: [
    'from-[#6a14d1]', 'to-[#c82090]',
    'from-[#d19f14]', 'to-[#c8bd20]',
    'from-[#606060]', 'to-[#a0a0a0]',
    'from-[#1466d1]', 'to-[#20c2c8]',
    'from-[#43b32d]', 'to-[#23e77c]',
    '!-translate-x-1/4',
    '!-translate-y-1/4',
    '!translate-x-1/4',
    '!-translate-y-0',
    'transition-all',
    'duration-500',
    '!opacity-0',
  ],
  theme: {
    fontFamily: {
      sans: [
        'Lexend',
        '"Trebuchet MS"',
        'Tahoma',
        'Helvetica',
        'Arial',
        'sans-serif',
      ],
    },
    extend: {
      borderWidth: {
        1: '1px',
      },
      brightness: {
        25: '0.25',
      },
      colors: {
        'theme-orange': '#fcb800',
        'theme-orange-light': '#f2ae00',
        'theme-orange-dark': '#d98416',
      },
      content: {
        blank: '""',
      },
      spacing: {
        'body': 'calc(100vh - 10.5rem)',
        'body-no-footer': 'calc(100vh - 7rem)',
        'body/2': 'calc(50vh + 3.5rem)',
        'body/2-f': 'calc(50vh + 1.75rem)',
        '2p': '2px',
      },
    },
  },
  plugins: [],
};
