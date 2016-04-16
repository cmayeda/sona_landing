/*This file is now initialized in a github repo called sonagulp. If you can't access it, tell Cassidy. 
All changes should be tracked by git, and pulled to local machines from this master document.*/

// Currently not compiling correctly, something to do with the way python
// creates the wesbite dynamically. Ricardo made a few additions, like 
// additions, like adding paths variable to simplify. And adding a way to 
// run the python server. More research to be done in exactly how
// manage.py runserver works.

var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var sass = require('gulp-sass');
var exec = require('child_process').exec;
var paths = {
	scripts: ['/opt/bitnami/apps/edx/edx-platform/'],
	html: ['/opt/bitnami/apps/edx/edxapp/staticfiles/templates/*.html'],
	css: ['/opt/bitnami/apps/edx/themes/stanford/static/sass'],
	//The destination folder is incorect, keeps leading somewhere else
	dist: ['/opt/bitnami/apps/edx/themes/gulp/dist']
};


//Initial Serve
gulp.task('runserver', function() {
	gulp.src(paths.scripts)
	.pipe(exec('python manage.py runserver'))
	.pipe(gulp.dest(paths.dist))
})


// Static Server + watching scss/html files
gulp.task('serve',['runserver','sass'], function() {

    browserSync.init({
        server: {
            baseDir: "./opt/bitnami/apps"
        }
    });

    gulp.watch("edx/themes/rsync/*.scss", ['sass']);
    gulp.watch("edx/themes/rsync/*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("themes/rsync/*.scss")
        .pipe(sass())
        .pipe(gulp.dest(paths.dist))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);var gulp = require('gulp');

gulp.task("default", function() { 
	console.log("gulp configuration default");
});
 
