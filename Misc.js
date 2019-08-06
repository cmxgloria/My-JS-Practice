try {
  throw new Error('Customer Error');
}
catch (e) {
  console.log(e.name + ' - ' + e.message);
}
//'Error - Customer Error'

try {
  throw new Error('Customer Error');
}
catch (e) {
  console.log(e.name + ' - ' + e.message);
}
finally {
  console.log('Finally Done');
}
//'Error - Customer Error'
//'Finally Done'

try {
  var i = 42;
}
catch (e) {
  console.log(e.name + ' - ' + e.message);
}
finally {
  console.log('Finally Done');
}
// 'Finally Done'

try {
  throw new RangeError('Range Error');
}
catch (e) {
  if (e instanceof RangeError)
    console.log(e.name);
}
//RangeError

var actNow = function () {
  'use strict'
  newVar = 9;
};
actNow();
//error: Uncaught ReferenceError: newVar is not defined

var actNow = function () {
  'use strict'
  newVar = 9;
  delete newVar;
};
actNow();
//error: unknown: Deleting local variable in strict mode (4:0) 2 | 'use strict' 3 | newVar = 9 ; > 4 | delete newVar; | ^ 5 | }; 6 | actNow();

var actNow = function () {
  var fn = function (a, a) {
  };
};
actNow();
//(no error to throw)

var actNow = function () {
  'use strict'
  var fn = function (a, a) {
  };
};
actNow();
//error: unknown: Argument name clash (3:20) 1 | var actNow = function(){ 2 | // 'use strict' > 3 | var fn = function(a,a){ | ^ 4 | }; 5 | }; 6 | actNow();


//JSLint and JSHint
var MyClass = function () {
  'use strict';
  this.id = 9;
};
var c = new MyClass();
console.log(c.id);
//9 , but if in the JSLint and JSHint, it will output (unexpect this and undclared console)


//JS module option(AMD, CommonJS, ES6 and SystemJS)

