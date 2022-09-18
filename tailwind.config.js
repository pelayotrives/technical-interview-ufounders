/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'ufo1': ['Poppins'],
      'ufo2': ['Inter'],
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}