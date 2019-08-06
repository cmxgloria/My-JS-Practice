var value = 'My String';
console.log(value.charAt(3));
//S

var value = 'My String';
console.log(value.concat(' Lives'));
//'My String Lives'

var value = 'My String';
console.log(value.includes(' '));
//true


var value = 'My String';
console.log(value.endsWith('ing'));
//true


var value = 'My String';
console.log(value.indexOf('M'));
//0, if you couldnt find it, it will output -1, such as indexOf('z'), it turns -1


var value = 'Some String';
console.log(value.lastIndexOf('S'));
//5

var value = 'Some String';
console.log(value.slice(5));
//String


var value = 'Some String';
console.log(value.slice(5, 8));
//Str, first argument include , not the second argument

var value = 'Some String';
console.log(value.slice(-4));
//ring, last 4 charactors

var value = 'Some String';
console.log(value.split(' '));
//(2) ["Some" ,"String"]

var value = 'Some String';
console.log(value.substr(0, 4));
//Some, start with index 0, the first 4 charactors

var value = 'Some String';
console.log(value.substring(5, 6));
//S,start with the first argument include, end with last argument not included



