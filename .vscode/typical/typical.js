//find out even number
const findEvenNum = (arr) => {
  const evenNum = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenNum.push(arr[i]);
    }
  }
  return evenNum;
}
const testArr = [1, 4, 6, 8, 7];
console.log(findEvenNum(testArr));

//setTimeout sample
console.log('a');
let timmy = setTimeout(function () {
  console.log('b');
}, 1);
let roxs = setTimeout(function () {
  console.log('c');
}, 10);
let mat = setTimeout(function () {
  console.log('d');
}, 0);
console.log('e');

//async function
let num = 1;
async function increment() {
  num += await 2;
  console.log(num);
}
increment();
num += 4;
console.log(num);
//5
//3
