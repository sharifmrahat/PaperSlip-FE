/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./components/**/*.{js,vue,ts}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./plugins/**/*.{js,ts}",
      "./nuxt.config.{js,ts}",
    ],
    theme: {
      extend: {
        colors: {
          primary: '#218c74', //green
          secondary: '#34ace0', //blue

          info: '#706fd3', //purple
          accent: '#a5b1c2', //navy

          warn: '#ffb142', //yellow
          error: '#ff5252', //red


          light: '#f1f2f6', //white
          dark: '#2f3542',  //black


        }
      },
    },
    plugins: [],
  }