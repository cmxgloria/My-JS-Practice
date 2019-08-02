var salaryUpdater = function (salary) {
  var currentSalary = salary;
  var generator = function () {
    currentSalary *= 2;
    return currentSalary;
  };
  return generator;
};
var updateFn = salaryUpdater(55000);
console.log(updateFn());
//110000

var salaryUpdater = function (salary) {
  var currentSalary = salary;
  var generator = function () {
    currentSalary += 1000;
    return currentSalary;
  };
  return generator;
};
var updateFn = salaryUpdater(50000);
updateFn();
console.log(updateFn());
//52000, it call the updateFn twice

