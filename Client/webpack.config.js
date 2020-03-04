const webpack = require('webpack');

module.exports = {
    // 1
    entry: './src/index.js',
    //4
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
          }
        ]
      },
      resolve: {
        extensions: ['*', '.js', '.jsx']
      },
    // 2
    output: {
      path: __dirname + '/dist',
      publicPath: '/',
      filename: 'bundle.js'
    },
    //5
    plugins: [
        new webpack.HotModuleReplacementPlugin()
      ],
    // 3
    devServer: {
      contentBase: './dist',
      hot: true
    }
  };