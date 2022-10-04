"use strict";

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

exports.typeScript = {
  test: /\.tsx?$/,
  loader: "awesome-typescript-loader",
};

exports.css = {
  test: /\.css$/i,
  use: ["style-loader", "css-loader"],
};

exports.scss = {
  test: /\.scss$/,
  use: [
    process.env.NODE_ENV === "development"
      ? "style-loader"
      : MiniCssExtractPlugin.loader,
    {
      loader: "css-loader",
      options: {
        sourceMap: true,
        modules: true,
      },
    },
    {
      loader: "sass-loader",
      options: {
        implementation: require("sass"),
        sourceMap: true,
      },
    },
  ],
};

exports.files = {
  test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/,
  type: "asset/resource",
};

exports.devServer = {
  devServer: {
    https: true,
    stats: "errors-only",
    hot: true,
    open: true,
    historyApiFallback: {
      disableDotRule: true,
    },
  },
};
