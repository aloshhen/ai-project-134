/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'electric-coffee': {
          DEFAULT: 'linear-gradient(to right, #fb923c, #f59e0b, #eab308)',
        }
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle at center, rgba(249, 115, 22, 0.15) 0%, transparent 70%)'
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        }
      }
    },
  },
  plugins: [],
}