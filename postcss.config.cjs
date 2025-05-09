// postcss.config.cjs
const tailwind = require('@tailwindcss/postcss');

module.exports = {
  plugins: [
    tailwind(), // CALL IT AS A FUNCTION!
    require('autoprefixer'),
  ],
};
