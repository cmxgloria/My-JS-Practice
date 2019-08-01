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

'use strict'
var task = {};
Object.defineProperty(task, 'text', {
  value: 'Get this job done',
  enumerable: true
});
for (var f in task)
  console.log(f);
//'text'

'use strict'
var task = {};
Object.defineProperty(task, 'text', {
  value: 'Get this job done',
  // enumerable: true
});
for (var f in task)
  console.log(f);
// nothing show in the screen


'use strict'
var task = {};
Object.defineProperty(task, 'text', {
  value: 'Get this job done',
  configurable: false
});
Object.defineProperty(task, 'text', {
  value: 'Done!'
});
console.log(task.text);
//error: Uncaught TypeError: Cannot redefine property: text, when set configurable false, it can't alter

'use strict'
var task = {};
Object.defineProperty(task, 'text', {
  value: 'Get this job done',
  configurable: true
});
Object.defineProperty(task, 'text', {
  value: 'Done!'
});
console.log(task.text);
//Done!

'use strict';
var task = {
  _dueDate: '1/2/2019'
};
Object.defineProperty(task, 'dueDate', {
  get: function () {
    return this._dueDate;
  }
});
console.log(task.dueDate);
//'1/2/2019'

'use strict';
var task = {
  _dueDate: '1/2/2019'
};
Object.defineProperty(task, 'dueDate', {
  get: function () {
    return this._dueDate;
  },
  set: function (newValue) {
    return this._dueDate = newValue;
  }
});
task.dueDate = '1/3/2019';
console.log(task.dueDate);
//'1/3/2019'

'use strict';
var task = {};
Object.defineProperties(task, {
  'text': {
    value: 'New Task'
  },
  'dueDate': {
    value: '3/4/2018'
  }
});
console.log(task.text + " Due: " + task.dueDate);
//'New Task Due: 3/4/2018'

