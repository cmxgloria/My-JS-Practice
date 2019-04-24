#chapter JSX
JSX is a syntax extension for JavaScript. It was written to be used with React. JSX code looks a lot like HTML.
If a JavaScript file contains JSX code, then that file will have to be compiled. That means that before the file reaches a web browser, a JSX compiler will translate any JSX into regular JavaScript
##JSX Elements And Their Surroundings
Here’s an example of several JSX elements being stored in an object
```
const myTeam = {
  center: <li>Benzo Walli</li>,
  powerForward: <li>Rasha Loa</li>,
  smallForward: <li>Tayshaun Dasmoto</li>,
  shootingGuard: <li>Colmar Cumberbatch</li>,
  pointGuard: <li>Femi Billon</li>
};
```
##Attributes In JSX
A JSX attribute is written using HTML-like syntax: a name, followed by an equals sign, followed by a value. The value should be wrapped in quotes, like this:
```
my-attribute-name="my-attribute-value"
```
Here are some JSX elements with attributes:

```
<a href="http://www.example.com">Welcome to the Web</a>;

const title = <h1 id="title">Introduction to React.js: Part I</h1>; 

```
A single JSX element can have many attributes, just like in HTML:
```
const panda = <img src="images/panda.jpg" alt="panda" width="500px" height="500px"/>;
```
Can create my own attribute like as below:
const myH1 = <h1 my-custom-attribute="my-custom-attribute-value" myOtherCustomAttribute="my-other-custom-attribute-value" anothercustomattribute="another-custom-attribute-value">Hello React</h1>;
//all of the above attributes `my-custom-attribute`, `myOtherCustomAttribute`, and `anothercustomattribute` are valid JSX

##Nested JSX
Here’s an example of a JSX <h1> element, nestedinside of a JSX <a> element:
And if more than one line, then you must wrap the multi-line JSX expression in parentheses.
```
(
<a href="https://www.example.com">
  <h1>
    Click me!
  </h1>
</a>
)
```
Another sample
```
const theExample = (
   <a href="https://www.example.com">
     <h1>
       Click me!
     </h1>
   </a>
 );
```
##JSX Outer Elements
There’s a rule that we haven’t mentioned: a JSX expression must have exactly one outermost element.
In other words, this code will work:
```
const paragraphs = (
<div id="i-am-the-outermost-element">
  <p>I am a paragraph.</p>
  <p>I , too, am a paragraph.</p>
  </div>
);
```
But this code will not work:
```
const paragraphs = (
  <p>I am a paragraph.</p> 
  <p>I, too, am a paragraph.</p>
);
```
If you notice that a JSX expression has multiple outer elements, the solution is usually simple: wrap the JSX expression in a <div></div>.
Can I wrap multi-line JSX expressions in an element other than a <div>?
Answer
JSX expressions can be wrapped in an element other than a <div> element to be sure that the first opening tag and final closing tag of a JSX expression belong to the same element.
##Rendering JSX
```
import React from 'react';
import ReactDOM from 'react-dom';

// Copy code here:
ReactDOM.render(<h1>Hello world</h1>,document.getElementById('app'));```
//print:Hello world

Question
What’s the difference between React and ReactDOM?
Answer
React is a JavaScript library for building User Interfaces and ReactDOM is the JavaScript library that allows React to interact with the DOM.

