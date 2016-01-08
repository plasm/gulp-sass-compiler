var gulp    = require("gulp");
var sass    = require('gulp-sass');
var plumber = require('gulp-plumber');
var notify  = require("gulp-notify");

gulp.task("sass", function() {
  gulp.src('./sass/**/*.sass')
    .pipe(plumber({errorHandler: function(err) {
            notify.onError({ title: "Gulp", subtitle: "Failure!", message: "Error: <%= error.message %>", sound: "Beep" })(err)
            this.emit("end")
          }
    }))
    .pipe(sass().on('error', sass.logError))
    .pipe(notify({ message: 'Sass compiled' }))
    .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('**/*.{sass,scss,css}', ['sass'])
});
