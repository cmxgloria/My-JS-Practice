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

