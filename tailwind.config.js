module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
        center: true
    },
    extend: {},
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          paddingLeft: '20px',
          paddingRight: '20px',
          '@screen xl': {
            maxWidth: '1300px',
          },
        }
      })
    }
  ],
}
