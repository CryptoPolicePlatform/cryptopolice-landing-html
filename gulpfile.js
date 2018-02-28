"use strict";

var gulp = require("gulp"),
    autoprefixer = require("gulp-autoprefixer"),
    cssbeautify = require("gulp-cssbeautify"),
    removeComments = require('gulp-strip-css-comments'),
    rename = require("gulp-rename"),
    sass = require("gulp-sass"),
    cssnano = require("gulp-cssnano"),
    rigger = require("gulp-rigger"),
    uglify = require("gulp-uglify"),
    watch = require("gulp-watch"),
    plumber = require("gulp-plumber"),
    imagemin = require("gulp-imagemin"),
    run = require("run-sequence"),
    rimraf = require("rimraf"),
    webserver = require("browser-sync");



/* Paths to source/build/watch files
=========================*/

var path = {
    build: {
        html: "build/",
        js: "build/assets/js/",
        css: "build/assets/css/",
        img: "build/assets/i/",
        fonts: "build/assets/fonts/",
        json: "build/assets/",
        static: "build/"
    },
    src: {
        html: "src/**/*.{htm,html}",
        js: "src/assets/js/*.js",
        css: ["src/assets/sass/style.scss", "src/assets/sass/unsubscribe.scss"],
        img: "src/assets/i/**/*.*",
        fonts: "src/assets/fonts/**/*.*",
        json: "src/assets/*.json",
        static: "src/*.{txt,xml}"
    },
    watch: {
        html: "src/**/*.{htm,html}",
        js: "src/assets/js/**/*.js",
        css: "src/assets/sass/**/*.scss",
        img: "src/assets/i/**/*.*",
        fonts: "src/assets/fonts/**/*.*",
        json: "src/assets/*.json"
    },
    clean: "./build"
};



/* Webserver config
=========================*/

var config = {
    server: "build/",
    notify: false,
    open: true,
    ui: false
};



/* Tasks
=========================*/

gulp.task("webserver", function () {
    webserver(config);
});


gulp.task("html:build", function () {
    return gulp.src(path.src.html)
        .pipe(plumber())
        .pipe(rigger())
        .pipe(gulp.dest(path.build.html))
        .pipe(webserver.reload({stream: true}));
});

gulp.task("static:build", function () {
    return gulp.src(path.src.static)
        .pipe(plumber())
        .pipe(gulp.dest(path.build.static));
});

gulp.task("css:build", function () {
    gulp.src(path.src.css, {base: './src/assets/sass/'})
        .pipe(plumber())
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ["last 10 versions"],
            cascade: true
        }))
        .pipe(cssnano({
            zindex: false,
            discardComments: {
                removeAll: true
            }
        }))
        .pipe(removeComments())
        .pipe(gulp.dest(path.build.css, {base: './assets/css/'}))
        .pipe(webserver.reload({stream: true}));
});


gulp.task("js:build", function () {
    gulp.src(path.src.js)
        .pipe(plumber())
        .pipe(rigger())
        .pipe(gulp.dest(path.build.js))
        .pipe(uglify())
        .pipe(rename("main.min.js"))
        .pipe(gulp.dest(path.build.js))
        .pipe(webserver.reload({stream: true}));
});


gulp.task("fonts:build", function() {
    gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts));
});


gulp.task("image:build", function () {
    gulp.src(path.src.img)
        .pipe(imagemin({
            optimizationLevel: 3,
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            interlaced: true
        }))
        .pipe(gulp.dest(path.build.img));
});

gulp.task("json:build", function() {
    gulp.src(path.src.json)
        .pipe(gulp.dest(path.build.json));
});


gulp.task("clean", function (cb) {
    rimraf(path.clean, cb);
});


gulp.task('build', function (cb) {
    run(
        "clean",
        "html:build",
        "css:build",
        "js:build",
        "fonts:build",
        "image:build",
        "json:build",
        "static:build"
    , cb);
});


gulp.task("watch", function() {
    watch([path.watch.html], function(event, cb) {
        gulp.start("html:build");
    });
    watch([path.watch.css], function(event, cb) {
        gulp.start("css:build");
    });
    watch([path.watch.js], function(event, cb) {
        gulp.start("js:build");
    });
    watch([path.watch.img], function(event, cb) {
        gulp.start("image:build");
    });
    watch([path.watch.fonts], function(event, cb) {
        gulp.start("fonts:build");
    });
    watch([path.watch.json], function(event, cb) {
        gulp.start("json:build");
    });
});


gulp.task("default", function (cb) {
   run(
       "clean",
       "build",
       "webserver",
       "watch"
   , cb);
});
