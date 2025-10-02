/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // ------ Text & Background Colors
      colors: {
        'primary' : '#054C73',
        'secondary' : '#333333',
        'thirdly' : '#666666',
        'bg' : '#F2F5FF'
      }
    },
    // ------ Container
    container: {
      center: true,
    },
    // ------ Font Family
    fontFamily: {
      'montserrat' : ["Montserrat", "sans-serif"]
    },
    // ------ Background Images
    backgroundImage: {
      'banner' : "url('/Images/banner.jpg')"
    }
  },
  plugins: [],
}