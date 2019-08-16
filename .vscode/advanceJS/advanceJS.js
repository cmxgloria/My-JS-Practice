var foo = function bar() {
  var foo = 'baz';
  function baz(foo) {
    foo = bar;
    foo;   //function
  }
  baz();
};
foo();
bar();//error!


//scope lexical

function foo() {
  var bar = 'bar';
  function baz() {
    console.log(bar);//lexical
  }
  baz();
}
foo();

//cheating lexical scope
var bar = 'bar';
function foo(str) {
  eval(str); //cheating
  console.log(bar); //42
}
foo("var bar = 42;");

//another sample

var obj = {
  a: 2,
  b: 3,
  c: 4
};
obj.a = obj.b + obj.c;
obj.c = obj.b - obj.a;
with (obj) {
  a = b + c;
  d = b - a;
  d = 3;//?
}
obj.d;//undefine
d;//oops


//function scope
var foo = 'foo';
(function foo() {
  var foo = 'foo2';
  console.log(foo);
})();
console.log(foo);


//IIFE pattern
var foo = 'foo2';
(function (bar) {
  var foo = bar;
  console.log(foo);//'foo2'
})(foo);
console.log(foo);//'foo2'

//dynamic scope
function foo() {
  console.log(bar);
}
function baz() {
  var bar = 'bar';
  foo();
}
baz();
//error: Uncaught ReferenceError: bar is not defined

//quiz
//What type of scoping rules does JavaScript have?--lexical scoping
//Exception?--Eval and the with keyword to cheat the exception is lexical

//What are the different ways you can creat a new scope?--Function,Try catch(Catch blocks) and Curly Braces with let keyword
//What is the different between undefine and undeclared?--Undefined is declare variable, currently have a value, but it's an empty placeholders


//hoisting
var a = b();
var c = d();
a;
c;
function b() {
  return c;
}
var d = function () {
  return b();
};
//error: Uncaught TypeError: d is not a function

function b() {
  return c;
}
var a;
var c;
var d;
a = b();
c = d();
a;
c;
d = function () {
  return b();
};
//error: Uncaught TypeError: d is not a function

foo();
var foo = 2;
function foo() {
  console.log('bar');
}
function foo() {
  console.log('foo');
}
//error: unknown: Identifier 'foo' has already been declared (3:9) 1 | foo(); 2 | var foo = 2; > 3 | function foo(){ | ^ 4 | console.log('bar'); 5 | } 6 | function foo()


//hoisting recursion
a(1);  //39
function a(foo) {
  if (a > 20) return foo;
  return b(foo + 2);
}
function b(foo) {
  return c(foo) + 1;
}
function c(foo) {
  return a(foo * 2);
}