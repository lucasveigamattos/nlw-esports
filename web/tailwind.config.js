const plugin = require("tailwindcss/plugin")

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.tsx"],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"]
    },
    backgroundImage: {
      galaxy: "url('/background-galaxy.png')",
      "nlw-gradient": "linear-gradient(89.86deg, #9572FC, #43E7AD, #E1D55D)",
      shadow: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%)"
    },
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