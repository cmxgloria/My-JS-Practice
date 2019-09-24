//find out even number
const findEvenNum = (arr) => {
  const evenNum = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenNum.push(arr[i]);
    }
  }
  return evenNum;
}
const testArr = [1, 4, 6, 8, 7];
console.log(findEvenNum(testArr));

//setTimeout sample
console.log('a');
let timmy = setTimeout(function () {
  console.log('b');
}, 1);
let roxs = setTimeout(function () {
  console.log('c');
}, 10);
let mat = setTimeout(function () {
  console.log('d');
}, 0);
console.log('e');

//async function
let num = 1;
async function increment() {
  num += await 2;
  console.log(num);
}
increment();
num += 4;
console.log(num);
//5
//3

//scope
var variableInGlobalScope = 'I am global';
function functionWithLocalScope() {
  var variableInLocalScope = 'I am local';
  console.log(variableInGlobalScope);
  console.log(variableInLocalScope);
}
console.log(variableInGlobalScope);
console.log(variableInLocalScope);
//'I am global'
//error: Uncaught ReferenceError: variableInLocalScope is not defined


//hositing
console.log(x);
var x;
//undefined
hoistingFunctionDelcaration(); // true
function hoistingFunctionDelcaration() {
  return true;
}

unhoistingFunctionExpression(); //Error
var unhoistingFunctionExpression = function () {
  return true;
}


//closure
function sayHelloCreator(name) {
  var greeting = 'Hello';
  function sayHelloFunction() {
    console.log(greeting + ' ' + name);
  }
  return sayHelloFunction;
}
var sayHelloToJohn = sayHelloCreator('John');
var sayHelloToSarah = sayHelloCreator('Sarah');
sayHelloToJohn();
sayHelloToSarah();
//'Hello John'
//'Hello Sarah'


var someObject = {
  myProperty: 'Foo',

  myMethod: function (prefix, postfix) {

    alert(prefix + this.myProperty + postfix);
  }
};
someObject.myMethod('<', '>'); // alerts '<Foo>'
var someOtherObject = {

  myProperty: 'Bar'

};
someObject.myMethod.call(someOtherObject, '<', '>'); // alerts '<Bar>'

someObject.myMethod.apply(someOtherObject, ['<', '>']); // alerts '<Bar>'


//unshift
var name = ["john"];
name.unshift("charlie");
name.unshift("joseph", "Jane");
console.log(name);
//[" joseph "," Jane ", " charlie ", " john "]

//unescape and escape
<script>
  document.write(escape("Hello? How are you!"));
</script>
  //Hello%3F%20How%20are%20you%21

  <script>
    document.write(unescape("Hello%3F%20How%20are%20you%21"));
</script>
//Hello? How are you!

//typeof
function func(x) {
  console.log(typeof x, arguments.length);
}
func(); //==> "undefined", 0
func(7); //==> "number", 7
func("1", "2", "3"); //==> "string", 3


//How would you empty the array below? (have 4 methods to deal with)
Var emptyArray = ['array’, ‘is’, ‘full’];
emptyArray.length = 0;


  emptyArray.splice(0, emptyArray.length);


while (emptyArray.length) {
  emptyArray.pop();
}


emptyArray = []

  //JS questions
  //what is your most important tools for you and why?-It depends on the application(give examples of different too suit the application)
  //what is your favourite feature in Node and why?--LTS support(async await, generators ES 6 support)
  //what is your favourite feature in css and why?--CSS grid and flexbox
  //what is your favourite feature in Javascript and why?--Object.freeze,fetch,guading(async/await,generator,ES6 support,map/filter/reduce)
  //what is the most difficult part of a frontend project and why?--To keep up the test coverage, but on the right tools, keep animation at 60 fps, avoid tech debt(make everything consistent in every browser)
  //how would you fix a slow browser?--use the browser profiler to investigate, reduce the number of http call,use vanilla javascript(ship less code and improve the load time,reduce asset weight)


  //Js samples

  (function () {
    var a = b = 3;
  })();

console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));
//a defined? false
//b defined ? true

var myObject = {
  foo: "bar",
  func: function () {
    var self = this;
    console.log("outer func:  this.foo = " + this.foo);
    console.log("outer func:  self.foo = " + self.foo);
    (function () {
      console.log("inner func:  this.foo = " + this.foo);
      console.log("inner func:  self.foo = " + self.foo);
    }());
  }
};
myObject.func();
//outer func:  this.foo = bar
//outer func:  self.foo = bar
//inner func:  this.foo = undefined
//inner func:  self.foo = bar

function foo1() {
  return {
    bar: "hello"
  };
}

function foo2() {
  return
  {
    bar: "hello"
  };
}
//foo1 returns:
//Object { bar: "hello" }
//foo2 returns:
//undefined 

(function () {
  console.log(1);
  setTimeout(function () { console.log(2) }, 1000);
  setTimeout(function () { console.log(3) }, 0);
  console.log(4);
})();
//