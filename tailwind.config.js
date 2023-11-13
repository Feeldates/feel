/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      negro: "#000000",
      blanco: "#FFFFFF",
      grisoscuro: "#212121",
      grisclaro: "#EEEEEE",
      color1: "#6E09DF",
      color2: "#F700FF",
      color3: "#AA00FF",
      color4: "#E389FE",
      color5: "#0384BC",
    },
    backgroundImage: {
      'gradiente': 'linear-gradient(to right, #EA0B93, #FF9E04)',
      'fondo-feeldates': "url('/src/assets/fondo-feeldates.png')",
    },
    extend: {},
  },
  plugins: [],
}
