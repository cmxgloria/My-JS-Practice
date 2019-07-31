var project = anyObject;
project.someFunction();
// How does JavaScript locate /resolve the someFunction?
//project.prototype.someFunction
////project.prototype.prototype.someFunction
//project.prototype.prototype.prototype.someFunction
//etc
// we can use the __proto__, still not saft, just use to learn for now

var project = {
  name: 'Project phone'
};
console.log(project.toString());
//'[object Object]'

console.log(typeof Object.prototype.toString);
//'function'

var project = {
  name: 'Project phone'
};
console.log(project.prototype);
//undefined


var project = {
  name: 'Project phone'
};
console.log(typeof project.__proto__);
//'object'


var project = {
  name: 'Project phone'
};
console.log(project.__proto__ === Object.prototype);
//true


var project = {
  name: 'Project phone'
};
console.log(project.__proto__ === Object);
//false



