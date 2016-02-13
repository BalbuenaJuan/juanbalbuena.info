var gulp = require('gulp'),
    uglify = require('gulp-uglify');
gulp.task('js', function () {
    return gulp.src('*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(uglify())
        .pipe(concat('app.js'))
        .pipe(gulp.dest('build'));
});

var concat = require('gulp-concat');
gulp.task('scripts', function() {
    return gulp.src('*.js')
        .pipe(concat('app.js'))
        .pipe(gulp.dest('build'));
});

gulp.task('minify', function () {
    gulp.src('*.js')
        .pipe(uglify())
        .pipe(concat('app.js'))
        .pipe(gulp.dest('build'))
});























