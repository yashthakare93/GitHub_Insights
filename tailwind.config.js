/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-bg': "url('https://static.vecteezy.com/system/resources/thumbnails/000/536/629/small/paper9-01.jpg')",
        'custom-black': "url('https://img.freepik.com/free-vector/abstract-infinity-wireframe-layout-graphic-design_1017-47103.jpg')",
      },
    },
  },
  plugins: [],
}
