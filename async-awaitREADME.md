#ASYNC AWAIT
Introduction
The async...await syntax allows us to write asynchronous code that reads similarly to traditional synchronous, imperative programs.
The async...await syntax is syntactic sugar— it doesn’t introduce new functionality into the language, but rather introduces a new syntax for using promises and generators. Both of these were already built in to the language. Despite this, async...await powerfully improves the readability and scalability of our code. 
```
const fs = require('fs');
const promisifiedReadfile = require('./promisifiedReadfile');
      
// Here we use fs.readfile() and callback functions:
fs.readFile('./file.txt', 'utf-8', (err, data) => {
  if (err) throw err;
  let firstSentence = data;
  fs.readFile('./file2.txt',  'utf-8', (err, data) => {
    if (err) throw err;
    let secondSentence = data;
    console.log(firstSentence, secondSentence)
  });
});

// Here we use native promises with our "promisified" version of readfile:
let firstSentence
promisifiedReadfile('./file.txt', 'utf-8')
  .then((data) => {
    firstSentence = data;
    return promisifiedReadfile('./file2.txt', 'utf-8')
  })
  .then((data) => {
    let secondSentence = data;
    console.log(firstSentence, secondSentence)
  })
  .catch((err) => {console.log(err)});

// Here we use promisifiedReadfile() again but instead of using the native promise .then() syntax, we declare and invoke an async/await function:
async function readFiles() {
  let firstSentence = await promisifiedReadfile('./file.txt', 'utf-8')
  let secondSentence = await promisifiedReadfile('./file2.txt', 'utf-8')
  console.log(firstSentence, secondSentence)
}
readFiles()

```
##The async Keyword

The async keyword is used to write functions that handle asynchronous actions. We wrap our asynchronous logic inside a function prepended with the async keyword. Then, we invoke that function.
```
async function myFunc(){
  //Function body here
};
myFunc();
 
```
```
const myFunc= async()=>{
  //Function body here
};
myFunc();
 
```
async functions always return a promise. This means we can use traditional promise syntax, like .then()and .catch with our async functions. An asyncfunction will return in one of three ways:
If there’s nothing returned from the function, it will return a promise with a resolved value of undefined.
If there’s a non-promise value returned from the function, it will return a promise resolved to that value.
If a promise is returned from the function, it will simply return that promise
```
async function fivePromise(){
  return 5;
}
fivePromise()
.then(resolvedValue=>{
  console.log(resolvedValue);
})//print 5
```
Another sample
```
function withConstructor(num){
  return new Promise((resolve, reject) => {
    if (num === 0){
      resolve('zero');
    } else {
      resolve('not zero');
    }
  })
}
 
withConstructor(0)
  .then((resolveValue) => {
  console.log(` withConstructor(0) returned a promise which resolved to: ${resolveValue}.`);
})
 
// Write your code below:
async function withAsync(num){
  if (num === 0){
      return 'zero';
    } else {
      return 'not zero';
    }
}
 
withAsync(100)
  .then((resolveValue) => {
  console.log(` withAsync(100) returned a promise which resolved to: ${resolveValue}.`);
})
 
```
//Write an async function, withAsync() which reproduces the functionality of withConstructor(). Though your function will return a promise, it should not construct the promise using the new keyword. Instead, it should rely on the fact that an async function automatically returns a promise.

##The await Operator
The await keyword can only be used inside an async function. await is an operator: it returns the resolved value of a promise. Since promises resolve in an indeterminate amount of time, await halts, or pauses, the execution of our async function until a given promise is resolved.
```
async function asyncFuncExample(){
  let resolvedValue = await myPromise();
  console.log(resolvedValue);
}
 
asyncFuncExample(); // Prints: I am resolved now!
```
Within our async function, asyncFuncExample(), we use await to halt our execution until myPromise() is resolved and assign its resolved value to the variable resolvedValue. Then we log resolvedValue to the console. We’re able to handle the logic for a promise in a way that reads like synchronous code.

//f there’s nothing returned from the function, it will return a promise with a resolved value of undefined.
If there’s a non-promise value returned from the function, it will return a promise resolved to that value.
If a promise is returned from the function, it will simply return that promise

```const brainstormDinner = require('./library.js')
 
 
// Native promise version:
function nativePromiseDinner() {
  brainstormDinner().then((meal) => {
	  console.log(`I'm going to make ${meal} for dinner.`);
  })
}
 
 
// async/await version:
async function announceDinner() {
  // Write your code below:
  let meal = await brainstormDinner();
  console.log(`I'm going to make ${meal} for dinner.`);
}
 
