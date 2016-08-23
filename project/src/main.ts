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

interface SquareConfig {
	color?: string;
	width?: number;
}
function createSquare(config: SquareConfig): { color: string; area: number} {
	let newSquare = {color: 'white', area: 100};
	if (config.color) {
		newSquare.color = config.color;
	}
	if (config.width) {
		newSquare.area = config.width * config.width;
	}
	return newSquare;
}
let mySquare = createSquare({colour: 'black'});
console.log(mySquare.area);

class Animal {
	name: string;
}
class Dog extends Animal {
	breed: string;
}
interface NotOkay {
	[x: number]: Animal;
	[x: string]: Dog;
}

interface ClockInterface {
	currentTime: Date;
}
class Clock implements ClockInterface {
	currentTime: Date;
	constructor(h: number, m: number);
}