## CONDITIONAL STATEMENTS

if, else if, and else statements.
comparison operators.
logical operators.
truthy vs falsy values.
ternary operators.
the switch statement.

The list of falsy values includes:

0
Empty strings like "" or ''
null which represent when there is no value at all
undefined which represent when a declared variable lacks a value
NaN, or Not a Number

Ternary Operator
In the spirit of using short-hand syntax, we can use a ternary operator to simplify an if...else statement.
```
let isLocked = false;

isLocked ? console.log('You will need a key to open the door.') : console.log('You will not need a key to open the door.');

let isCorrect = true;

isCorrect ? console.log('Correct!') : console.log('Incorrect!');

let favoritePhrase = 'Love That!';

favoritePhrase === 'Love That!' ? console.log('I love that!') : console.log("I don't love that!");
//You will not need a key to open the door.
Correct!
I love that!
```

switch
A switch statement can be used to simplify the process of writing multiple else if statements. The break keyword stops the remaining cases from being checked and executed in a switch statement.
```
let athleteFinalPosition = 'first place';
switch(athleteFinalPosition){
  case 'first place':
    console.log('you get the gold medal!');
    break;
  case 'second place':
    console.log('you get the silver medal!');
    break;
  case 'third place':
    console.log('you get the bronze medal');
    break;
  case 'default':
    console.log('no medal awarded.');
    break;
}
 //You get the gold medal 
```


## Function
We should also be aware of the hoisting feature in JavaScript which allows access to function declarations before they’re defined.

Take a look at example of hoisting:
```
console.log(greetWorld()); // Output: Hello, World!

function greetWorld() {
  console.log('Hello, World!');
}
```

parameters
```
function sayThanks(name) {
  console.log('Thank you for your purchase ' + name + '! We appreciate your business.');
}

sayThanks('Cole');
```

Default Parameters
```
function greeting (name = 'stranger') {
  console.log(`Hello, ${name}!`)
}

greeting('Nick') // Output: Hello, Nick!
greeting() // Output: Hello, stranger!
```

Return
```
function monitorCount(row, columns){
 const numOfMonitors=row*columns;
  return numOfMonitors;
}
console.log((monitorCount(5,4)));
```

Helper Function
```
function multiplyByNineFifths(number) {
  return number * (9/5);
};

function getFahrenheit(celsius) {
  return multiplyByNineFifths(celsius) + 32;
};

getFahrenheit(15); // Returns 59
```
another sample
```
function monitorCount(rows, columns) {
  return rows * columns;
}

function costOfMonitors(rows,columns){
  return monitorCount(rows,columns)*200;
}
const totalCost=costOfMonitors(5,4);
console.log(totalCost);
```

Function Expression
```
const plantNeedsWater = function(day) {
  if(day === 'Wednesday'){
    return true;
  } else {
    return false;
  }
};

plantNeedsWater('Tuesday');

console.log(plantNeedsWater('Tuesday'));
```

Arrow function
```
const rectangleArea = (width, height) => {
  let area = width * height;
  return area;
};
```

Concise Body Arrow Functions
```
const squareNum = num => num * num; 
or 
const plantNeedsWater = day => day === 'Wednesday' ? true : false;
```

## Scope
The variable defind outside the block call global scope , if inside the block called block scope.

block scope
```
const logSkyColor = () => {
  let color = 'blue'; 
  console.log(color); // blue 
};

logSkyColor(); // blue 
console.log(color); // ReferenceError
```

another sample
```
const logVisibleLightWaves () => {
  const lightWave = 'Moonlight';
  console.log(lightWave);
}
logVisibleLightWave();
console.log(lightWave);
//Error
```
Scope pollution not good
```
let num = 50;

const logNum = () => {
  num = 100; // Take note of this line of code
  console.log(num);
};

logNum(); // Prints 100
console.log(num); // Prints 100
```
another sample
```
const satellite = 'The Moon';
const galaxy = 'The Milky Way';
let stars = 'North Star';


const callMyNightSky = () => {
  stars = 'Sirius';
	return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};
console.log();
console.log(stars);
//North Star
```

Practice Good Scoping
```
const logSkyColor = () => {
  const dusk = true;
  let color = 'blue'; 
  if (dusk) {
    let color = 'pink';
    console.log(color); // pink
  }
  console.log(color); // blue 
};

console.log(color); // ReferenceError
```
another sample
```
const logVisibleLightWaves = () => {
  let lightWaves = 'Moonlight';
	let region = 'The Arctic';
  // Add if statement here:
  if (region === 'The Arctic'){
    let lightWaves = 'Northern Lights';
    console.log(lightWaves);
  }
  
  console.log(lightWaves);
};

logVisibleLightWaves();
//Northern Lights
Moonlight
```

## Array
Array and Function
```
const flowers = ['peony', 'daffodil', 'marigold'];

function addFlower(arr) {
  arr.push('lily');
}

addFlower(flowers);

console.log(flowers); // Output: ['peony', 'daffodil', 'marigold', 'lily']
```
another sample
```
const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3]='MUTATED';
  
}
changeArr(concept);
console.log(concept);
removeElement = newArr =>{
  newArr.pop();
 
}
 removeElement(concept);
console.log(concept);
//['arrays', 'can', 'be', 'mutated']
['arrays', 'can', 'be']
```






































































