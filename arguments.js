var validateValue = function () {
  console.log(arguments);
};
validateValue(1, true, 'string');
//{
//0: 1 ,
//1: true ,
//2: "string"
//}

var validateValue = function () {
  console.log(arguments.length);
};
validateValue(1, true, 'string');
//3

var validateValue = function () {
  console.log(arguments[0]);
};
validateValue(1, true, 'string');
//1

var validateValue = function () {
  arguments[0] = 9;
  console.log(arguments[0]);
};
validateValue(1, true, 'string');
//9

