var level = 5;
var base = 10;
var newLevel = --level * base;
console.log(newLevel);
//40

var level = 5;
var base = 10;
var newLevel = level-- * base;
console.log(newLevel);
//50

var value = -42;
value = -value;
console.log(value);
//42

var value = 42;
value = -value;
console.log(value);
//42
var value = 42;
value = -value;
console.log(value);
//-42

var value = 42;
value = +value;
console.log(value);
//42

var value = -42;
value = +value;
console.log(value);
//-42

