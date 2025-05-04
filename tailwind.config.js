/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
    theme: {
      extend: {
        spacing: {
          'letter-w': '8.5in',
          'letter-h': '11in',
        },
      },
    },
    plugins: [require('@tailwindcss/forms'), require('daisyui')],
    daisyui: { themes: ['light', 'dark'] },
  }
  