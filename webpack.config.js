const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production", //development
  entry: {
    app: path.resolve(__dirname, "./src/js/app.js"),
    about: path.resolve(__dirname, "./src/js/about.js"),
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "[name][contenthash].js",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack Project",
      filename: "index.html",
      template: "./src/tempIndex.html",
      chunks: ["app"],
    }),
    new HtmlWebpackPlugin({
      title: "Webpack Project",
      filename: "about.html",
      template: "./src/pages/tempAbout.html",
      chunks: ["about"],
    }),
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, "public"),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
};
