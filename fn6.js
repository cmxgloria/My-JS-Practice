var totalCost = 101;
var discount;
switch (true) {
  case totalCost >= 50 && totalCost < 75:
    discount = 10;
    break;
  case totalCost >= 76 && totalCost < 100:
    discount = 20;
    break;
  case totalCost >= 100:
    discount = 30;
    break;
  default:
    discount = 0;

}
console.log(discount);