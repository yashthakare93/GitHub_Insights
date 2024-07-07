
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-bg': "url('https://static.vecteezy.com/system/resources/thumbnails/000/536/629/small/paper9-01.jpg')",
        'custom-black': "url('https://cdn.neowin.com/news/images/uploaded/2021/04/1619644762_github-desktop_story.jpg')",
        'custom-main':"url('https://github.blog/wp-content/uploads/2024/01/Productivity-LightMode-3.png?resize=200%2C200')"
      }
      
    }
  },
  plugins: [
  
  ],
}
