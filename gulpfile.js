var gulp = require('gulp'),
    less = require('gulp-less'),
    path = require('path'),
    uglify = require('gulp-uglify'),
    pump = require('pump'),
    concat = require('gulp-concat'),
    prefix = require('gulp-autoprefixer'),
    gulpif = require('gulp-if'),
    cleanCSS = require('gulp-clean-css'),
    browserSync = require('browser-sync').create(),
    useref = require('gulp-useref'),
    imagemin = require('gulp-imagemin'),
    cache = require('gulp-cache'),
    del = require('del'),
    runSequence = require('run-sequence');


gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: 'app'
        }
    })
});

gulp.task('less', function (cb) {
    pump([
        gulp.src(['app/less/styles.less']),
        gulpif(/\.less$/,less({
            strictMath: true,
            strictUnits: true
        })),
        prefix('last 2 versions'),
        gulp.dest('app/css/'),
        browserSync.reload({
            stream: true
        })
    ], cb);
});

gulp.task('default', ['watch']);

gulp.task('watch', ['browserSync', 'less'], function (){
    gulp.watch('app/less/**/*.less', ['less']);
    // Reloads the browser whenever HTML or JS files change
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload);
});

//TASKS FOR BUILDING DIST FOLDER.  - gulp build

gulp.task('build', function (callback) {
    runSequence('clean:dist',
        ['buildImages', 'buildFonts', 'buildScriptsStyles', 'buildDocs'],
        callback
    )
});

gulp.task('cache:clear', function (callback) {
    return cache.clearAll(callback)
});

gulp.task('clean:dist', function() {
    return del.sync('dist');
});

gulp.task('buildImages', function(cb){
    pump([
        gulp.src('app/img/**/*.+(png|jpg|jpeg|gif|svg)'),
        cache(imagemin({
            interlaced: true
        })),
        gulp.dest('dist/img')
    ],cb);
});

gulp.task('buildDocs', function(cb){
    pump([
        gulp.src('app/doc/)'),
        gulp.dest('dist/doc')
    ],cb);
});

gulp.task('buildFonts', function(cb) {
    pump([
        gulp.src('app/fonts/'),
        gulp.dest('dist/fonts')
    ],cb);
});

gulp.task('buildScriptsStyles', function(cb){
    pump([
        gulp.src('app/*.html'),
        useref(),
        gulpif('*.js', uglify()),
        gulpif('*.css', cleanCSS()),
        gulp.dest('dist')
    ],cb);
});

