var ratings = [];
ratings.push(5);
ratings.push(2, 4);
ratings.pop();
console.log(ratings);
//[5,2]

var ratings = [];
ratings.push(5);
ratings.push(2, 4);
var firstRating = ratings.shift();
console.log(firstRating);
console.log(rating.length);
//5 , shift to the left, the first value
//2


var ratings = [];
ratings.push(5);
ratings.push(2, 4);
var newRating = ratings.unshift(3);
console.log(ratings[0]);
console.log(newRating);
//3, unshift the value to be first element
//4

var rating = [1, 2, 3];
var newRating = rating.concat([4, 5, 6], 7, 8);
console.log(newRating);
//[1 ,2 ,3 ,4 ,5 ,6 ,7 ,8], if newRating.length that will be 8

var raitng = [1, 2, 3, 4, 5];
var newRating = rating.slice(2);
console.log(newRating);
//[3,4,5],  in front of index[2] not taking, index[2] including and everything after that
var raitng = [1, 2, 3, 4, 5];
var newRating = raitng.slice(1, 3);
console.log(newRating);
//[2,3], slice 1 not take those in front of index[1], slice 3 take everything before index[3] but not including index[3] means the value 4


var rating = [1, 2, 3, 4, 5];
var newRating = rating.slice(1, 3);
console.log(rating.toString());
//'1,2,3,4,5'



var rating = [1, 2, 3, 8, 4, 5];
var newRating = rating.slice(-3);
console.log(newRating);
//[8,4,5], take the last 3 entries

var rating = [1, 2, 3, 8, 4, 5];
rating.splice(1, 4)
console.log(rating);
//[1,5]

var rating = [1, 3, 2, 5, 6, 8];
var newRating = rating.splice(0, 3);
console.log(newRating.toString());
//'1,3,2'

var rating = [1, 2, 3, 4];
rating.splice(2, 0, 99);
console.log(rating.toString());
//'1,2,99,3,4' ******

var rating = [1, 2, 3, 4];
rating.splice(2, 0, 99, 100, 111);
console.log(rating.toString());
//'1,2,99,100,111,3,4'

var rating = [1, 2, 3, 4];
rating.splice(2, 1, 99, 100, 111);
console.log(rating.toString());
//'1,2,99,100,111,4'

var rating = [1, 4, 5, 2, 3, 10];
rating.sort();
console.log(rating.toString());
//'1,10,2,3,4,5' , not sort in order, let fix next sample

var rating = [1, 4, 5, 2, 3, 10];
rating.sort(function (value1, value2) {
  return value1 - value2;
});
console.log(rating.toString());
//'1,2,3,4,5,10'

var rating = [1, 3, 4, 6,];
console.log(rating.indexOf(3));
//1

var rating = [1, 3, 4, 6,];
console.log(rating.indexOf('3'));
//-1, string is not number, if not number output -1


var rating = [1, 3, 4, 6, 1];
console.log(rating.lastIndexOf(1));
//4




