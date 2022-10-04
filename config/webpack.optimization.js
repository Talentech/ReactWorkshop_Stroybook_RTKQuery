exports.optimize = {
  splitChunks: {
    minChunks: 5,
    chunks: "all",
    filename: "[name].[chunkhash].js",
    minSize: 0,
    maxAsyncRequests: 5,
    maxInitialRequests: 3,
    cacheGroups: {
      ["vendor.react"]: {
        name: "vendor.react",
        enforce: true,
        test: /[\\/]node_modules[\\/](react-dom|react-router|history|recompose|react-router-dom|react|fbjs)/,
        reuseExistingChunk: true,
      },
      ["vendor.oidc"]: {
        name: "vendor.oidc",
        enforce: true,
        test: /[\\/]node_modules[\\/](redux-oidc|oidc-client)/,
        reuseExistingChunk: true,
      },
      ["vendor.redux"]: {
        name: "vendor.redux",
        enforce: true,
        test: /[\\/]node_modules[\\/](react-redux|reselect|localforage|redux-persist|redux)/,
        reuseExistingChunk: true,
        priority: 1000,
      },
      ["vendor.lodash"]: {
        name: "vendor.lodash",
        enforce: true,
        test: /[\\/]node_modules[\\/](lodash)/,
        reuseExistingChunk: true,
      },
      ["vendor.html"]: {
        name: "vendor.html",
        enforce: true,
        test: /[\\/]node_modules[\\/](html-entities)/,
        reuseExistingChunk: true,
      },
      // -- TEMPORARY DISABELD DUE TO USE AMCHARTS CHUNKS
      // ["vendor.libs"]: {
      //   name: "vendor.libs",
      //   enforce: true,
      //   test: /[\\/]node_modules[\\/](classnames|axios|core-js|raf)/,
      //   reuseExistingChunk: true
      // },
      // ["vendor.misc"]: {
      //   name: "vendor.misc",
      //   enforce: true,
      //   test: /[\\/]node_modules[\\/]/,
      //   reuseExistingChunk: true,
      //   priority: -10
      // }
    },
  },
};
