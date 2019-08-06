//global function, math,string, arguments

var value = parseInt('1234');
console.log(value);
//1234

var value = parseInt('b1234');
console.log(value);
//NaN

var value = parseInt('12z34');
console.log(value);
//12

var value = parseInt('1234.9');
console.log(value);
//1234

var value = parseInt(' ');
console.log(value);
//NaN

var value = parseInt('C000', 16);
console.log(value);
//49152, 16 is hex number

var value = parseFloat('123.9');
console.log(value);
//123.9

var value = parseFloat('z123.9');
console.log(value);
//NaN

var value = parseFloat('1239e-2');
console.log(value);
//12.39, e-2 move the decimal place 2 position to the left

var value = isFinite(Number.POSITION_INFINITY);
console.log(value);
//false, we dont have the finite number

var value = isFinite(42);
console.log(value);
//true

var value = isNaN(NaN);
console.log(value);
//true

var value = isFinite(9 / 0);
console.log(value);
//false, 9/0 is infinite

var path = '\\start\\';
console.log(encodeURI(path));
//'%5Cstart%5C'

var path = '\\start\\+';
console.log(encodeURI(path));
//'%5Cstart%5C+', have a look at MDN

var path = '\\start\\+';
console.log(encodeURIComponent(path));
//'%5Cstart%5C%2B'

var path = '%5Cstart%5C+';
console.log(decodeURI(path));
//'\start\+'

var path = '%5Cstart%5C%2B';
console.log(decodeURIComponent(path));
//'\start\+'

var globalVar = 'foo';
var code = 'console.log(globalVar)';
eval(code);
//foo






