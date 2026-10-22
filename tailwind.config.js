/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ocean: '#123B36',
        forest: '#1E6B57',
        teal: '#36A89A',
        mint: '#E7F5EF',
        ivory: '#FAF9F4',
        charcoal: '#24312E',
        coral: '#F2A17B',
        line: '#DCE6E1',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      borderRadius: { xl: '14px', '2xl': '20px', '3xl': '28px' },
      boxShadow: {
        soft: '0 1px 2px rgba(18,59,54,.06), 0 8px 24px -12px rgba(18,59,54,.18)',
        lift: '0 2px 4px rgba(18,59,54,.06), 0 18px 40px -16px rgba(18,59,54,.28)',
      },
      maxWidth: { prose: '68ch' },
      zIndex: { header: '40', drawer: '50', modal: '60', toast: '70' },
    },
  },
  plugins: [],
};
