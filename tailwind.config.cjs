const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'SF Pro Text',
          'SF Pro Display',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
          ...defaultTheme.fontFamily.sans
        ]
      },
      colors: {
        serene: {
          cream: '#FFFCF8',
          olive: '#647254',
          oliveStrong: '#4F5944',
          sage: '#A4B071',
          charcoal: '#1F2326',
          muted: '#5F665B',
          mutedDark: '#B1B9AB'
        }
      },
      boxShadow: {
        soft: '0 32px 60px rgba(31, 35, 38, 0.08)',
        'soft-dark': '0 32px 80px rgba(0, 0, 0, 0.45)'
      },
      borderRadius: {
        card: '16px',
        pill: '999px'
      },
      keyframes: {
        'reveal-up': {
          '0%': {
            opacity: '0',
            transform: 'translate3d(0, 32px, 0) scale3d(0.98, 0.98, 1)'
          },
          '100%': {
            opacity: '1',
            transform: 'translate3d(0, 0, 0) scale3d(1, 1, 1)'
          }
        }
      },
      animation: {
        'reveal-up': 'reveal-up 0.9s cubic-bezier(0.22, 1, 0.36, 1) both'
      }
    }
  },
  plugins: []
};