announceDinner()
```
```
//library.js
/*
this is the brainstormDinner function. It's a little silly. It returns a promise that uses a series of setTimeout() functions to simulate a time-consuming asynchronous action. It's a good example of "callback hell" or "the pyramid of doom," two ways people describe how confusing a bunch of nested callback functions can become.
*/

const brainstormDinner = () => {
  return new Promise((resolve, reject) => {
  console.log(`I have to decide what's for dinner...`)
  setTimeout(() => {
    console.log('Should I make salad...?')
    setTimeout(() => {
      console.log('Should I make ramen...?')
      setTimeout(() => {
        console.log('Should I make eggs...?')
        setTimeout(() => {
          console.log('Should I make chicken...?')
          resolve('beans')
        }, 1000)
      }, 1000)
    }, 1000)
  }, 1000)
})
}

module.exports = brainstormDinner

```
##Writing async Functions
We’re going to explore this using the following function, which returns a promise that resolves to 'Yay, I resolved!' after a 1 second delay:
```
let myPromise=()=>{
  return new Promise((resolve, reject)=>{
    setTimeOut(()=>{
      resolve('Yay, I resolved!')
    },1000);
  });
}
 
```
Now we’ll write two async functions which invoke myPromise():
```
async function noAwait(){
  let value = myPromise();
  console.log(value);
}
async function yesAwait(){
  let value= await myPromise();
  console.log(value);
}
noAwait();// prints: Promise{<pending>}
yesAwait();//prints: Yay, I resolved!
```
In the first async function, noAwait(), we left off the await keyword before myPromise(). In the second, yesAwait(), we included it. The noAwait() function logs Promise { <pending> } to the console. Without the await keyword, the function execution wasn’t paused. The console.log() on the following line was executed before the promise had resolved.
Remember that the await operator returns the resolved value of a promise. When used properly in yesAwait(), the variable value was assigned the resolved value of the myPromise() promise, whereas in noAwait(), value was assigned the promise object itself.
	
	
library.js
```
/*
This is the shopForBeans function. It uses a setTimeout() function to simulate a time-consuming asynchronous action. The function returns a promise with a resolved value of a string representing a type of bean. It settles on a random beanType from the beanTypes array using Math.random().
*/
 
const shopForBeans = () => {
  return new Promise((resolve, reject) => {
	const beanTypes = ['kidney', 'fava', 'pinto', 'black', 'garbanzo'];
  setTimeout(()=>{
    let randomIndex = Math.floor(Math.random() * 5)
    let beanType = beanTypes[randomIndex];
    console.log(`2. I bought ${beanType} beans because they were on sale.`)
   resolve(beanType);
  }, 1000)
})
}
  
module.exports = shopForBeans
```
App.js
```
const shopForBeans = require('./library.js');
 
async function getBeans() {
  console.log(`1. Heading to the store to buy beans...`);
  let value = await shopForBeans();
  console.log(`3. Great! I'm making ${value} beans for dinner tonight!`);
}
 
getBeans();
```
 
##Handling Dependent Promises
```
function nativePromiseVersion() {
    returnsFirstPromise()
    .then((firstValue) => {
        console.log(firstValue);
        return returnsSecondPromise(firstValue);
    })
   .then((secondValue) => {
        console.log(secondValue);
    });
}
```
Within our function we use two functions which return promises: returnsFirstPromise() and returnsSecondPromise().
We invoke returnsFirstPromise() and ensure that the first promise resolved by using .then().
In the callback of our first .then(), we log the resolved value of the first promise, firstValue, and then return returnsSecondPromise(firstValue).
We use another .then() to print the second promise’s resolved value to the console.
Here’s how we’d write an async function to accomplish the same thing:
```
async function asyncAwaitVersion() {
 let firstValue = await returnsFirstPromise();
 console.log(firstValue);
 let secondValue = await returnsSecondPromise(firstValue);
 console.log(secondValue);
}
```
Two same meaning sample(library.js&app.js)
```
/*
This is the shopForBeans function from the last exercise
*/
 
const shopForBeans = () => {
  return new Promise((resolve, reject) => {
	const beanTypes = ['kidney', 'fava', 'pinto', 'black', 'garbanzo'];
  setTimeout(()=>{
    let randomIndex = Math.floor(Math.random() * 5)
    let beanType = beanTypes[randomIndex];
    console.log(`I bought ${beanType} beans because they were on sale.`)
   resolve(beanType);
  }, 1000)
})
}
 
let soakTheBeans = (beanType) => {
   return new Promise((resolve, reject) => {
     console.log('Time to soak the beans.')
    setTimeout(()=>{
      console.log(`... The ${beanType} beans are softened.`)
      resolve(true)
      }, 1000)
  })
}
 
