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

## Loop 
Looping through Arrays
```
const vacationSpots = ['Bali', 'Paris', 'Tulum'];

// Write your code below
for (let i = 0; i < vacationSpots.length; i++ ){
  console.log('I would love to visit ' + vacationSpots[i]);
}
//I would love to visit Bali
I would love to visit Paris
I would love to visit Tulum
```
 
Nested Array
```
const myArray = [6, 19, 20];
const yourArray = [19, 81, 2];
for (let i = 0; i < myArray.length; i++) {
  for (let j = 0; j < yourArray.length; j++) {
    if (myArray[i] === yourArray[j]) {
      console.log('Both loops have the number: ' + yourArray[j])
    }
  }
};
```
another sample
```
// Write your code below
let bobsFollowers = ['Joe', 'Marta', 'Sam', 'Erin'];
let tinasFollowers = ['Sam', 'Marta', 'Elle'];
let mutualFollowers = [];

for(let i=0; i<bobsFollowers.length; i++){
  for(let j=0; j<tinasFollowers.length; j++){
    if(bobsFollowers[i]===tinasFollowers[j]){
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
  
}
console.log(bobsFollowers);
console.log(tinasFollowers);
console.log(mutuaFollowers);

//(4) [
"Joe" ,
"Marta" ,
"Sam" ,
"Erin"
]
(3) [
"Sam" ,
"Marta" ,
"Elle"
]
error: Uncaught ReferenceError: mutuaFollowers is not defined
```

The While Loop 
```
const cards = ['diamond', 'spade', 'heart', 'club'];
let currentCard;

while ( currentCard != 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)];
	console.log(currentCard);
}


```
Do...While Statements
```
let countString = '';
let i = 0;

do {
  countString = countString + i;
  i++;
} while (i < 5);

console.log(countString);
```
The break keyword
```
for(let i=0; i<99;i ++){
  if(i>2){
 break;
  }
   console.log('banana');
}
console.log('orange');
//Banana.
Banana.
Banana.
Orange you glad I broke out the loop!
```

A nested for loop is a loop inside another loop
while loops allow for different types of stopping conditions
Stopping conditions are crucial for avoiding infinite loops.
do...while loops run code at least once— only checking the stopping condition after the first execution
The break keyword allows programs to leave a loop during the execution of its block

## HIGHER-ORDER FUNCTIONS

Functions as Data
```
const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
};

// Write your code below
const is2p2 = checkThatTwoPlusTwoEqualsFourAMillionTimes;
is2p2();
console.log(is2p2.name);
//'checkThatTwoPlusTwoEqualsFourAMillionTimes'
```

function as parameter
When we pass a function in as an argument to another function, we don’t invoke it. Invoking the function would evaluate to the return value of that function call. With callbacks, we pass in the function itself by typing the function name without the parentheses (that would evaluate to the result of calling the function)
```
const timeFuncRuntime = funcParameter => {
   let t1 = Date.now();
   funcParameter();
   let t2 = Date.now();
   return t2 - t1;
}

const addOneToOne = () => 1 + 1;

timeFuncRuntime(addOneToOne);
```
sample
```
const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
};

const addTwo = num => num + 2;

const timeFuncRuntime = funcParameter => {
  let t1 = Date.now();
  funcParameter();
  let t2 = Date.now();
  return t2 - t1;
};

// Write your code below

const time2p2 = timeFuncRuntime(checkThatTwoPlusTwoEqualsFourAMillionTimes);

const checkConsistentOutput = (func, val) => {
    let firstTry = func(val);
    let secondTry = func(val);
    if (firstTry === secondTry) {
        return firstTry
    } else {
        return 'This function returned inconsistent results'
    }
};

checkConsistentOutput(addTwo, 10);
```

## iterator
```
const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];

artists.forEach(artist => {
  console.log(artist + ' is one of my favorite artists.');
});

const numbers = [1, 2, 3, 4, 5];

const squareNumbers = numbers.map(number => {
  return number * number;
});

console.log(squareNumbers);

const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];

const onlyNumbers = things.filter(thing => {
  return typeof thing === 'number';
});

console.log(onlyNumbers);

```
































































