console.log(typeof this);
//object

consolde.log(this === window);
//true

var updateSalary = function () {
  console.log(this === window);
};
updateSalary();
//true


var employee = {
  name: 'Jeff',
  updateSalary: function () {
    console.log(this);
  }
};
employee.updateSalary();
//{
//name: "Jeff" ,
//updateSalary:f updateSalary  {}
//}

var employee = {
  name: 'Jeff',
  updateSalary: function () {
    var fn = function () {
      console.log(this);
    }
    fn();
  }
};
employee.updateSalary();
//: [object Window]



var employee = {
  name: 'Jeff',
  updateSalary: function () {
    var fn = function () {
      console.log(this === window);
    }
    fn();
  }
};
employee.updateSalary();
//true

var Address = function (line1) {
  this.line1 = line1
  console.log(this);
}
var addr = new Address('123 rose road');
//Address { line1: "123 rose road" }

var Address = function (line1) {
  this.line1 = line1
}
Address.prototype.updateZipCode = function () {
  console.log(this);
}
var addr = new Address('123 rose road');
addr.updateZipCode();
////Address { line1: "123 rose road" }
