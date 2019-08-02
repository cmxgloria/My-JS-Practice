//function expressions, constructor function, 'this' keyword, calling function(call and apply),closure,IIFE's
var hireEmployee = function (name) {

};
console.log(typeof hireEmployee);
//function

var hireEmployee = function (name) {
  throw ('error');
};
hireEmployee('JJ');
//error: Uncaught error


