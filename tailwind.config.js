/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ],
        serif: ['Georgia', '"Times New Roman"', 'serif'],
      },
      colors: {
        seguridad: {
          'background': 'rgb(247, 247, 247)', // Color de fondo
          'menu': 'rgb(255, 255, 255)',       // Color del menú
          'menu-transp': 'rgba(255, 255, 255, 0.8)', // Menú transparente
          'principal': 'rgb(0, 59, 74)',      // Color principal
          'contraste': 'rgb(216, 99, 88)',   // Color de contraste
          'contraste-oscuro': 'rgb(255, 255, 255)', // Contraste oscuro
          'contraste-hover': 'rgb(229, 225, 254)',  // Hover del contraste
        },
      },
    },
  }
}