##ReactDOM.render() I
ReactDOM is the name of a JavaScript library. This library contains several React-specific methods, all of which deal with the DOM in some way or another.
ReactDOM.render() is the most common way to render JSX. It takes a JSX expression, creates a corresponding tree of DOM nodes, and adds that tree to the DOM. That is the way to make a JSX expression appear on screen.
Question
Is the ReactDOM library built into the React library?
Answer
ReactDOM is not included in the generic React library. When we include the generic React library as a <script> tag in our HTML we will also have to include a <script> tag for the ReactDOM library if we want to use ReactDOM.
##ReactDOM.render() II
Index.html sample
```
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<link rel="stylesheet" href="/styles.css">
	<title>Learn ReactJS</title>
</head>
 
<body>
  <span id="container"></span>
	<script src="https://s3.amazonaws.com/codecademy-content/courses/React/react-course-bundle.min.js"></script>
  <script src="/app.compiled.js"></script>
</body>
 
</html>
 
```
App.js sample
```
import React from 'react';
import ReactDOM from 'react-dom';

// Write code here:
ReactDOM.render(<h1>Render me!</h1>, document.getElementById('container'));

```
##Passing a Variable to ReactDOM.render()
The first argument could also be a variable, so long as that variable evaluates to a JSX expression.
```
import React from 'react';
import ReactDOM from 'react-dom';

// Write code here:
const toDoList=(
<ol>
  <li>Learn React</li>
  <li>Become a Developer</li>
  </ol>);
ReactDOM.render(toDoList,document.getElementById('app')
);
```
##The Virtual DOM
One special thing about ReactDOM.render() is that it only updates DOM elements that have changed.
That means that if you render the exact same thing twice in a row, the second render will do nothing:
```
const hello = <h1>Hello world</h1>;

// This will add "Hello world" to the screen:

ReactDOM.render(hello, document.getElementById('app'));

// This won't do anything at all:

ReactDOM.render(hello, document.getElementById('app'));
```
React accomplishes this thanks to something called the virtual DOM. Before moving on to the end of the lesson, read this article about the Virtual DOM.
##
JSX Recap
Congratulations! You’ve learned to create and render JSX elements! This is the first step towards becoming fluent in React.
In the next lesson, you’ll learn some powerful things that you can do with JSX, as well as some common JSX issues and how to avoid them.

## chapter 2 advanced JSX
###class vs className
```
<h1 className='big'>Hey</h1>
```
--in html saying class=’big’, but in jsx saying classname=’big’
This is because JSX gets translated into JavaScript, and class is a reserved word in JavaScript.
When JSX is rendered, JSX className attributes are automatically rendered as class attributes.
```
import React from 'react';
import ReactDOM from 'react-dom';

// Write code here:
const myDiv = (
<div className='big'>
  I AM A BIG DIV
  </div>);
ReactDOM.render(myDiv,document.getElementById('app'));
```
##Self-Closing Tags
HTML elements such as <img> and <input> use only one tag
  Fine in JSX:

  <br />

NOT FINE AT ALL in JSX:

  <br>
##JavaScript In Your JSX In Your JavaScript
```
import React from 'react';
import ReactDOM from 'react-dom';

// Write code here:
ReactDOM.render(<h1>2+3</h1>, document.getElementById('app'));
```
//print:2+3
##Curly Braces in JSX
```
import React from 'react';
import ReactDOM from 'react-dom';

// Write code here:
ReactDOM.render(<h1>{2+3}</h1>, document.getElementById('app'));
```
//print: 5
##20 Digits of Pi in JSX
In the code editor, you can see a JSX expression 
App.js
```
import React from 'react';
import ReactDOM from 'react-dom';

// Write code here:
const math = <h1>2 + 3 = {2 + 3}</h1>;

ReactDOM.render(math, document.getElementById('app')
);
```
Pi.js
```
import React from 'react';
import ReactDOM from 'react-dom';

const pi = (
  <div>
    <h1>
      PI, YALL!
    </h1>
    <p>
      {Math.PI.toFixed(20)}
    </p>
  </div>
);

ReactDOM.render(
	pi,
	document.getElementById('app')
);
```
##Variables in JSX
That means that you can access variables while inside of a JSX expression, even if those variables were declared on the outside.
// Declare a variable:
const name = 'Gerdo';

// Access your variable 
// from inside of a JSX expression:
const greeting = <p>Hello, {name}!</p>;

