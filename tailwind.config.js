/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    backgroundSize: {},
    fontFamily: {
      'bree': ['Bree Serif', 'serif']
    },
    extend: {},
  },
  plugins: [],
  unknownAtRules: [
    'custom-at-rule',
  ],
}

