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
//1+2=3*2=6<20. the second function skip <20; 6+2=8*2=16<20,the second function skip <20;16+2=18*2=36>20, 36+2=38 then run the second function plus 1=39

//solution to print A-Z
//another part of sample
var rest = 'KLMNOPQRSTUVWXYZ'.split("");
for (var i = 0; i < rest.length; i++) {
  (function (i) {
    //define the current function
    window[rest[i]] = function () {
      console.log(rest[i]);
      if (i < (rest.length - 1)) {
        window[rest[i + 1]]();
      }
    };

  })(i);
}
// or use the object= {} , changed to var rest = 'KLMNOPQRSTUVWXYZ'.split(""), obj = {} ;, also the window need to change obj


function foo() {
  console.log(this.bar)
}
var bar = 'bar==1';
var o2 = { bar: 'bar---2', fo: foo };
var o3 = { bar: 'bar--3', fo: foo };
foo();  //'bar1'
o2.fo(); //'bar2'
o3.fo(); //'bar3'
//'bar==1'
//'bar---2'
//'bar--3'

//another sample same method
var o1 = {
  bar: 'bar1',
  foo: function () {
    console.log(this.bar);
  }
};
var o2 = { bar: 'bar2', foo: o1.foo };
var bar = 'bar3';
var foo = o1.foo;
o1.foo();
o2.foo();
foo();
//'bar1'
//'bar2'
//'bar3'

function foo() {
  var bar = 'bar1';
  this.baz = baz;
  this.baz();
}
function baz() {
  console.log(this.bar);
}
var bar = 'bar2';
foo();
//'bar2'

function foo() {
  console.log(this.bar);
}
var bar = 'bar1';
var obj = { bar: 'bar2' };
foo();
foo.call(obj);
//'bar1'
//'bar2'


//hard binding
function foo() {
  console.log(this.bar);
}
var obj = { bar: 'bar1' };
var obj2 = { bar: 'bar2' };
var orig = foo;
foo = function () { orig.call(obj) };//override foo in whole function, force this referrence to the obj the original function
foo();
foo.call(obj2);
//'bar1'
//'bar1'


//another sample
function bind(fn, o) {
  return function () {
    fn.call(o);
  };
}
function foo() {
  console.log(this.bar);
}
var obj = { bar: 'bar1' };
var obj2 = { bar: 'bar2' };
foo = bind(foo, obj);
foo();
foo.call(obj2);
//'bar1'
//'bar1'


//new keyword
function foo() {
  this.baz = "baz";
  console.log(this.bar + " " + baz);
}
var bar = 'bar';
var baz = new foo();
//'undefined undefined'

//change some details
function foo() {
  this.baz = "baz...";
  console.log(this.baz + " " + bar);
}
var bar = 'bar99';
var baz = new foo();
//'baz... bar99'


//summary/ 
//1. what determine which object a function this point to? What is the default?
//new,explicit binding with a call or apply or the bind, Imlipcit with binding with an owning and containing object , default 

//2. how do you borrow a function by implicit assignment of this?
//we mutate an object to put the reference to that function on the object ,we could say the object.methodname

//3.how do you explicitbind this?
//apply.bind



//closure: it is when a function "remember" its lexical scope even when the function is executed outside that lexical scope

function foo() {
  var bar = "bar";
  function baz() {
    console.log(bar);
  };
  bam(baz);
}
function bam(baz) {
  baz();
}
foo();
//bar

//another closure sample
function foo() {
  var bar = 'bar';
  return function () {
    console.log(bar);
  }
}
function bam() {
  foo()();
}
bam();
//bar

function foo() {
  var bar = 'bar';
  setTimeout(function () {
    console.log(bar);
  }, 2000);
}
foo();
//bar

function foo() {
  var bar = 'bar';
  $("#btn").click(function (evt) {
    console.log(bar);
  });
}
foo();


//closure: share scope
function foo() {
  var bar = 0;
  setTimeout(function () {
    console.log(bar++);
  }, 2000);
  setTimeout(function () {
    console.log(bar++);
  }, 4000);
}
foo();
//0
//1

//nested scope
function foo() {
  var bar = 0;
  setTimeout(function () {
    var baz = 5;
    console.log(bar++);
    setTimeout(function () {
      console.log(bar + baz);
    }, 3000);
  }, 2000);
}
foo();
//0
//6

//loop
for (var i = 1; i < 5; i++) {
  setTimeout(function () {
    console.log('i: ' + i);
  },
    i * 3000);
}
//'i: 5'
//'i: 5'
//'i: 5'
//'i: 5'

//if without i*, the output will print at the same time after 3 seconds as below
for (var i = 1; i < 5; i++) {
  setTimeout(function () {
    console.log('i: ' + i);
  }, 3000);
}
//'i: 5'
//'i: 5'
//'i: 5'
//'i: 5'

//how to get scope different for each iteration, put IIFE inside the loop ,each loop can it own i, whole different scope creat for each iterator

for (var i = 1; i < 5; i++) {
  (function (i) {
    setTimeout(function () {
      console.log('i: ' + i);
    }, i * 3000);
  })(i);
}
//'i: 1'
//'i: 2'
//'i: 3'
//'i: 4'

for (let i = 1; i < 5; i++) {
  setTimeout(function () {
    console.log('i: ' + i);
  }, i * 1000)
}
//'i: 1'
//'i: 2'
//'i: 3'
//'i: 4'  ( output print one by one )

for (let i = 1; i < 5; i++) {
  setTimeout(function () {
    console.log('i: ' + i);
  }, 1000)
}
//'i: 1'
//'i: 2'
//'i: 3'
//'i: 4'  ( output print at the same time after 1 second)

var foo = (function () {
  var o = { bar: 'bar1' };
  return { obj: o };
})();
console.log(foo.obj.bar);
//bar1


