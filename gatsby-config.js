const path = require('path');

module.exports = {
  plugins: [
    'gatsby-plugin-preact',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: { components: path.resolve(__dirname, 'src/components') },
        extensions: ['js', 'jsx']
      }
    }
  ]
};
