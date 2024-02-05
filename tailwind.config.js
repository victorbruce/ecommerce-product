/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "var(--orange)",
        paleOrange: "var(--paleOrange)",
        veryDarkBlue: "var(--veryDarkBlue)",
        darkGrayishBlue: "var(--darkGrayishBlue)",
        grayishBlue: "var(--grayishBlue)",
        lightGrayishBlue: "var(--lightGrayishBlue)",
        white: "var(--white)",
        black: "var(--black)",
      },
      textColor: {
        orange: "var(--orange)",
        paleOrange: "var(--paleOrange)",
        veryDarkBlue: "var(--veryDarkBlue)",
        darkGrayishBlue: "var(--darkGrayishBlue)",
        grayishBlue: "var(--grayishBlue)",
        lightGrayishBlue: "var(--lightGrayishBlue)",
        white: "var(--white)",
        black: "var(--black)",
      },
    },
  },
  plugins: [],
};
