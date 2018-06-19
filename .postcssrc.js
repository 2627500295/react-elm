// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  plugins: {
    'postcss-import': {},
    autoprefixer: {
      browsers: ['> 1%', 'last 4 versions', 'Firefox ESR', 'not ie <= 9']
    }
  }
};
