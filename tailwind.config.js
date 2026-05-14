/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          dark:  '#064E3B',
          mid:   '#065F46',
          light: '#059669',
          pale:  '#ECFDF5',
          mint:  '#D1FAE5',
        },
        cream: {
          DEFAULT: '#FAFAF7',
          dark:    '#F0EDE6',
          sand:    '#E5E0D5',
        },
        ink: {
          DEFAULT: '#1C1917',
          muted:   '#57534E',
          light:   '#A8A29E',
        },
        gold: {
          DEFAULT: '#B45309',
          light:   '#FEF3C7',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        body:    ['DM Sans', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        xl2: '20px',
        xl3: '28px',
      },
      boxShadow: {
        card: '0 4px 16px rgba(6,78,59,.08), 0 1px 4px rgba(6,78,59,.04)',
        lift: '0 16px 48px rgba(6,78,59,.14)',
      },
      maxWidth: {
        prose: '680px',
        site:  '1080px',
      },
      typography: ({ theme }) => ({
        // si en el futuro añades @tailwindcss/typography
      }),
    },
  },
  plugins: [],
};
