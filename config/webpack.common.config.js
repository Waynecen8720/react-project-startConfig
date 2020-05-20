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
            loader: require.resolve('css-loader'),
            options: {
              modules: {
                localIdentName: '[name]__[local]___[hash:base64:5]',
              },
              importLoaders: 1,
            }
          },
        ]
      },
      {
        test: /\.less$/,
        exclude: /node_modules|antd\.less/,
        use: [
          'style-loader',
          {
            loader: require.resolve('css-loader'),
            options: {
              modules: {
                localIdentName: '[name]__[local]___[hash:base64:5]',
              },
              importLoaders: 1,
            }
          },
          'less-loader'
        ],
      },
      {
        test: /\.less$/,
        include: /node_modules|antd\.less/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: "less-loader",
            options: {
              lessOptions:{
                javascriptEnabled: true
              }

            }
        }
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
                ],
                '@babel/plugin-syntax-dynamic-import',
                ['import', {
                  libraryName: 'antd',
                  style: true,
                }],
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