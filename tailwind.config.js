/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        buttonColor: 'var(--button-color)',
        btnBackgroundColor: 'var(--button-bg-color)',
        headingColor: 'var(--heading-color)',
        mainHeadingColor: 'var(--main-heading-color)',
        textColor: 'var(--text-color)',
        backgroundColor: 'var(--background-color)',
        footercolor: 'var(--footercolor)',
      },
    },
  },
  plugins: [],
};
