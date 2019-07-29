var obj1 = {
  name: 'Trigger'
};
var obj2 = {
  name: 'Trigger'
};
if (obj1 == obj2)
  console.log('true');
else
  console.log('false');
//false, each object has individual memory, it returns to false even if they have the same object value


var obj = {
  name: 'Trigger'
};
var obj2 = obj;
if (obj == obj2)
  console.log('true');
else
  console.log('false');
//true


if (null == 0)
  console.log('true');
else
  console.log('false');
//false, JS comparison, null cant compare with anything, so false

