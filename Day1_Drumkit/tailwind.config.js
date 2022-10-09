/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {

      extend: {
        backgroundImage: {
            'hero': "url('/Assets/background.jpg')",
          },
          colors: {
            text : '#00000066',
            sound : '#ffc600'
        },
      },
    },
    plugins: [],
  }
