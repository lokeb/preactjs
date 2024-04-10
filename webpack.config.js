const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

title='preactjs <Change it in webpack.config.js>'

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'inline-source-map',
  devServer: {},
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlPlugin({
      templateContent: `
        <html>
          <head>
            <title>${title}</title>
          </head>
          <body>
            <div id="app"/>
          </body>
        </html>
      `
    }),
  ],
  mode: 'development',
  resolve: {
    alias: {
      'react': 'preact/compat',
      'react-dom/test-utils': 'preact/test-utils',
      'react-dom': 'preact/compat'
    }
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              ['@babel/plugin-proposal-object-rest-spread'],
              ['@babel/plugin-proposal-class-properties'],
              ["@babel/plugin-transform-react-jsx"],
              ["babel-plugin-wildcard"]
            ]
          }
        }
      },
      {
        test: /\.(css|s[ac]ss)$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: ['autoprefixer']
              }
            }
          },
          {
            loader: 'sass-loader', options: { sourceMap: true }
          }
        ]
      },
      {
        test: /\.(jpg|png|svg)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  }
}
