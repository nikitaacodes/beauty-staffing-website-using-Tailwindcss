/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./main.html'],
  theme: {
    extend: {
      colors:{
   'grey': '#454444' ,
   'coral': '#e5af73'
      },
      fontFamily: {
        'astyle': ['poppins','sans-serif']
      }
    },
  },
  plugins: [],
}

