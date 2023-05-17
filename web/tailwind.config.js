const plugin = require("tailwindcss/plugin")

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.tsx"],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function({addBase}) {
      addBase({
        html: {fontSize: "62.5%"},
        body: {fontSize: "1.6rem"}
      })
    })
  ],
}