var total = 300 - undefined;
console.log(total);
//NaN

var total = 300 - null;
console.log(total);
//300

var obj = {
  valueOf: function () {
    return 100;
  }
};
var total = 300 - obj;
console.log(total);
//200

