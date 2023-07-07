/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      backgroundImage: {
        bgSialgem: "url(/public/silagem.png)",
        banner1: "url(/public/assets/about/img2.png)",
        banner1Md: "url(/public/assets/about/img2-md.png)",
        banner2: "url(/public/assets/about/img4.png)",
        banner2Md: "url(/public/assets/about/img4-md.png)",
        gradientFeedbacks: "linear-gradient(to top, #fff, transparent 95%)"
      },
      boxShadow: {
        sm: "0 0 5px rgba(0, 0, 0, 0.15)"
      },
      fontFamily: {
        sans: ['Swiss 721 Cn BT, Inter, sans-serif']
      },
      colors: {
        green: {
          500: "#245237"
        },
        orange: {
          500: "#F16C1F",
          600: "#C05618"
        },
        gray: {
          50: "#F9F9F9",
          100: "#E9E9E9",
          200: "#C4C4CC",
          300: "#8D8D99",
          400: "#888888",
          500: "#323238",
          600: "#29292E",
          700: "#121214",
          900: "#09090A",
        }
      }
    },
  },
  plugins: [],
}
