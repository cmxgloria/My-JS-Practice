var task = {};
Object.defineProperty(task, 'text', {
  value: 'Get this job done'
});
console.log(task.text);
//'Get this job done'

'use strict'
var task = {};
Object.defineProperty(task, 'text', {
  value: 'Get this job done',
  writable: true
});
task.text = task.text + ' ... now';
console.log(task.text);
//'Get this job done ... now'

