(function () {
  console.log('Excuted!');
})();
//'Excuted!'

(function () {
  console.log('Excuted!');
}());
//'Excuted!'



(function () {
  var employee = 'Jill';
})();
console.log(employee);
//error: Uncaught ReferenceError: employee is not defined, because the employee in the scope function, not in global function

var app = {};
(function (ns) {
  ns.name = 'None';
})(app);
console.log(app.name);
//None

var app = {};
var jQuery = {};
(function (ns, $) {
  ns.name = 'None';
  console.log($ === jQuery);
})(app, jQuery);
//true

var app = {};
var jQuery = {};
(function (ns, $, undefined) {
  ns.name = 'None';
  console.log(undefined);
})(app, jQuery);
// undefined

+function () {
  var employee = 'Jill';
  console.log('Excuted!');
}();
console.log(employee);
//'Excuted!'
//error: Uncaught ReferenceError: employee is not defined  , use the the unary + operator instead, same as above
//the employee is not defined, employee is in the scope function, not in the global function, so output is error


