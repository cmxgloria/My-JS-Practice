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



