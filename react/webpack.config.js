var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: path.join(__dirname, "src"),
  devtool: debug ? "inline-sourcemap" : "source-map",
  resolve: {
    extensions: ['.js', '.jsx']
  },
  entry: "./js/app.jsx",
  module: {
    rules: [
      {
        test: /\.(css|scss)?$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      }, {
        test: /\.(jpg|png|gif|ico)?$/,
        exclude: /node_modules/,
        loader: 'file-loader',
      }, {
        test: /\.(eot|svg|ttf|woff|woff2)?$/,
        loader: 'file-loader?name=public/fonts/[name].[ext]'
      }, {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        enforce: 'pre',
        loader: 'eslint-loader',
        options: { configFile: './.eslintrc' }
      }, {
        test: /\.(js|jsx)?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: ['react', 'es2015', 'stage-0', 'airbnb'],
          plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties'],
        },
      },
    ]
  },
  output: {
    path: __dirname + "/src/",
    filename: "app.min.js"
  },
  plugins: debug ? [] : [
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};
