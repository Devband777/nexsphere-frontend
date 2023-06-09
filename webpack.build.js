const path = require("path");
const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");
const CopyPlugin = require("copy-webpack-plugin");

const serverConfig = {
  mode: "production",
  entry: "./src/ssr/server.js",
  target: "node",
  externals: [nodeExternals()],
  output: {
    path: path.resolve("./build-ssr"),
    filename: "server.js",
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: "babel-loader" },
      { test: /\.(png|woff|woff2|eot|ttf|svg|jpg|jpeg)$/, use: "url-loader" },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "sass-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: "react",
    }),
    new CopyPlugin({
      patterns: [{ from: "build", to: "." }],
    }),
  ],
};
module.exports = [serverConfig];
