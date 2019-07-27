var orderType = 'business';
var shipMethod;
switch (orderType) {
  case 'business':
    shipMethod = 'Fex';
    break; // if do this "// break;" then output 'Ups Ground'
  case 'personal':
    shipMethod = 'Ups Ground';
    break;
  default:
    shipMethod = 'USPS';
}
console.log(shipMethod);


// var orderType = 'business';
// var shipMethod;
// if (orderType == 'business')
//   shipMethod = 'Fex';
// else if (orderType == 'personal')
//   shipMethod = 'UPS Ground';
// else
//   shipMethod = 'USPS';
// console.log(shipMethod);