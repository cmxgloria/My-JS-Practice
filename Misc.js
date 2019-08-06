try {
  throw new Error('Customer Error');
}
catch (e) {
  console.log(e.name + ' - ' + e.message);
}
//'Error - Customer Error'

try {
  throw new Error('Customer Error');
}
catch (e) {
  console.log(e.name + ' - ' + e.message);
}
finally {
  console.log('Finally Done');
}
//'Error - Customer Error'
//'Finally Done'

try {
  var i = 42;
}
catch (e) {
  console.log(e.name + ' - ' + e.message);
}
finally {
  console.log('Finally Done');
}
// 'Finally Done'

try {
  throw new RangeError('Range Error');
}
catch (e) {
  if (e instanceof RangeError)
    console.log(e.name);
}
//RangeError

