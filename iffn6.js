var total = 90;
var freeShipping;
var saving;

if (total >= 100) {
  freeShipping = true;
  saving = 29.99;
}
else {
  freeShipping = false;
  saving = 0;
}
console.log(saving);