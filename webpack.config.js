const webpack = require("webpack");
const { merge } = require("webpack-merge");
const path = require("path");
const PATHS = require("./config/webpack.paths");
const loaders = require("./config/webpack.loaders");
const plugins = require("./config/webpack.plugins");
const optimize = require("./config/webpack.optimization");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const common = {
  entry: {
    app: PATHS.app,
    silentRenew: PATHS.silentRenew,
  },
  output: {
    publicPath: "/",
    path: path.join(
      __dirname,
      process.env.NODE_ENV === "production"
        ? "build_prod"
        : process.env.NODE_ENV === "docker"
        ? "build_docker"
        : "build_test"
    ),
    filename: "[name].[contenthash].js",
    chunkFilename: "[name].chunk.js",
  },
  module: {
    rules: [loaders.typeScript, loaders.css, loaders.scss, loaders.files],
  },
  resolve: {
    alias: PATHS.aliases,
    extensions: [".ts", ".tsx", ".js", "jsx"],
    fallback: { crypto: false },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      minify: { html5: true },
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/auth/silent_renew/silent_renew.html",
      chunks: [
        "silentRenew",
        "vendor.oidc",
        "vendor.misc",
        "vendor.redux",
        "vendor.react",
      ],
      filename: "silent_renew.html",
    }),
    plugins.dotenvFlow,
    plugins.typeScriptChecker,
    plugins.miniCssPlugin,
    // plugins.manifest,
    // plugins.sw,
    // plugins.bundleAnalyzer,
    plugins.copy,
    new webpack.ProvidePlugin({
      process: "process/browser",
    }),
  ],
};

let config;

switch (process.env.NODE_ENV) {
  case "production":
  case "test":
  case "docker":
    config = merge(common, {
      devtool: "source-map",
      plugins: [plugins.loaderOptions, plugins.environmentVariables],
      optimization: optimize.optimize,
    });
    break;
  default:
    config = merge(
      common,
      {
        devtool: "eval-source-map",
        plugins: [plugins.circularDependencies],
      },
      loaders.devServer
    );
    break;
}

module.exports = config;
