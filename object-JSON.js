var project = new Object();
project.name = 'Rocking plan';
project.securityLevel = 15;
project.updateDueDate = function () {
  return true;
};
console.log(project['securityLevel']);
//15, either dot notation or [' '] with object as a string


var project = new Object();
project.name = 'Rocking plan';
project.securityLevel = 15;
project.updateDueDate = function () {
  return true;
};
var field = 'securityLevel';
console.log(project[field]);
//15. we use variable and string to specify the property name, by using bracket notation


