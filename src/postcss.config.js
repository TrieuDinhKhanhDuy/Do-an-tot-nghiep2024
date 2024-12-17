const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === 'production'
      ? {
          '@fullhuman/postcss-purgecss': purgecss({
            content: ['./src/**/*.{html,js,jsx,ts,tsx}'], // Đường dẫn đến file sử dụng
            safelist: ['safelist-class'], // Thêm các class cần giữ lại nếu có
            defaultExtractor: (content) =>
              content.match(/[\w-/:]+(?<!:)/g) || [],
          }),
        }
      : {}),
  },
};
