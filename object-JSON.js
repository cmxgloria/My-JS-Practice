var project = new Object();
project.name = 'Rocking plan';
project.securityLevel = 15;
project.updateDueDate = function () {
  return true;
};
console.log(project['securityLevel']);
//15, either dot notation or [' '] with string inside