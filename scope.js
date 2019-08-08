//scope and compiler
var foo = 'bar';
function bar() {
  var foo = 'baz';
}
function baz(foo) {
  foo = 'bam';
  bam = 'yay';
}
console.log(foo);
console.log(baz);


var foo = 'bar';
function bar() {
  var foo = 'baz';

  function baz(foo) {
    foo = 'bam';
    bam = 'yay';
  }
  baz();
}
bar();
foo;
bam;
baz(); );
}