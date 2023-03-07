const path = require("path");
const webpack = require("webpack");

module.exports = {
  context: __dirname,
  entry: "./src/index.tsx",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx", ".ts", ".tsx"],
    alias: {
      "@": path.join(__dirname, "src/"),
      actions: path.join(__dirname, "src/actions/"),
      components: path.join(__dirname, "src/components/"),
      reducers: path.join(__dirname, "src/reducers/"),
      types: path.join(__dirname, "src/types/"),
    },
  },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: "bundle.js",
  },
  devServer: {
    port: 3022,
    hot: true,
  },
  plugins: [],
};