```
import React from 'react';
import ReactDOM from 'react-dom';

const theBestString = 'tralalalala i am da best';

ReactDOM.render(<h1>{theBestString}</h1>, document.getElementById('app'));

```
//print:tralalalala i am da best
##Variable Attributes in JSX
```
// Use a variable to set the `height` and `width` attributes:

const sideLength = "200px";

const panda = (
  <img 
    src="images/panda.jpg" 
    alt="panda" 
    height={sideLength} 
    width={sideLength} />
);
```
Object properties are also often used to set attributes:
```
const pics = {
  panda: "http://bit.ly/1Tqltv5",
  owl: "http://bit.ly/1XGtkM3",
  owlCat: "http://bit.ly/1Upbczi"
}; 

const panda = (
  <img 
    src={pics.panda} 
    alt="Lazy Panda" />
);

const owl = (
  <img 
    src={pics.owl} 
    alt="Unimpressed Owl" />
);

const owlCat = (
  <img 
    src={pics.owlCat} 
    alt="Ghastly Abomination" />
); 

```
Sample
```
import React from 'react';
import ReactDOM from 'react-dom';

const goose = 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-goose.jpg';

// Declare new variable here:
const gooseImg = <img src={goose} />;

ReactDOM.render(gooseImg, document.getElementById('app'));
```
##Event Listeners in JSX
<img onClick={myFunc} />
An event listener attribute’s name should be something like onClick or onMouseOver: the word on, plus the type of event that you’re listening for. You can see a list of valid event names here.
An event listener attribute’s value should be a function. The above example would only work if myFunc were a valid function that had been defined elsewhere:
```
function myFunc() {
  alert('Make myFunc the pFunc... omg that was horrible i am so sorry');
}
```
Note that in HTML, event listener names are written in all lowercase, such as onclick or onmouseover. In JSX, event listener names are written in camelCase, such as onClick or onMouseOver.
```
import React from 'react';
import ReactDOM from 'react-dom';

function makeDoggy(e) {
  // Call this extremely useful function on an <img>.
  // The <img> will become a picture of a doggy.
  e.target.setAttribute('src', 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg');
  e.target.setAttribute('alt', 'doggy');
}

const kitty = (
	<img 
		src="https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg" 
		alt="kitty" onClick={makeDoggy} />
);

ReactDOM.render(kitty, document.getElementById('app'));
```
##JSX Conditionals: If Statements That Don't Work
```
import React from 'react';
import ReactDOM from 'react-dom';

let message;

if (user.age >= drinkingAge) {
  message = (
    <h1>
      Hey, check out this alcoholic beverage!
    </h1>
  );
} else {
  message = (
    <h1>
      Hey, check out these earrings I got at Claire's!
    </h1>
  );
}

ReactDOM.render(
  message, 
  document.getElementById('app')
);
```
if.js works, because the words if and else are notinjected in between JSX tags. The if statement is on the outside, and no JavaScript injection is necessary.
This is a common way to express conditionals in JSX.
```
import React from 'react';
import ReactDOM from 'react-dom';

function coinToss() {
  // This function will randomly return either 'heads' or 'tails'.
  return Math.random() < 0.5 ? 'heads' : 'tails';
}

const pics = {
  kitty: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg',
  doggy: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg'
};
let img;

// if/else statement begins here:
if (coinToss() === 'heads') {
  img = (
    <img src={pics.kitty} />
  );
} else {
  img = ( 
    <img src={pics.doggy} />
  );
}

ReactDOM.render(img, document.getElementById('app'));
```
##JSX Conditionals: The Ternary Operator
The ternary operator works the same way in React as it does in regular JavaScript. However, it shows up in React surprisingly often.
Recall how it works: you write x ? y : z, where x, y, and z are all JavaScript expressions. When your code is executed, x is evaluated as either “truthy” or “falsy.” If x is truthy, then the entire ternary operator returns y. If x is falsy, then the entire ternary operator returns z. Here’s a nice explanation if you need a refresher.
const headline = (
  <h1>
    { age >= drinkingAge ? 'Buy Drink' : 'Do Teen Stuff' }
  </h1>
);
In the above example, if age is greater than or equal to drinkingAge, then headline will equal <h1>Buy Drink</h1>. Otherwise, headline will equal <h1>Do Teen Stuff</h1>.
```
import React from 'react';
import ReactDOM from 'react-dom';

function coinToss () {
  // Randomly return either 'heads' or 'tails'.
  return Math.random() < 0.5 ? 'heads' : 'tails';
}

const pics = {
  kitty: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg',
  doggy: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg'
};

const img = <img src={pics[coinToss() === 'heads' ? 'kitty' : 'doggy']} />;

ReactDOM.render(
	img, 
	document.getElementById('app')
);
```
Why can I use a ternary operator inside a JSX expression but not an if statement?
Answer
We can use a ternary operator, also known as a conditional operator, inside a JSX expression because it will always evaluate to a value, where as an if/else/else if statement is not only not an expression (it’s a statement and will execute a statement based on the value of an expression), but will also not evaluate to a value.
In other words, we cannot use a statement where a value (or expression) is expected and for this reason, we cannot use statements, including the conditional if/else/else if statements, inside a JSX expression.
 
 
 
