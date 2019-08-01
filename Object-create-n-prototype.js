var project = {
  securityLevel: 2
};
var securityProject = Object.create(project);
console.log(securityProject.securityLevel);
//2

var project = {
  securityLevel: 2
};
var securityProject = Object.create(project);
console.log(typeof securityProject.toString);
//'function'


var project = {
  securityLevel: 2
};
var securityProject = Object.create(project);
console.log(securityProject.__proto__.__proto__ === Object.prototype);
//true


