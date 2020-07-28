var gulp = require('gulp');
var browserSync = require('browser-sync').create();


// Static server
gulp.task('browser-sync', function () {
	browserSync.init({
		server: ["./docs"],
		browser: "google chrome"
		// server: ["./", "./css/", "./js/"]
	});
	gulp.watch("./docs/*.html").on('change', browserSync.reload);
	gulp.watch("./docs/css/*.css").on('change', browserSync.reload);
	gulp.watch("./docs/js/*.js").on('change', browserSync.reload);
});

gulp.task('default', gulp.series('browser-sync'));