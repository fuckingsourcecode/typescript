function hello(compiler) {
    console.log("hello from " + compiler);
}
hello('TypeScript');
function f(shouldInitialize) {
    if (shouldInitialize) {
        var x = 10;
    }
    return x;
}
console.log(f(false));
console.log(f(true));
for (var i = 0; i <= 10; i++) {
    (function (i) {
        console.log(i);
    })(i);
}
var c = 'world';
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
var myObj = { size: 10, label: "size is 10 !" };
printLabel(myObj);
