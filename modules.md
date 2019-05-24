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
