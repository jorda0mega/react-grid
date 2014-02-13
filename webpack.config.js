// var path = require("path");
var webpack = require("webpack");
module.exports = {
  context: __dirname,
  // This is the main file that should include all other JS files
  entry: "./src/scripts/react-grid.js",
  target: "web",
  debug: true,
  // We are watching in the gulp.watch, so tell webpack not to watch
  watch: false,
  // watchDelay: 300,
  output: {
    path: __dirname + "/build",
    publicPath: "/build",
    // If you want to generate a filename with a hash of the content (for cache-busting)
    // filename: "main-[hash].js",
    filename: "bundle.js",
    chunkFilename: "[chunkhash].js"
  },
  resolve: {
    // Tell webpack to look for required files in bower and node
    modulesDirectories: ['bower_components', 'node_modules'],
  },
  plugins: [
    // If you want to minify everything
    // new webpack.optimize.UglifyJsPlugin()
  ]
};
