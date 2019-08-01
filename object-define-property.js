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

'use strict'
var task = {};
Object.defineProperty(task, 'text', {
  value: 'Get this job done',
  // writable: true
});
task.text = task.text + ' ... now';
console.log(task.text);
//error: Uncaught TypeError: Cannot assign to read only property 'text' of object '#<Object>'

//'use strict'
var task = {};
Object.defineProperty(task, 'text', {
  value: 'Get this job done',
  enumerable: true
});
for (var f in task)
  console.log(f);
//'text'

