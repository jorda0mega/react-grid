var gulp = require("gulp");
var gutil = require("gulp-util");
var karma = require("gulp-karma");
var browserify = require("gulp-browserify");

var testFiles = [
  "test/**/*Spec.js"
];

gulp.task("scripts", function(){
  gulp.src("src/*.js")
    .pipe(browserify({
      insertGlobals: true,
      debug: !gulp.env.production
    }))
    .pipe(gulp.dest(".build/js"));
});

gulp.task("jasmine-test", function(){
  return gulp.src(testFiles)
    .pipe(karma({
      configFile: "my.conf.js",
      action: "run"
    }));
});

// gulp.task("watch", function(){
//   gulp.src(testFiles).
//     pipe(karma({
//       configFile: "my.conf.js",
//       action: "watch"
//     }));
// });

gulp.task("default", ["scripts", "jasmine-test"]);
