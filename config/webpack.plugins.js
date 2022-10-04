const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");
const SWPrecacheWebpackPlugin = require("sw-precache-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const CircularDependencyPlugin = require("circular-dependency-plugin");
const { CheckerPlugin } = require("awesome-typescript-loader");
const DotenvFlow = require("dotenv-flow-webpack");
const MAX_CYCLES = 20;
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

let numCyclesDetected = 0;

exports.loaderOptions = new webpack.LoaderOptionsPlugin({
  options: {
    context: __dirname,
  },
});

exports.environmentVariables = new webpack.DefinePlugin({});

exports.manifest = new ManifestPlugin({
  fileName: "asset-manifest.json",
});

exports.sw = new SWPrecacheWebpackPlugin({
  // By default, a cache-busting query parameter is appended to requests
  // used to populate the caches, to ensure the responses are fresh.
  // If a URL is already hashed by Webpack, then there is no concern
  // about it being stale, and the cache-busting can be skipped.
  dontCacheBustUrlsMatching: /\.\w{8}\./,
  filename: "service-worker.js",
  logger(message) {
    if (message.indexOf("Total precache size is") === 0) {
      // This message occurs for every build and is a bit too noisy.
      return;
    }
    console.log(message);
  },
  minify: true,
  navigateFallback: "/index.html",
  staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/],
});

exports.copy = new CopyWebpackPlugin({ patterns: [{ from: "src/assets" }] });

exports.bundleAnalyzer = new BundleAnalyzerPlugin();

exports.dotenvFlow = new DotenvFlow({
  default_node_env: "development",
});

exports.circularDependencies = new CircularDependencyPlugin({
  // exclude detection of files based on a RegExp
  exclude: /a\.js|node_modules|coverage/,
  // set the current working directory for displaying module paths
  cwd: process.cwd(),
  onStart({ compilation }) {
    numCyclesDetected = 0;
  },
  onDetected({ module: webpackModuleRecord, paths, compilation }) {
    numCyclesDetected++;
    compilation.warnings.push(new Error(paths.join(" -> ")));
  },
  onEnd({ compilation }) {
    if (numCyclesDetected > MAX_CYCLES) {
      compilation.errors.push(
        new Error(
          `Detected ${numCyclesDetected} cycles which exceeds configured limit of ${MAX_CYCLES}`
        )
      );
    }
  },
});

exports.typeScriptChecker = new CheckerPlugin();

exports.miniCssPlugin = new MiniCssExtractPlugin();
