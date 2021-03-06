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

console.log(tyoeof.Object);
//function

var Employee = function (name) {
  this.name = name;
};
var newEmployee = new Employee('JJ');
console.log(typeof newEmployee);
//object

var Employee = function (name) {
  this.name = name;
};
var newEmployee = new Employee('JJ');
console.log(newEmployee.name);
//'JJ'

var Employee = function (name, boss) {
  this.name = name;
  this.boss = boss;
};
var newEmployee = new Employee('JJ', 'Gloria');
console.log(newEmployee.boss);
//'Gloria'

var Employee = function (name, boss) {
  this.name = name;
};
var e1 = new Employee('JJ');
var e2 = new Employee('JV')
console.log(e1 === e2);
//false


var Employee = function (name, boss) {
  this.name = name;
};
var e1 = new Employee('JJ');
var e2 = new Employee('JV')
console.log(e1.__proto__ === e2.__proto__);
//true, different object but same prototype

var Employee = function (name, boss) {
  this.name = name;
  this.giveRaise = function () {

  };
};
var e1 = new Employee('JJ');
var e2 = new Employee('JV')
console.log(e1.giveRaise === e2.giveRaise);
//false

var Employee = function (name, boss) {
  this.name = name;
  this.giveRaise = function () {

  };
};
console.log(typeof Employee.prototype);
//object

var Employee = function (name, boss) {
  this.name = name;
  this.giveRaise = function () {

  };
};
console.log(Employee.prototype === Object.prototype);
//false

var Employee = function (name, boss) {
  this.name = name;
};
Employee.prototype.giveRaise = function () {

};
var e1 = new Employee('JJ');
var e2 = new Employee('JV');
console.log(e1.giveRaise === e2.giveRaise);
//true


var Employee = function (name) {
  this.name = name;
  this.salary = 50000;
};
Employee.prototype.giveRaise = function (raise) {
  this.salary += raise;
};
var e1 = new Employee('JJ');
var e2 = new Employee('JV');
e1.giveRaise(8000);
console.log(e1.salary);
console.log(e2.salary);
//58000
//50000







