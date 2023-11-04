/** @type {import('tailwindcss').Config} */

const colors = {
  purpleMain: '#635FC7',
  greyLight: '#F4F7FD',
  greyMedium: '#828FA3',
  greyDark: '#2B2C37',
  linesLight: '#E4EBFA',
  linesDark: '#3E3F4E',
  white: '#FFFFFF',
  black: '#000112',
  blackMedium: '#20212C',
  red: '#EA5555'
}

const spacing = {
  '8': '8px',
  '12': '12px',
  '16': '16px',
  '24': '24px',
  '32': '32px'
}

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    colors: {
      purpleMain: colors.purpleMain,
      greyLight: colors.greyLight,
      greyMedium: colors.greyMedium,
      greyDark: colors.greyDark,
      linesLight: colors.linesLight,
      linesDark: colors.linesDark,
      white: colors.white,
      black: colors.black,
      blackMedium: colors.blackMedium,
      red: colors.red,
    },
    fontSize: spacing,
    extend: {
      spacing
    },
  },
  plugins: [],
}

