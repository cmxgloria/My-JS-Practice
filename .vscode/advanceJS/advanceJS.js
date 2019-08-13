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