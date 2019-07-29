var obj = {
  calc: 'Logic AND'
};
var value = obj && 99;
console.log(value);
//99 , when the first is obj, the second will return

var obj = {
  calc: 'Logic AND'
};
var value = obj && 0;
console.log(value);
//0

var obj = {
  calc: 'Logic AND'
};
var value = obj && obj;
console.log(value);
//{calc: "Logic AND"}

var obj = {
  calc: 'Logic AND'
};
var value = true && obj;
console.log(value);
//{calc: "Logic AND"}, when it first one is true, then return to the second

var value = null && 99;
console.log(value);
//null

var value = "A" && null;
console.log(value);
//null , if either of value is null, it return to null

var obj = {
  calc: 'Logic AND'
};
var value = false || 99;
console.log(value);
//99, when the first one is false, return to 99