let cookTheBeans = (isSoftened) => {
  return new Promise((resolve, reject) => {
    console.log('Time to cook the beans.')
    setTimeout(()=>{
      if (isSoftened) {
        console.log('... The beans are cooked!') 
        resolve('\n\nDinner is served!')
      }
    }, 1000)
  })
}
 
  
module.exports = {shopForBeans, soakTheBeans, cookTheBeans} 
```
```
const {shopForBeans, soakTheBeans, cookTheBeans} = require('./library.js');
 
// Write your code below:
async function makeBeans() {
  let type = await shopForBeans();
  let isSoft = await soakTheBeans(type);
  let dinner = await cookTheBeans(isSoft);
  console.log(dinner);
}
 
makeBeans();
```
##Handling Errors
With async...await, we use try...catchstatements for error handling. By using this syntax, not only are we able to handle errors in the same way we do with synchronous code, but we can also catch both synchronous and asynchronous errors. This makes for easier debugging!

```
async function usingTryCatch() {
 try {
   let resolveValue = await asyncFunction('thing that will fail');
   let secondValue = await secondAsyncFunction(resolveValue);
 } catch (err) {
   // Catches any errors in the try block
   console.log(err);
 }
}
 
usingTryCatch();
```
Remember, since async functions return promises we can still use native promise’s .catch() with an asyncfunction
```
async function usingPromiseCatch() {
   let resolveValue = await asyncFunction('thing that will fail');
}
 
let rejectedPromise = usingPromiseCatch();
rejectedPromise.catch((rejectValue) => {
console.log(rejectValue);
})
```
This is sometimes used in the global scope to catch final errors in complex code.

//library.js  as below

```
//This function returns true 50% of the time.
let randomSuccess = () => {
 let num = Math.random();
 if (num < .5 ){
   return true;
 } else {
   return false;
 }
};
 
//This function returns a promise that resolves half of the time and rejects half of the time
let cookBeanSouffle = () => {
 return new Promise((resolve, reject) => {
   console.log('Fingers crossed... Putting the Bean Souffle in the oven');
   setTimeout(()=>{
     let success = randomSuccess();
     if(success){
       resolve('Bean Souffle');
     } else {
       reject('Dinner is ruined!');
     }
   }, 1000);
 })
};
 
module.exports = cookBeanSouffle;
```

```
const cookBeanSouffle = require('./library.js');
 
// Write your code below:
 
async function hostDinnerParty() {
 try {
   let dinner = await cookBeanSouffle();
   console.log(`${dinner} is served!`);
 }
 catch(error){
   console.log(error);
   console.log('Ordering a pizza!');
 }
}
 
hostDinnerParty();
```
```
app.js
const cookBeanSouffle = require('./library.js');

// Write your code below:


async function hostDinnerParty() {
 try {
   let dinner = await cookBeanSouffle();
   console.log(`${dinner} is served!`);
 }
 catch(error){
   console.log(error);
   console.log('Ordering a pizza!');
 }
}

hostDinnerParty();



```
##Handling Independent Promises
Remember that await halts the execution of our async function. This allows us to conveniently write synchronous-style code to handle dependent promises. But what if our async function contains multiple promises which are not dependent on the results of one another to execute?
```
async function waiting() {
 const firstValue = await firstAsyncThing();
 const secondValue = await secondAsyncThing();
 console.log(firstValue, secondValue);
}
 
async function concurrent() {
 const firstPromise = firstAsyncThing();
 const secondPromise = secondAsyncThing();
console.log(await firstPromise, await secondPromise);
}
```
Sample
app.js
```
let {cookBeans, steamBroccoli, cookRice, bakeChicken} = require('./library.js')
 
// Write your code below:
 
async function serveDinner() {
 let vegetablePromise = steamBroccoli();
 let starchPromise = cookRice();
 let proteinPromise = bakeChicken();
 let sidePromise = cookBeans();
 console.log(`Dinner is served. We're having ${await vegetablePromise}, ${await starchPromise}, ${await proteinPromise}, and ${await sidePromise}.`)
}
 
serveDinner()
 
```
library.js

```
let cookBeans = () => {
  return new Promise ((resolve, reject) => {
   setTimeout(()=>{
     resolve('beans')
   }, 1000)
 })
}
 
let steamBroccoli = () => {
 return new Promise ((resolve, reject) => {
   setTimeout(()=>{
     resolve('broccoli')
   }, 1000)
 })
}
 
let cookRice = () => {
 return new Promise ((resolve, reject) => {
   setTimeout(()=>{
     resolve('rice')
   }, 1000)
 })
}
 
