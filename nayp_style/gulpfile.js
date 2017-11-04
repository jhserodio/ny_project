/*==========================================================================
TASKS CONFIGURATION
==========================================================================*/

// REQUIRES

var gulp = require('gulp');
  //postcss requires
var postcss        = require('gulp-postcss'),
    nano           = require('cssnano'),
    cssimport      = require('postcss-import'),
    comments       = require('postcss-discard-comments'),
    normalize      = require('postcss-normalize'),
    calc           = require('postcss-calc'),
    variables      = require('postcss-custom-properties'),
    media          = require('postcss-custom-media'),
    selectors      = require('postcss-custom-selectors'),
    fontpath       = require('postcss-fontpath'),
    minmax         = require('postcss-media-minmax'),
    colors         = require('postcss-color-function'),

    // provisorio
    lost           = require('lost'),

  // image compress
    imagemin       = require('gulp-imagemin'),
    svgmin         = require('gulp-svgmin'),
  // utilities
    styleguide     = require('postcss-style-guide'),
    concat         = require('gulp-concat'),
    sourcemaps     = require('gulp-sourcemaps'),
    watch          = require('gulp-watch'),
    copy           = require('gulp-copy-rex'),
    plumber        = require('gulp-plumber');


// GLOBAL VARIABLES

// paths
var src_css   = "resources/assets/css/style.css",
    wtc       = "resources/assets/css/**/*",
    src_img   = "resources/assets/img/**/*",
    src_svg   = "resources/assets/svg/*",
    src_font  = "resources/assets/fonts/*",
    src_js    = "resources/assets/js/*",
    dest_css  = "public/css",
    dest_font = "public/fonts",
    dest_img  = "public/img";
    dest_svg  = "public/svg"
    dest_js   = "public/js";

  // processors
  var processors = [
    cssimport,
    variables,
    calc,
    lost,
    media,
    selectors,
    minmax,
    colors,
    fontpath
  ];

  var processors_prod = [
    cssimport,
    variables,
    calc,
    media,
    selectors,
    minmax,
    colors,
    fontpath,
    comments,
    styleguide({
      project: 'Styleguide',
      dest: './styleguide/index.html',
      showCode: false,
      themePath: 'node_modules/psg-theme-1column'
    }),
    nano({
      autoprefixer: { browsers: [
        'Android >= 2.3',
        'BlackBerry >= 7',
        'Chrome >= 9',
        'Firefox >= 4',
        'Explorer >= 9',
        'iOS >= 5',
        'Opera >= 11',
        'Safari >= 5',
        'OperaMobile >= 11',
        'OperaMini >= 6',
        'ChromeAndroid >= 9',
        'FirefoxAndroid >= 4',
        'ExplorerMobile >= 9'
      ]}
    })
  ];

// TASKS DECLARATION

// style task developer
gulp.task('postcss', function () {
  return gulp.src(src_css)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(postcss(processors))
    .pipe(sourcemaps.write("map"))
    .pipe(gulp.dest(dest_css));
});
// style task production
gulp.task('postcss:prod', function () {
  return gulp.src(src_css)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(postcss(processors_prod))
    .pipe(sourcemaps.write("map"))
    .pipe(gulp.dest(dest_css));
});

// compress image files
gulp.task('imagemin', function () {
  return gulp.src(src_img)
    .pipe(imagemin({
      progressive: true
    }))
    .pipe(gulp.dest(dest_img));
});

// compres svg files
gulp.task('copy-svg', function() {
    copy(src_svg, dest_svg);
});

// copy files
gulp.task('copy-fonts', function() {
  copy(src_font, dest_font);
});

// watch
gulp.task('watch', function(){
  gulp.watch(wtc, ['postcss']);
});

// default task
gulp.task('default', ['postcss', 'copy-svg', 'copy-fonts', 'imagemin', 'watch']);

// production task
gulp.task('prod', ['postcss:prod', 'copy-fonts', 'copy-fonts', 'imagemin',]);
