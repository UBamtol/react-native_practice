// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   // NOTE: Update this to include the paths to all of your component files.
//   content: ['./App.tsx', './components/**/*.{js,jsx,ts,tsx}'],
//   presets: [require('nativewind/preset')],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };

const { linkTo } = require('expo-router/build/global-state/routing');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: '#030014',
        secondary: '#151312',
        accent: '#AB8BFF',
        light: {
          100: '#D6C6FF',
          200: '#A8B5DB',
          300: '#9Ca4AB',
        },
        dark: {
          100: '#221f3d',
          200: '#0f0d23',
        },
      },
    },
  },
  plugins: [],
};
