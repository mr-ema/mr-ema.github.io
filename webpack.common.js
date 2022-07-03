const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  entry: './src/index.js',

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build'),
    clean: true
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src'),
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        include: path.resolve(__dirname, './src/index.css'),
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png)$/i,
        loader: 'file-loader',
      }
    ]
  },

  resolve: {
    alias: {
      Public: path.resolve(__dirname, 'public/'),
      Components: path.resolve(__dirname, 'src/components/index.js'),
      Pages: path.resolve(__dirname, 'src/pages/index.js'),
      Errors: path.resolve(__dirname, 'src/errors/index.js')
   },
    extensions: ['.js', '.jsx']
  },

  plugins: [
    new HtmlWebpackPlugin({
      favicon: 'public/favicon.ico',
      template: 'public/index.html'
    })
  ],

  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true
        },
        vendor: {
          chunks: 'initial',
          test: /[\\/]node_modules[\\/](react | react-dom)[\\/]/,
          name: 'vendor',
          enforce: true
        }
      }
    }
  }
}