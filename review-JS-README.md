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













