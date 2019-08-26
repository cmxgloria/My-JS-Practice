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

