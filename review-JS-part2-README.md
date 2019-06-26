## class
JavaScript calls the constructor() method every time it creates a new instance of a class.

constructor can tell the class and object apart.
```

class Surgeon{
  constructor(name, department){
    this.name = name;
    this.department = department;
    
  }
}
console.log(Surgeon.name);
//Surgeon
```
Instance
```
class Dog {
  constructor(name) {
    this.name = name;
    this.behavior = 0;
  } 
}

const halley = new Dog('Halley'); // Create new Dog instance
console.log(halley.name); // Log the name value saved to halley
// Output: 'Halley'
```
another sample
```
class Surgeon {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }
}

const surgeonCurry= new Surgeon('Curry', 'Crdiovascular');

const surgeonDurant = new Surgeon('Durant', 'Orthopedics');
console.log(surgeonCurry);
console.log(surgeonDurant);
//Surgeon { name: 'Curry', department: 'Crdiovascular' }
Surgeon { name: 'Durant', department: 'Orthopedics' }
```

Method
we also prepended our property names with underscores (_name and _department and _remainingVacationDays), which indicate these properties should not be accessed directly. 
```
class Surgeon {
  constructor(name, department) {
    this._name = name;
    this._department = department;
    this._remainingVacationDays = 20;
  }
  get name(){
    return this._name;
  }
  get department(){
    return this._department;
  }
  get remainingVacationDays(){
    return this._remainingVacationDays;
  }
  takeVacationDays(daysOff){
    this._remainingVacationDays -= daysOff;
  }
} 
const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');
const surgeonDurant = new Surgeon('Durant', 'Orthopedics');
console.log(surgeonCurry);
console.log(surgeonDurant);
surgeonCurry.takeVacationDays(3);
console.log(surgeonCurry.remainingVacationDays);
//Surgeon {
  _name: 'Curry',
  _department: 'Cardiovascular',
  _remainingVacationDays: 20 }
Surgeon {
  _name: 'Durant',
  _department: 'Orthopedics',
  _remainingVacationDays: 20 }
17
```

Method Call
```
class Dog {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }

  get name() {
    return this._name;
  }

  get behavior() {
    return this._behavior;
  }   

  incrementBehavior() {
    this._behavior++;
  }
}

const halley = new Dog('Halley');
let nikko = new Dog('Nikko'); // Create dog named Nikko
nikko.incrementBehavior(); // Add 1 to nikko instance's behavior
let bradford = new Dog('Bradford'); // Create dog name Bradford
console.log(nikko.behavior); // Logs 1 to the console
console.log(bradford.behavior); // Logs 0 to the console
```

Inheritance I
With inheritance, you can create a parent class (also known as a superclass) with properties and methods that multiple child classes (also known as subclasses) share. The child classes inherit the properties and methods from their parent class.

Inheritance III
```
class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name);
    this._certifications = certifications;
  }
}

const nurseOlynyk = new Nurse('Olynyk', ['Trauma', 'Pediatrics']);

console.log(nurseOlynyk);
//Nurse {
  _name: 'Olynyk',
  _remainingVacationDays: 20,
  _certifications: [ 'Trauma', 'Pediatrics' ] }

```

Inheritance IV
```
class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

class Nurse extends HospitalEmployee {
 constructor(name, certifications) {
   super(name);
   this._certifications = certifications;
 } 
}

const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);

nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays);
//15
```

Inheritance V
```
class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name);
    this._certifications = certifications;
  } 
  
  get certifications() {
    return this._certifications;
  }
  
  addCertification(newCertification) {
    this._certifications.push(newCertification);
  }
}

const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);
nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays);
nurseOlynyk.addCertification('Genetics');
console.log(nurseOlynyk.certifications);
//15
[ 'Trauma', 'Pediatrics', 'Genetics' ]
```

