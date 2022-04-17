module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}


module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        'title': ['Nunito', 'sans-serif'],
        'text': ['Ubuntu', 'sans-serif']
      },
      colors: {
        primary: '#06255f',
        shadeOfPrimary: '#2EA6F7',
      },
      
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ]
}
