/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
      extend: {
        colors: {
          'starbucks-green': '#008248',
          'starbucks-background': '#d4e9e2'
        },
        screens: {
          'large': '1130px',
          'laptop': '995px',
          'tablet': '880px',
          '780': '780px'
        },
        fontSize: {
          header: ['13px', '18px']
        },
        spacing: {
          '120': '120px'
        },
        boxShadow: {
          'topShadow': '0 2px 4px 0 rgb(0 0 0 / 70%), 0 2px 8px 0 rgb(0 0 0 / 50%), 0 1px 5px 0 rgb(0 0 0 / 10%);',
        },
        maxWidth: {
          '180': '180px'
        },
        scale: {
          '120': '1.2',
        }
      }
  },
  plugins: [],
}
