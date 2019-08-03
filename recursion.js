var onChart = {
  name: 'Miachael', subodinates: [
    {
      name: 'Kevin', subodinates: [
        {
          name: 'Andy', subodinates: []
        },
        {
          name: 'Eve', subodinates: []
        }
      ]
    }
  ]
};
var fn = function (topemployee) {
  console.log(topemployee.name);
  for (var i = 0; i < topemployee.subodinates.length; i++)
    fn(topemployee.subodinates[i]);
};
fn(onChart);
//'Miachael'
//'Kevin'
//'Andy'
//'Eve'  



var onChart = {
  name: 'Miachael', subodinates: [
    {
      name: 'Kevin', subodinates: [
        {
          name: 'Andy', subodinates: []
        },
        {
          name: 'Eve', subodinates: []
        }
      ]
    }
  ]
};
var fn = function (topemployee) {
  console.log(topemployee.name);
  for (var i = 0; i < topemployee.subodinates.length; i++)
    fn(topemployee.subodinates[i]);
};
// fn(onChart);
var fn2 = fn;
fn = null;
fn2(onChart);
//'Miachael'
//error: Uncaught TypeError: _fn is not a function


var onChart = {
  name: 'Miachael', subodinates: [
    {
      name: 'Kevin', subodinates: [
        {
          name: 'Andy', subodinates: []
        },
        {
          name: 'Eve', subodinates: []
        }
      ]
    }
  ]
};
var fn = function showAllEmployee(topemployee) {
  console.log(topemployee.name);
  for (var i = 0; i < topemployee.subodinates.length; i++)
    showAllEmployee((topemployee.subodinates[i]));
};
var fn2 = fn;
fn = null;
fn2(onChart);
//'Miachael'
//'Kevin'
//'Andy'
//'Eve' 

