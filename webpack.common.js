const path = require('path');

module.exports = {
  entry: './src/index.tsx',

  output: {
    filename: 'src/[name].js',
    publicPath: '/',
    path: path.resolve(__dirname, '.build'),
    clean: true
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'ts-loader'],
      },
      {
        test: /\.css$/,
        include: path.resolve(__dirname, './src/style.css'),
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
      {// * You Need To Define Assets Here And In custom.d.ts
        test: /\.(png|svg)$/i,
        exclude: /node_modules/,
        loader: 'file-loader',
        options:  {
          // Custom Path To Save Assets When Build
          name: 'public/assets/[hash].[ext]',
        },
      }
    ]
  },

  resolve: {
    alias: {
      // ! Important
      // * To Add More Paths You Have To Added Here And In tsconfig.json
      '@': path.resolve(__dirname, 'src'),
      '@Public': path.resolve(__dirname, 'public'),
      "@Pages": path.resolve(__dirname, 'src/Pages/index.ts')
   },
   extensions: ['.tsx', '.ts', '.js']
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true
        },
        AnimationVendor: {
          test: /[\\/]node_modules[\\/](react-animation-on-scroll|react-animations|react-icons|styled-components)[\\/]/,
          name: 'vendors/vendor-styles',
          chunks: 'all'
        },
        reactVendor: {
          test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom)[\\/]/,
          name: 'vendors/vendor-react',
          chunks: 'initial',
          enforce: true
        }
      }
    }
  }
}