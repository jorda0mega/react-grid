var gulp = require("gulp");
var gutil = require("gulp-util");
var karma = require("gulp-karma");
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var webpackConfig = require("./webpack.config.js");

var files = [
  "bower_components/underscore/underscore.js",
  "bower_components/jquery/jquery.js",
  "bower_components/react/react-with-addons.js",
  "src/*.html",
  "src/**/*.js",
  "test/**/*Spec.js"
];

gulp.task("default", ["karma"]);

gulp.task("webpack:build-dev", function(callback){
  var myConfig = Object.create(webpackConfig);
  myConfig.devtool = "sourcemap";
  myConfig.debug = true;

  var devCompiler = webpack(myConfig);

  devCompiler.run(function(err, stats){
    if(err) throw new gutil.PluginError("webpack:build-dev", err);
    gutil.log("[webpack:build-dev]", stats.toString({
      colors: true
    }));
    callback();
  });
});

gulp.task("webpack-dev-server", function(callback){
  var compiler = webpack(webpackConfig);
  var server = new WebpackDevServer(compiler,{
    publicPath: webpackConfig.output.publicPath,
    stats: {
      colors: true
    }
  }).listen(8080, "localhost", function(err){
    if(err) throw new gutil.PluginError("webpack-dev-server", err);
    gutil.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/react-grid.html");
  });
});

gulp.task("karma", function(){
  return gulp.src(files)
    .pipe(karma({
      configFile: "karma.config.js",
      action: "start"
    }));
});