Static Methods
```
class Animal {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }

  static generateName() {
    const names = ['Angel', 'Spike', 'Buffy', 'Willow', 'Tara'];
    const randomNumber = Math.floor(Math.random()*5);
    return names[randomNumber];
  }
} 
console.log(Animal.generateName()); // returns a name
const tyson = new Animal('Tyson'); 
tyson.generateName(); // TypeError

```
The example above will result in an error, because you cannot call static methods (.generateName()) on an instance (tyson).

```
class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
  
  static generatePassword() {
    return Math.floor(Math.random() * 10000);
  }
}

class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name);
    this._certifications = certifications;
  } 
  
  get certifications() {
    return this._certifications;
  }
  
  addCertification(newCertification) {
    this.certifications.push(newCertification);
  }
}

const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);
nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays);
nurseOlynyk.addCertification('Genetics');
console.log(nurseOlynyk.certifications);
//15
[ 'Trauma', 'Pediatrics', 'Genetics' ]

```


## BROWSER COMPATIBILITY AND TRANSPILATION

caniuse.com 

Transpilation With Babel

npm init
We install Babel with the following two commands:

$ npm install babel-cli -D
$ npm install babel-preset-env -D
The babel-cli package includes command line Babel tools, and the babel-preset-env package has the code that maps any JavaScript feature, ES6 and above (ES6+), to ES5.

The -D flag instructs npm to add each package to a property called devDependencies in package.json. Once the project’s dependencies are listed in devDependencies, other developers can run your project without installing each package separately. Instead, they can simply run npm install — it instructs npm to look inside package.json and download all of the packages listed in devDependencies.
Once you npm install packages, you can find the Babel packages and all their dependencies in the node_modules folder. The new directory structure contains the following:

project
|_ node_modules
|___ .bin
|___ ...
|_ src
|___ main.js
|_ package.json
The ... in the file structure above is a placeholder for 100+ packages that npm installed.

Babel Source Lib


...
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "build": "babel src -d lib"
}
In the "scripts" object above, we add a property called "build". The property’s value, "babel src -d lib", is a command line method that transpiles ES6+ code to ES5. Let’s consider each argument in the method call:

babel — The Babel command call responsible for transpiling code.
src — Instructs Babel to transpile all JavaScript code inside the src directory.
-d — Instructs Babel to write the transpiled code to a directory.
lib — Babel writes the transpiled code to a directory called lib.
In the next exercise, we’ll run the babel src -d lib method to transpile our ES6+ code.


## INTERMEDIATE JAVASCRIPT MODULES

module.exports
```
let Menu = {};
Menu.specialty = "Roasted Beet Burger with Mint Sauce";

module.exports = Menu; 
```

let Menu = {}; creates the object that represents the module Menu. The statement contains an uppercase variable named Menu which is set equal to an object.
Menu.specialty is defined as a property of the Menu module. We add data to the Menu object by setting properties on that object and giving the properties a value.
"Roasted Beet Burger with Mint Sauce"; is the value stored in the Menu.specialty property.
module.exports = Menu; exports the Menu object as a module. module is a variable that represents the module, and exports exposes the module as an object.

require()
```
const Menu = require('./menu.js');

function placeOrder() {
  console.log('My order is: ' + Menu.specialty);
}

placeOrder();
```

module.exports II
We can also wrap any collection of data and functions in an object, and export the object using module.exports. In menu.js, we could write:

module.exports = {
  specialty: "Roasted Beet Burger with Mint Sauce",
  getSpecialty: function() {
    return this.specialty;
  } 
}; 
In the above code, notice:

module.exports exposes the current module as an object.
specialty and getSpecialty are properties on the object.
Then in order.js, we write:

const Menu = require('./menu.js');

console.log(Menu.getSpecialty());
Here we can still access the behavior in the Menu module.


