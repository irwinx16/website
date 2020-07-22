var gulp = require('gulp');
var browserSync = require('browser-sync').create();


// Static server
gulp.task('browser-sync', function () {
	browserSync.init({
		server: ["./", "./css/", "./js/"]
	});

	gulp.watch("./*.html").on('change', browserSync.reload);
	gulp.watch("./css/*.css").on('change', browserSync.reload);
	gulp.watch("./js/*.js").on('change', browserSync.reload);
});



gulp.task('default', gulp.series('browser-sync'));