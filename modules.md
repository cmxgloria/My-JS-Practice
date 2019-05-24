##module.exports
We can get started with modules by defining a module in one file and making the module available for use in another file. Below is an example of how to define a module and how to export it using the statement module.exports.
```
let Menu = {};
Menu.specialty = "Roasted Beet Burger with Mint Sauce";

module.exports = Menu; ```
Let’s consider what this code means.

let Menu = {}; creates the object that represents the module Menu. The statement contains an uppercase variable named Menu which is set equal to an object.
Menu.specialty is defined as a property of the Menu module. We add data to the Menu object by setting properties on that object and giving the properties a value.
"Roasted Beet Burger with Mint Sauce"; is the value stored in the Menu.specialty property.
module.exports = Menu; exports the Menu object as a module. module is a variable that represents the module, and exports exposes the module as an object.
The pattern we use to export modules is thus:

Define an object to represent the module.
Add data or behavior to the module.
Export the module.
```
let Airplane = {};

Airplane.myAirplane = "StarJet";

module.exports = Airplane;
```
//print: StarJet

##require()
To make use of the exported module and the behavior we define within it, we import the module. A common way to do this is with the require() function.

For instance, say we want the module to control the menu’s data and behavior, and we want a separate file to handle placing an order. We would create a separate file order.js and import the Menu module from menu.js to order.js using require():

In order.js we would write:

```
const Menu = require('./menus.js');
function placeOrder(){
  cosole.log('My order is: '+Menu.specialty);
}
placeOrder();
```
We now have the entire behavior of Menu available in order.js. Here, we notice:

In order.js we import the module by creating a variable with const called Menu and setting it equal to the value of the require() function. We can set this variable to any variable name we like, such as menuItems.
require() is a JavaScript function that enables a module to load by passing in the module’s filepath as a parameter.
'./menu.js' is the argument we pass to the require() function.
The placeOrder() function then uses the Menu module in its function definition. By calling Menu.specialty, we access the property specialty defined in the Menu module.
We can then invoke the function using placeOrder()
Taking a closer look, the pattern to import a module is:

Import the module
Use the module and its properties within a program.
```
const Airplane = require('./1-airplane.js');

function displayAirplane() {
  console.log(Airplane.myAirplane);
}

displayAirplane();
```
##module.exports II
We can also wrap any collection of data and functions in an object, and export the object using module.exports. In menu.js, we could write:

```
module.exports = {
  specialty: "Roasted Beet Burger with Mint Sauce",
  getSpecialty: function() {
    return this.specialty;
  } 
}; 
```
In the above code, notice:

module.exports exposes the current module as an object.
specialty and getSpecialty are properties on the object.
Then in order.js, we write:
```
const Menu = require('./menu.js');

console.log(Menu.getSpecialty());
```
































