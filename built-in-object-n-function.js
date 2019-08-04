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

