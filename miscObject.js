'use strict'
var project = {
  name: 'earth reserch',
  dueDate: '4/3/2019'
}
console.log(project.hasOwnProperty('name'));
//true

'use strict'
var project = {
  name: 'earth reserch',
  dueDate: '4/3/2019'
}
console.log(project.hasOwnProperty('toString'));
//false

'use strict'
var project = {
  name: 'earth reserch',
  dueDate: '4/3/2019'
}
console.log(project.__proto__.hasOwnProperty('toString'));
//true

'use strict'
var project = {
  name: 'earth reserch',
  dueDate: '4/3/2019'
}
console.log(Object.prototype.isPrototypeOf(project));
//true


var project = {
  securityLevel: 2
}
var securityProject = Object.create(project);
console.log(project.isPrototypeOf(securityProject));
//true


var project = {
  securityLevel: 2
}
var securityProject = Object.create(project);
console.log(Object.prototype.isPrototypeOf(securityProject));
//true

var project = {
  securityLevel: 2
}
var securityProject = Object.create(project);
console.log(project.__proto__.isPrototypeOf(securityProject));
//true


var project = {
  securityLevel: 2
}
var securityProject = Object.create(project);
console.log('securityLevel' in securityProject);
//true

var project = {
  securityLevel: 2
}
var securityProject = Object.create(project);
console.log('toString' in securityProject);
//true

var project = {
  securityLevel: 2
}
var securityProject = Object.create(project);
console.log('securityLevel' in Object.prototype);
  //false

