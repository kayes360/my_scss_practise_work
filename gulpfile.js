const {src, dest, watch, series} = require('gulp');

const sass = require('gulp-sass')(require('sass'));
const purgecss = require('gulp-purgecss');

function build(){
    return src('my-scss/**/*.scss')
        .pipe(sass())
        .pipe(purgecss({content: ['*.html']}))
        .pipe(dest('css'))
}
function watcher(){
    watch(['my-scss/**/*.scss', '*.html'], build)
}

exports.default = series(build,watcher)