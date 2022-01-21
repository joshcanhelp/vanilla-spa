module.exports = {
  content: [
    "./index.html",
    "./views/**/*.html",
    "./js/**/*.js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'loader': "url('/images/loading.gif')",
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ]
}
