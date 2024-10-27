/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        color1: "#eef3f4",
        color2: "#d2dee8",
        color3: "#d5ede6",
        color4: "#a4c2b6",
        color5: "#2d3736",
        color6: "#275798",
        color7: "#175873",
        color8: "#4282aa",
      },
      fontFamily: {
        title: ["Poppins"],
      },
      fontWeight: {
        normal: 400,
        bold: 700,
        light: 300,
        semiBold: 600,
        extraBold: 800,
      },
    },
  },
  plugins: [],
};
