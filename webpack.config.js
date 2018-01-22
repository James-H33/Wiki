const path = require('path');
const WebpackShellPlugin = require('webpack-shell-plugin');

module.exports = {
  entry: './src/server.ts',
  devtool: 'inline-source-map',
  target: 'node',
  module: {
    rules: [
      {
        test: /\.ts/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js' ]
  },
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new WebpackShellPlugin({
      onBuildStart:['echo "Webpack Start"'], 
      onBuildEnd:['echo "Webpack End"', 'node dist/server.js']
    })
  ]
};