const bread = { name: 'Bread', price: 1 };
const water = { name: 'Water', price: 0.25 };
const basket = [];
basket.push(bread);
basket.push(bread);
basket.push(water);
basket.push(water);
basket.push(water);
const total = basket
  .map(product => product.price)
  .reduce((a, b) => a + b, 0);
console.log('one has to pay in total: ' + total);
//one has to pay in total: 2.75, without OOP

const bread = new Product('bread', 1);
const water = new Product('water', .25)
const basket = new Basket();
basket.addProduct(2, bread);
basket.addProduct(3, water);
basket.printShoppingInfo();
// same output, this with OOP

//if write the class look like as below
function Product(_name, _price) {
  const name = _name;
  const price = _price;
  this.getName = function () {
    return name;
  };
  this.getPrice = function () {
    return price;
  };
}
function Basket() {
  const products = [];
  this.addProduct = function (amount, product) {
    products.push(...Array(amount).fill(product));
  };
  this.calcTotal = function () {
    return products
      .map(product => product.getPrice())
      .reduce((a, b) => a + b, 0);
  };
  this.printShoppingInfo = function () {
    console.log('one has to pay in total: ' + this.calcTotal());
  };
