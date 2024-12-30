/**
 *  @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: ['./main.html'],
  theme: {
    extend: {
      colors:{
   'grey': '#454444' ,
   'coral': '#e5af73' ,
   'pinkish' : '#f35566'
      },
      fontFamily: {
        'astyle': ['poppins','sans-serif'],
        'roboto' : ['roboto', 'sans-serif']
      },
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
  
}

