/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        borderColor: '#e1e2e2',
        colorAccent: '#266847',
        colorAccent2: '#6bb335',
        colorAccent3: '#abd920',
        colorBodyText: '#143324',
        colorHeadingText: '#143324',
        colorBackgroundDark: '#003541',
        colorBackgroundLight: '#E5E5E5',
        colorBorder: '#7bcba4',
        borderColor2: '#d4d4d4',
        colorWhiteOpaque: 'rgba(255, 255, 255, 0.1)',
        colorTransparent: 'transparent',
        colorBlack: '#1D1D1D',
        colorDarkGreen: '#143324',
        colorMidGreen: '#296647',
        colorMidGreenOpaque: 'rgba(41, 102, 71, 0.1)',
        colorAltGreen: '#3d7458',
        colorGreen: '#69B236',
        colorLightGreen: '#ABD921',
        colorLightGreenOpaque: 'rgba(171, 217, 32, 0.2)',
        colorBeige: '#F1EFE7',
        colorMidGrey: '#646665',
        colorLightGrey: '#C8CCCA',
        colorLightGrey2: '#F5F5F5',
        colorLightGrey3: '#A5A5A5',
        colorDarkBeige: '#E4DBC4',
        colorGreyOpaque: 'rgba(41, 102, 71, 0.2)'
      },
    },
  },
  plugins: [],
}

