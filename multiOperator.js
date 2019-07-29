var total = 1.1 * 1.1;
console.log(total);
if (total != 1.21)
  console.log('Big problem');
//1.2100000000000002
//'Big problem'


var total = 1.1 * 1.1;
console.log(total);
if (total.toFixed(2) == 1.21)
  console.log('Fix');
//1.2100000000000002
//'Fix'


var total = 30 * NaN;
console.log(total);
//NaN


var total = 30 * 'PRD';
console.log(total);
//NaN

var total = 9 / 0;
console.log(total);
//Infinity

var total = 9 / '3';
console.log(total);
//3







