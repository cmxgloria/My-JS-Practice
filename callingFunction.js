var updateZipCode = function () {
  console.log(this);
};
updateZipCode.call({});
//object{}

var updateZipCode = function () {
  console.log(this);
};
updateZipCode.call({ zip: '3000' });
//{zip:'3000'}

var updateZipCode = function (newZip, country) {
  console.log(newZip + ' of ' + country);
};
var zipCode = {
  zip: '313'
};
updateZipCode.call(zipCode, '315', 'US');
// '315 of US'

var updateZipCode = function (newZip, country) {
  console.log(newZip + ' of ' + country);
};
var zipCode = {
  zip: '313'
};
updateZipCode.call(zipCode, ['315', 'US']);
//'315,US of undefined'

var updateZipCode = function (newZip, country) {
  console.log(newZip + ' of ' + country);
};
var zipCode = {
  zip: '313'
};
updateZipCode.apply(zipCode, '315', 'US');
//error: Uncaught TypeError: CreateListFromArrayLike called on non-object

