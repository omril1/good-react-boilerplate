const isProduction = false;
const path = require('path');
const Webpack = require('webpack');

const postCssLoader = {
  loader: 'postcss-loader',
  options: {
    ident: 'postcss',
    plugins: [
      require('postcss-import')({ addDependencyTo: Webpack }),
      require('postcss-url')(),
      require('postcss-cssnext')(),
      require('postcss-reporter')(),
      require('postcss-browser-reporter')({ disabled: isProduction }),
    ]
  }
};


module.exports = {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          'react-hot-loader/webpack',
          'awesome-typescript-loader'
        ]
      },
      {
        test: /\.scss$/,
        loaders: [
          'style-loader',
          'css-loader?modules&sourceMap=' + !isProduction + '&importLoaders=1&localIdentName=[local]__[hash:base64:5]',
          postCssLoader,
          'sass-loader'
        ],
        include: path.resolve(__dirname, '../')
      }
    ],
  },
  target: 'web',
  resolve: {
    extensions: ['.js', '.ts', '.tsx', 'css', 'scss'],
    mainFields: ['browser', 'main']
  },
};
