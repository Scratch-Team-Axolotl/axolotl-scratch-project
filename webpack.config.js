// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
    assetModuleFilename: 'images/[hash][ext][query]',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    // modules: [path.resolve(__dirname), 'node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            targets: 'defaults',
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
        type: 'asset/resource',
      },
    ],
  },
  devServer: {
    port: 3000,
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    proxy: [
      {
        context: ['/api', '/callback'],
        target: 'http://localhost:8080',
      },
    ],
    historyApiFallback: true,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'development',
      template: './client/index.html',
    }),
  ],
};
