var total = 5.1 + 4.3;
console.log(total.toFixed(2));
// 9.4

var id = 2000 + undefined;
console.log(id);
//NaN

var id = 'PRD' + undefined;
console.log(id);
//'PRDundefined'

var id = 2000 + null;
console.log(id);
//2000 because null treat as 0

var id = 'PRD' + null;
console.log(id);
//PRDnull

var id = 2000 + NaN;
console.log(id);
//NaN 

var id = 'PRD' + null;
console.log(id);
//PRDnull

