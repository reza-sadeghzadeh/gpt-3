/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.{tsx,jsx}", "./pages/**/*.{tsx,jsx}"],
  theme: {
    extend: {
      screens: {
        "8xl": "1440px",
      },
      colors: {
        brand: {
          purple: "#AE67FA",
          orange: "#F49867",
          darkOrange: "#FF4820",
          darkBack: "#040C18",
          darkBlue: "#052D56",
          textBlue: "#81AFDD",
          lightBlue: "#042C54",
          blueShadow: "#1B78DE",
        },
      },
    },
  },
  plugins: [],
};
