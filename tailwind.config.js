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
        'gtc-cream': '#FFF8E8',
        'gtc-cream-dark': '#F7EEDB',
        'gtc-brown': '#6B2D1A',
        'gtc-ink': '#3E2A1E',
        'gtc-beige': '#F1E4CD',
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'display': ['var(--font-display)', 'serif'],
        'body': ['var(--font-body)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