let bakeChicken = () => {
 return new Promise ((resolve, reject) => {
   setTimeout(()=>{
     resolve('chicken')
   }, 1000)
 })
}
 
module.exports = {cookBeans, steamBroccoli, cookRice, bakeChicken}
```

##Await Promise.all()
 
Another way to take advantage of concurrency when we have multiple promises which can be executed simultaneously is to await a Promise.all().
We can pass an array of promises as the argument to Promise.all(), and it will return a single promise. This promise will resolve when all of the promises in the argument array have resolved. This promise’s resolve value will be an array containing the resolved values of each promise from the argument array.
In our above example, we await the resolution of a Promise.all(). This Promise.all() was invoked with an argument array containing four promises (returned from required-in functions). Next, we loop through our resultArray, and log each item to the console. The first element in resultArray is the resolved value of the asyncTask1() promise, the second is the value of the asyncTask2() promise, and so on.
```
async function asyncPromAll() {
  const resultArray = await Promise.all([asyncTask1(), asyncTask2(), asyncTask3(), asyncTask4()]);
  for (let i = 0; i<resultArray.length; i++){
    console.log(resultArray[i]); 
  }
}
```
Promise.all() allows us to take advantage of asynchronicity— each of the four asynchronous tasks can process concurrently. Promise.all() also has the benefit of failing fast, meaning it won’t wait for the rest of the asynchronous actions to complete once any one has rejected. As soon as the first promise in the array rejects, the promise returned from Promise.all() will reject with that reason. As it was when working with native promises, Promise.all() is a good choice if multiple asynchronous tasks are all required, but none must wait for any other before executing.
2 samples in library.js and app.js
```
let cookBeans = () => {
  return new Promise ((resolve, reject) => {
   setTimeout(()=>{
     resolve('beans')
   }, 1000)
 })
}
 
let steamBroccoli = () => {
 return new Promise ((resolve, reject) => {
   setTimeout(()=>{
     resolve('broccoli')
   }, 1000)
 })
}
 
let cookRice = () => {
 return new Promise ((resolve, reject) => {
   setTimeout(()=>{
     resolve('rice')
   }, 1000)
 })
}
 
let bakeChicken = () => {
 return new Promise ((resolve, reject) => {
   setTimeout(()=>{
     resolve('chicken')
   }, 1000)
 })
}
 
module.exports = {cookBeans, steamBroccoli, cookRice, bakeChicken}
```
```let {cookBeans, steamBroccoli, cookRice, bakeChicken} = require('./library.js')
 
// Write your code below:
async function serveDinnerAgain(){
  let foodArray = await Promise.all([steamBroccoli(), cookRice(), bakeChicken(), cookBeans()]); 
  
  console.log(`Dinner is served. We're having ${foodArray[0]}, ${foodArray[1]}, ${foodArray[2]}, and ${foodArray[3]}.`)
}
 
serveDinnerAgain()
 
```
 
##Review
Awesome work getting the hang of the async...await syntax! Let’s review what you’ve learned:
async...await is syntactic sugar built on native JavaScript promises and generators.
We declare an async function with the keyword async.
Inside an async function we use the awaitoperator to pause execution of our function until an asynchronous action completes and the awaited promise is no longer pending .
await returns the resolved value of the awaited promise.
We can write multiple await statements to produce code that reads like synchronous code.
We use try...catch statements within our async functions for error handling.
We should still take advantage of concurrency by writing async functions that allow asynchronous actions to happen in concurrently whenever possible.
 library.js
 ```
 let cookBeans = () => {
  return new Promise ((resolve, reject) => {
   setTimeout(()=>{
     resolve('beans')
   }, 1000)
 })
}

let steamBroccoli = () => {
 return new Promise ((resolve, reject) => {
   setTimeout(()=>{
     resolve('broccoli')
   }, 1000)
 })
}

let cookRice = () => {
 return new Promise ((resolve, reject) => {
   setTimeout(()=>{
     resolve('rice')
   }, 1000)
 })
}

let bakeChicken = () => {
 return new Promise ((resolve, reject) => {
   setTimeout(()=>{
     resolve('chicken')
   }, 1000)
 })
}

module.exports = {cookBeans, steamBroccoli, cookRice, bakeChicken}```

app.js
```
let {cookBeans, steamBroccoli, cookRice, bakeChicken} = require('./library.js')

// Write your code below:
async function serveDinnerAgain(){
  let foodArray = await Promise.all([steamBroccoli(), cookRice(), bakeChicken(), cookBeans()]); 
  
  console.log(`Dinner is served. We're having ${foodArray[0]}, ${foodArray[1]}, ${foodArray[2]}, and ${foodArray[3]}.`)
}

serveDinnerAgain()

```
 
 
 
 
 


