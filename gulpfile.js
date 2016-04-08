/*This file is now initialized in a github repo called sonagulp. If you can't access it, tell Cassidy. 
All changes should be tracked by git, and pulled to local machines from this master document.*/


var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var sass = require('gulp-sass');

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: {
            baseDir: "./opt/bitnami/apps/edx/"
        }
    });

    gulp.watch("themes/rsync/*.scss", ['sass']);
    gulp.watch("themes/rsync/*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("themes/rsync/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("themes/stanford/static/css"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);var gulp = require('gulp');

gulp.task("default", function() { 
	console.log("gulp configuration default");
});
 
