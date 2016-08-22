var gulp = require("gulp");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("./tsconfig.json");
gulp.task('typescript', function () {
	return tsProject.src()
	.pipe(ts(tsProject))
	.js.pipe(gulp.dest("project/dist"));
});
gulp.task('watch',function () {
	gulp.watch('project/**/*.ts', ['typescript']);
});
gulp.task('default', ['typescript', 'watch'],function () {
});