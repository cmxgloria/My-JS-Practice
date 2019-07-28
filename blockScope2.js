'use strict'
console.log(insideCatch);
try {
  throw 123
}
catch (e) {
  var insideCatch = 'insideCatch';
  consolelog(e);
}
//undefined
//error: Uncaught ReferenceError: consolelog is not defined