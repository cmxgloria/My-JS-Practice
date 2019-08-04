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





