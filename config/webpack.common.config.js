const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '../dist')
  },
  stats: 'errors-only',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            }
          },
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            }
          },
          'less-loader'
        ],
      },
      {
        test: /\.js[x]?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              "presets": [
                "@babel/preset-env",
                "@babel/preset-react",
              ],
              "plugins": [
                [
                  "@babel/plugin-transform-runtime",
                  {
                    "corejs": 3,
                  }
                ]
              ]
            },
          }
        ],
        exclude: /node_modules/
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
  ]
}