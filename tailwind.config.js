/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'body': ['Cormorant Garamond', 'serif'],
        'accent': ['Optima', 'sans-serif']
      },
      animation: {
        glow: 'glow 2s ease-in-out infinite alternate',
        'slide-in-bottom': 'slide-in-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
        'fade-in': 'fade-in 0.5s ease-out'
      },
      keyframes: {
        glow: {
          '0%': {
            boxShadow: '0 0 5px rgba(255,255,255,0.2), 0 0 10px rgba(255,255,255,0.1)'
          },
          '100%': {
            boxShadow: '0 0 20px rgba(255,255,255,0.6), 0 0 30px rgba(255,255,255,0.4)'
          }
        },
        'slide-in-bottom': {
          '0%': {
            transform: 'translateY(1000px)',
            opacity: '0'
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1'
          }
        },
        'fade-in': {
          '0%': {
            opacity: '0'
          },
          '100%': {
            opacity: '1'
          }
        }
      },
      colors: {
        'mint-green': '#b8e3d3',
        'dark-green': '#79a793',
        'light-brown': '#d1bfa3',
        'dark-brown': '#4a3c30'
      },
    },
  },
  plugins: [],
}
