/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0F3320',
          DEFAULT: '#315B3B',
          light: '#E8EFE5',
          cream: '#F5F5F2',
          wine: '#7A2A2A',
        },
        ink: '#1C1C1C',
        muted: '#777777',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
