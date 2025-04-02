/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        gmarket: ["GmarketSans"], // 기본 폰트 설정
        gmarketBold: ["GmarketSansBold"], // 기본 폰트 설정
        gmarketLignt: ["GmarketSansLignt"], // 기본 폰트 설정
        notoSansKRMediumt: ["NotoSansKR-Light"], // 기본 폰트 설정
      },
    },
  },
  plugins: [],
};
