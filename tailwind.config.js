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
          paddingLeft: '40px',
          paddingRight: '40px',
          '@screen xl': {
            maxWidth: '1300px',
          },
        }
      })
    }
  ],
}
