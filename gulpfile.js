var gulp = require("gulp");
var gutil = require("gulp-util");
var karma = require("gulp-karma");
var react = require("gulp-react");

var testFiles = [
  "test/**/*Spec.js"
];

gulp.task("build-react", function(){
  gulp.src("*.jsx")
    .pipe(react())
    .pipe(gulp.dest("compiled-react"));
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

gulp.task("default", ["build-react", "jasmine-test"]);