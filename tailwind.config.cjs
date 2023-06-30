/** @type {import('tailwindcss').Config} */
// export default {
//   content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx,less,css}', './docs/**/*.{vue,ts,jsx,tsx,less,css,md}'],
//   theme: {
//     extend: {},
//   },
//   plugins: [
//     require('@tailwindcss/container-queries'),
//   ],
// }
//fix:webstorm 获取tailwindcss代码提示
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx,less,css}', './docs/**/*.{vue,ts,jsx,tsx,less,css,md}'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      backgroundImage: {
        'login-bg': "url('./src/assets/login-bg.png')",
        'illustration': "url('./src/assets/signin_illustration_2.svg')",
        'logo': "url('./src/assets/logo_color_3.svg')",
      },
    },
  },
  plugins: [require('@tailwindcss/container-queries')],
}