##
JSX Conditionals: &&
&& works best in conditionals that will sometimes do an action, but other times do nothing at all.
```
const tasty = (
  <ul>
    <li>Applesauce</li>
    { !baby && <li>Pizza</li> }
    { age > 15 && <li>Brussels Sprouts</li> }
    { age > 20 && <li>Oysters</li> }
    { age > 25 && <li>Grappa</li> }
  </ul>
);
```
Sample
```
import React from 'react';
import ReactDOM from 'react-dom';

// judgmental will be true half the time.
const judgmental = Math.random() < 0.5;

const favoriteFoods = (
  <div>
    <h1>My Favorite Foods</h1>
    <ul>
      <li>Sushi Burrito</li>
      <li>Rhubarb Pie</li>
      {!judgmental && <li>Nacho Cheez Straight Out The Jar</li>}
      <li>Broiled Grapefruit</li>
    </ul>
  </div>
);

ReactDOM.render(
	favoriteFoods, 
	document.getElementById('app')
);
```
##.map in JSX
```
 const strings = ['home','shop', 'me'];
const listItems= string.map(string=><li>{string}</li>);
<ul>{listItems}</ul>
```
In the above example, we start out with an array of strings. We call .map() on this array of strings, and the .map() call returns a new array of <li>s.
On the last line of the example, note that {listItems}will evaluate to an array, because it’s the returned value of .map()! JSX <li>s don’t have to be in an array like this, but they can be.
```
<ul>
  <li>item 1</li>
  <li>item 2</li>
  <li>item 3</li>
</ul>

// This is also fine!

const liArray = [
  <li>item 1</li>, 
  <li>item 2<li>, 
  <li>item 3</li>
];

<ul>{liArray}</ul>
```
Sample
```
import React from 'react';
import ReactDOM from 'react-dom';

const people = ['Rowe', 'Prevost', 'Gare'];

const peopleLis = people.map(person =>
  // expression goes here:
<li>{person}</li>
);

// ReactDOM.render goes here:
// This is fine in JSX, not in an explicit array:
ReactDOM.render(<ul>{peopleLis}</ul>, document.getElementById('app'));

```
//print: Rowe
Prevost
Gare


--Question
Can I use .forEach() to create a list of JSX elements?
Answer
We can use .forEach() to create a list of JSX elements from an array as long as we are using .forEach() from outside a JSX expression as .forEach() does not evaluate to a value like .map()does. That said, .forEach() takes a little more code to do the same thing that .map() can do.
For example:
Using .forEach():
const myArr = ['one', 'two', 'three'];

const myArrMadeFromForEach = []; // we create a new array which will evaluate to a value when we inject it into a JSX expression

myArr.forEach((item, i) => myArrMadeFromForEach.push(<li key={item+i}>{item}</li>)); // we push a JSX element containing a value to our 'myArrMadeFromForEach' because `.forEach()` does not return any value, nor does it mutate the array on which it is called

const myList = (
  <ul>{myArrMadeFromForEach}</ul> // `myArrMadeFromForEach` will evaluate to an array of `<li>` elements
)

ReactDOM.render(myList, document.getElementById('app'));

compared to using .map():
import React from 'react';
import ReactDOM from 'react-dom';

const myArr = ['one', 'two', 'three'];

const myArrCreatedFromMap = myArr.map((item, i) => (<li key={item + i}>{item}</li>)); // `.map()` creates/returns a new array from calling a function on every element in the array it's called on

const myList = (
  <ul>{myArrCreatedFromMap}</ul> // `myArrCreatedFromMap` will evaluate to a list of `<li>` elements
)

ReactDOM.render(myList, document.getElementById('app'));

we can also use .map() inline without setting the return value to a variable:
import React from 'react';
import ReactDOM from 'react-dom';

const myArr = ['one', 'two', 'three'];

const myList = (
  <ul>{myArr.map((item, i) => <li key={item + i}>{item}</li>)}</ul> // `.map()` creates/returns a new array from calling a function on every element in the array it's called on
)

ReactDOM.render(myList, document.getElementById('app'));


##Keys
When you make a list in JSX, sometimes your list will need to include something called keys:

