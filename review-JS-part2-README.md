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
