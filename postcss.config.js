// postcss.config.js
module.exports = {
  plugins: {
    // FIX: Use the specific package name demanded by the compiler
    "@tailwindcss/postcss": {}, 
    autoprefixer: {},
  },
};