module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'polka': "url('./assets/background.png')",
      },
    },
    screens: {
      'xs': '375px',
      'sm': '640px',
      'md': '768px',
      'lg': '1023px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [],
}