```
<ul>
  <li key="li-01">Example1</li>
  <li key="li-02">Example2</li>
  <li key="li-03">Example3</li>
</ul>
```
Not all lists need to have keys. A list needs keys if either of the following are true:
The list-items have memory from one render to the next. For instance, when a to-do list renders, each item must “remember” whether it was checked off. The items shouldn’t get amnesia when they render.
A list’s order might be shuffled. For instance, a list of search results might be shuffled from one render to the next.
If neither of these conditions are true, then you don’t have to worry about keys. If you aren’t sure then it never hurts to use them!
```
import React from 'react';
import ReactDOM from 'react-dom';

const people = ['Rowe', 'Prevost', 'Gare'];

const peopleLis = people.map((person,i) =>
  // expression goes here:
<li key={'person_'+i}>{person}</li>
);

// ReactDOM.render goes here:
// This is fine in JSX, not in an explicit array:
ReactDOM.render(<ul>{peopleLis}</ul>, document.getElementById('app'));

```
##React.createElemen
You can write React code without using JSX at all!
The majority of React programmers do use JSX
const h1=<h1>hello world</h1>;
Compare to 
const h1=React.createElement(
'h1',
null,
'hello world');
```
const greatestDivEver = <div>i am div</div>;
Compare to 
const greatestDivEver = React.createElement(
	'div',
  null,
  'i am div'
);

```

#New chapter-the first react component
##Hello World, Part II... THE COMPONENT
```
import React from 'react';
import ReactDOM from 'react-dom';

class MyComponentClass extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
};

ReactDOM.render(
  <MyComponentClass />,
  document.getElementById('app')
);
```
Question
In the context of this lesson, can we declare multiple components in a single file?
Answer
Yes, you can declare multiple components within a single file. For example, there can be a file containing the following components,
class Class1 extends React.Component {
  render() { ... }  
};

class Class2 extends React.Component {
  render() { ... }  
};

Choosing to have multiple components in a file or only one component per file can be up to preference. However, keeping classes in separate files can be preferred for the sake of organization.

##Import React
import React from 'react';
##Import ReactDOM
The methods imported from 'react-dom' are meant for interacting with the DOM. You are already familiar with one of them: ReactDOM.render().

import ReactDOM from 'react-dom';
##Create a Component Class
Here’s another fact about components: every component must come from a component class.
A component class is like a factory that creates components. If you have a component class, then you can use that class to produce as many components as you want.
To make a component class, you use a base class from the React library: React.Component.
What is React.Component, and how do you use it to make a component class?
React.Component is a JavaScript class. To create your own component class, you must subclassReact.Component. You can do this by using the syntax class YourComponentNameGoesHere extends React.Component {}.
JavaScript classes and subclassing are a complex topic beyond the scope of this course. If you aren’t comfortable with them, here are some good resources to consult: 1 2 3 4.
Look at the code in app.js. A lot it is still unfamiliar, but you can understand more than you could before!
On line 4, you know that you are declaring a new component class, which is like a factory for building React components. You know that React.Component is a class, which you must subclass in order to create a component class of your own. You also know that React.Component is a property on the object which was returned by import React from 'react' on line 1.
```
import React from 'react';
import ReactDOM from 'react-dom';

class MyComponentClass extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
}

ReactDOM.render(
	<MyComponentClass />, 
	document.getElementById('app')
);

```
##Name a Component Class
Component class variable names must begin with capital letters!MyComponentClass
##Component Class Instructions

Sample as above
n line 1, import React from 'react' creates a JavaScript object. This object contains properties that are needed to make React work, such as React.createElement() and React.Component.
On line 2, import ReactDOM from 'react-dom'creates another JavaScript object. This object contains methods that help React interact with the DOM, such as ReactDOM.render().
On line 4, by subclassing React.Component, you create a new component class. This is not a component! A component class is more like a factory that produces components. When you start making components, each one will come from a component class.
Whenever you create a component class, you need to give that component class a name. That name should be written in UpperCamelCase. In this case, your chosen name is MyComponentClass.
Something that we haven’t talked about yet is the body of your component class: the pair of curly braces after React.Component, and all of the code between those curly braces.
##The Render Function
A render method is a property whose name is render, and whose value is a function. The term “render method” can refer to the entire property, or to just the function part.
class ComponentFactory extends React.Component{
  render(){ }
}
A render method must contain a return statement. Usually, this return statement returns a JSX expression:
class ComponentFactory extends React.component{
  render(){
    return <h1>Hello World</h1>;
  }
}
##Create a Component Instance
```
ReactDOM.render(
	<MyComponentClass />, 
	document.getElementById('app')
);

```
##Render A Component
```
class MyComponentClass extends React.Component
{ // everything in between these curly-braces is instructions for how to build components

  render() {
    return <h1>Hello world</h1>;
  }
}
```

