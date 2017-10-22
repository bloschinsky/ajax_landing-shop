'use strict';

var gulp = require('gulp'),
    watch = require('gulp-watch'),
    prefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    //sass = require('gulp-sass'),
    //sourcemaps = require('gulp-sourcemaps'),
    rigger = require('gulp-rigger'),
    //cssmin = require('gulp-minify-css'),
    //imagemin = require('gulp-imagemin'),
    //pngquant = require('imagemin-pngquant'),
    rimraf = require('rimraf'),
    browserSync = require("browser-sync"),
    rename = require("gulp-rename"),
    reload = browserSync.reload;

var path = {
    build: {
        html: 'build/',
        template: 'build/template/',
        js: 'build/js/',
        css: 'build/css/',
        img: 'build/img/',
        fonts: 'build/fonts/',
        json: 'build/'
    },
    src: {
        html: 'src/*.html',
        template: 'src/js/**/*.html',
        js: 'src/js/script.js',
        style: 'src/css/style.css',
        img: 'src/img/**/*.*',
        fonts: 'src/fonts/**/*.*',
        json: 'src/*.json'
    },
    watch: {
        html: 'src/**/*.html',
        js: 'src/js/**/*.js',
        style: 'src/css/**/*.css',
        img: 'src/img/**/*.*',
        fonts: 'src/fonts/**/*.*',
        json: 'src/*.json'
    },
    dependency: {
        materialize: 'node_modules/materialize-css/dist/css/materialize.css',
        materialize_js: 'node_modules/materialize-css/dist/js/materialize.min.js',
        jquery: 'node_modules/jquery/dist/jquery.min.js',
        angular: 'node_modules/angular/angular.min.js',
        angular_router: 'node_modules/angular-ui-router/release/angular-ui-router.min.js',
        angular_ui_carousel: 'node_modules/angular-ui-carousel/dist/ui-carousel.min.js',
        angular_ui_carousel_css: 'node_modules/angular-ui-carousel/dist/ui-carousel.min.css'
    },
    clean: './build'
};

var config = {
    server: {
        baseDir: "./build"
    },
    tunnel: true,
    host: 'localhost',
    port: 8888,
    logPrefix: "Frontend_Devil"
};


gulp.task('webserver', function () {
    browserSync(config);
});

gulp.task('clean', function (cb) {
    rimraf(path.clean, cb);
});

gulp.task('dependency:create', function(){
    gulp.src(path.dependency.materialize)
        .pipe(gulp.dest(path.build.css));

    gulp.src(path.dependency.materialize_js)
        .pipe(gulp.dest(path.build.js));

    gulp.src(path.dependency.jquery)
        .pipe(gulp.dest(path.build.js));

    gulp.src(path.dependency.angular)
        .pipe(gulp.dest(path.build.js));

    gulp.src(path.dependency.angular_router)
        .pipe(gulp.dest(path.build.js));

    gulp.src(path.dependency.angular_ui_carousel_css)
        .pipe(gulp.dest(path.build.css));

    gulp.src(path.dependency.angular_ui_carousel)
        .pipe(gulp.dest(path.build.js));

});

gulp.task('html:build', function () {
    gulp.src(path.src.html) 
        //.pipe(rigger())
        .pipe(gulp.dest(path.build.html))
        .pipe(reload({stream: true}));

    gulp.src(path.src.template)
        .pipe(rename({dirname:''}))
        .pipe(gulp.dest(path.build.template))
        .pipe(reload({stream: true}));

    gulp.src(path.src.json) 
        //.pipe(rigger())
        .pipe(gulp.dest(path.build.json))
        .pipe(reload({stream: true}));
});

gulp.task('js:build', function () {
    gulp.src(path.src.js) 
        .pipe(rigger()) 
        //.pipe(sourcemaps.init()) 
        //.pipe(uglify()) 
        //.pipe(sourcemaps.write()) 
        .pipe(gulp.dest(path.build.js))
        .pipe(reload({stream: true}));
});

gulp.task('style:build', function () {
    gulp.src(path.src.style) 
        //.pipe(sourcemaps.init())
        /*.pipe(sass({
            sourceMap: true,
            errLogToConsole: true
        }))*/
        .pipe(prefixer())
        //.pipe(cssmin())
        //.pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.css))
        .pipe(reload({stream: true}));
});

gulp.task('image:build', function () {
    gulp.src(path.src.img) 
        /*.pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()],
            interlaced: true
        }))*/
        .pipe(gulp.dest(path.build.img))
        .pipe(reload({stream: true}));
});

gulp.task('fonts:build', function() {
    gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts))
});

gulp.task('build', [
    'dependency:create',
    'html:build',
    'js:build',
    'style:build',
    'fonts:build',
    'image:build'
]);


gulp.task('watch', function(){
    watch([path.watch.html], function(event, cb) {
        gulp.start('html:build');
    });
    watch([path.watch.json], function(event, cb) {
        gulp.start('html:build');
    });
    watch([path.watch.style], function(event, cb) {
        gulp.start('style:build');
    });
    watch([path.watch.js], function(event, cb) {
        gulp.start('js:build');
    });
    watch([path.watch.img], function(event, cb) {
        gulp.start('image:build');
    });
    watch([path.watch.fonts], function(event, cb) {
        gulp.start('fonts:build');
    });
});


gulp.task('default', ['build', 'webserver', 'watch']);