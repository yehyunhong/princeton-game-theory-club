/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'princeton-orange': '#FF8F00',
        'princeton-black': '#000000',
        'light-salmon': '#ECACA2',
        'red-orange': '#C84300',
        'grey': '#79797B',
        'cream': '#FFFEEC',
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

