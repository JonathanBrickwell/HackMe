var gulp = require('gulp');
var concat = require('gulp-concat');
const minify = require('gulp-minify');

gulp.task('pack-js', function () {    
    return gulp.src([
            'assets/js/services/quiz-data-service.js', 
            'assets/js/models/quiz-answers-model.js',
            'assets/js/models/quiz-questions-model.js',
            'assets/js/components/quiz/quiz-component.js',
            'assets/js/components/header/header.js',
            'assets/js/components/endgame/endgame.js',
            'assets/js/authentication/login.js',
            'assets/js/authentication/isUserLoggedIn.js'
        ])
        .pipe(concat('app.js'))
        .pipe(minify())
        .pipe(gulp.dest('dist/build/js'));
});