export default
exporting modules have two techniques, default export and named exports.
```
export let availableAirplanes = [
{name: 'AeroJet',
 fuelCapacity: 800,
 availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators'],
 maxSpeed: 1200,
 minSpeed: 300
}, 
{name: 'SkyJet',
 fuelCapacity: 500,
 availableStaff: ['pilots', 'flightAttendants'],
 maxSpeed: 800,
 minSpeed: 200
}
];

export let flightRequirements = {
  requiredStaff: 4,
  requiredSpeedRange: 700
};

export function meetsStaffRequirements(availableStaff, requiredStaff) {
  if (availableStaff.length >= requiredStaff) {
    return true;
  } else {
    return false;
  }
};

export function meetsSpeedRangeRequirements(maxSpeed, minSpeed, requiredSpeedRange) {
  let range = maxSpeed - minSpeed;
  if (range > requiredSpeedRange) {
    return true;
    } else {
    return false;
  }
};

export default meetsSpeedRangeRequirements;
```

import

```
import { availableAirplanes, flightRequirements, meetsStaffRequirements} from './airplane';

import meetsSpeedRangeRequirements from './airplane';

function displayFuelCapacity() {
  availableAirplaanes.forEach(function(element) {
    console.log('Fuel Capacity of ' + element.name + ': ' + element['fuelCapacity']);
  });
}

displayFuelCapacity();

function displayStaffStatus() {
  availableAirplanes.forEach(function(element) {
   console.log(element.name + ' meets staff requirements: ' + meetsStaffRequirements(element.availableStaff, flightRequirements.requiredStaff) );
  });
}

displayStaffStatus();

function displaySpeedRangeStatus() {
  availableAirplanes.forEach(function(element) {
   console.log(element.name + ' meets speed range requirements:' + meetsSpeedRangeRequirements(element.maxSpeed, element.minSpeed, flightRequirements.requiredSpeedRange));
  });
}

displaySpeedRangeStatus();
//Fuel Capacity of AeroJet: 800
Fuel Capacity of SkyJet: 500
AeroJet meets staff requirements: true
SkyJet meets staff requirements: false
AeroJet meets speed range requirements:true
SkyJet meets speed range requirements:false

```

Named Exports
```
let specialty = '';
function isVegetarian() {
}; 
function isLowSodium() {
}; 

export { specialty, isVegetarian };
```

Notice that, when we use named exports, we are not setting the properties on an object. Each export is stored in its own variable.
specialty is a string object, while isVegetarian and isLowSodium are objects in the form of functions. Recall that in JavaScript, every function is in fact a function object.
export { specialty, isVegetarian }; exports objects by their variable names. Notice the keyword export is the prefix.
specialty and isVegetarian are exported, while isLowSodium is not exported, since it is not specified.

Named Imports

Named exports are also distinct in that they can be exported as soon as they are declared, by placing the keyword export in front of variable declarations.

In menu.js
```
export let specialty = '';
export function isVegetarian() {
}; 
function isLowSodium() {
}; 
```
The export keyword allows us to export objects upon declaration, as shown in export let specialty and export function isVegetarian() {}.
We no longer need an export statement at the bottom of our file, since this behavior is handled above.

import Named imports
To import variables that are declared, we simply use the original syntax that describes the variable name. In other words, exporting upon declaration does not have an impact on how we import the variables.
```
import { specialty, isVegetarian } from 'menu';
```
another sample
```
import { availableAirplanes, flightRequirements, meetsStaffRequirements} from './airplane';

import meetsSpeedRangeRequirements from './airplane';

function displayFuelCapacity() {
  availableAirplaanes.forEach(function(element) {
    console.log('Fuel Capacity of ' + element.name + ': ' + element['fuelCapacity']);
  });
}

displayFuelCapacity();

function displayStaffStatus() {
  availableAirplanes.forEach(function(element) {
   console.log(element.name + ' meets staff requirements: ' + meetsStaffRequirements(element.availableStaff, flightRequirements.requiredStaff) );
  });
}

displayStaffStatus();

function displaySpeedRangeStatus() {
  availableAirplanes.forEach(function(element) {
   console.log(element.name + ' meets speed range requirements:' + meetsSpeedRangeRequirements(element.maxSpeed, element.minSpeed, flightRequirements.requiredSpeedRange));
  });
}

displaySpeedRangeStatus();
```























