const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }
    ]
  },
  plugins: [new ExtractTextPlugin("main.css")]
};
