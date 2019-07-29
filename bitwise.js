var num1 = parseInt('1010', 2);
var num2 = parseInt('0110', 2);
var total = num1 & num2;
console.log(total.toString(2));
//10

var num1 = parseInt('1010', 2);
var num2 = parseInt('0110', 2);
var total = num1 | num2;
console.log(total.toString(2));
//1110(last bit doesnt contain 1)

var num1 = parseInt('1010', 2);
var num2 = parseInt('0110', 2);
var total = num1 ^ num2;
console.log(total.toString(2));
//1100 (the third bit exclusive and it evaluate 0)

var num1 = parseInt('0001', 2);
num1 = num1 << 2;
console.log(num1.toString(2));
//100, shift it to the left 2 places

var num1 = parseInt('0001', 2);
num1 = num1 >> 3;
console.log(num1.toString(2));
//1 ( the one shift over 3 places, and we left 1)


var num1 = -parseInt('0001', 2);
num1 = num1 >> 3;
console.log(num1.toString(2));
//-1(shift it to the right 3 places)


var num1 = parseInt('1000', 2);
num1 = num1 >>> 1;
console.log(num1.toString(2));
//100

var num1 = -parseInt('1000', 2);
num1 = num1 >>> 1;
console.log(num1.toString(2));
//'1111111111111111111111111111100'



