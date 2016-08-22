function hello (compiler: string) {
	console.log(`hello from ${compiler}`);
}
hello('TypeScript');
function f (shouldInitialize: boolean) {
	if (shouldInitialize) {
		var x = 10;
	}
	return x;
}
console.log(f(false));
console.log(f(true));
for (var i=0; i<=10; i++) {
	(function(i: number) {
		console.log(i);
	})(i);
}
let c = 'world';
interface LabelledValue {
	label: string;
	size?: number;
}
function printLabel(labelledObj: LabelledValue) {
	console.log(labelledObj.label);
}
let myObj = {size: 10, label: `size is 10 !`};
printLabel(myObj);