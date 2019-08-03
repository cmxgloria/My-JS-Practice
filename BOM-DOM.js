// the window object, system dialogs,the location object, document basics, query selectors

console.log(window.screenLeft + ' , ' + window.screenTop);
//0 , 23(different window different pixel)

console.log(window.innerWidth + ', ' + window.outerWidth);
//'404, 1440'


window.open('https://app.pluralsight.com/library/', '_blank');
//the website popups must enable

console.log(new Date().getSeconds());
setTimeout(function () {
  console.log(new Date().getSeconds());
}, 1000)
//33
//34



console.log(new Date().getSeconds());
var id = setTimeout(function () {
  console.log(new Date().getSeconds());
}, 1000);
clearTimeout(id);
//24

console.log(new Date().getSeconds());
var id = setInterval(function () {
  var secs = new Date().getSeconds();
  console.log(secs);
  if (secs === 2)
    clearInterval(id);
}, 1000);
//50 51 52...59 0 1 2 then stop


//system dialogs: 3 types(alert dialog , confirm dialog, )

alert('hello world');
// the system will popup 'hello world' on the system dialogs

if (confirm('Delete everything?')) {
  console.log('You ask for it!');
}
else {
  console.log('Maybe do it next time.')
}
// a system ask for "Delete everything?"

var result = prompt('your name.');
console.log(result);
//null or whatever you put in the prompt

//those as below it will show different thing when there are different paths or website

console.log(location.href);
//'https://playcode.io/412102?tabs=script.js,preview,console'

console.log(location.host);
//'playcode.io'
console.log(location.port);
//""()
console.log(location.protocol);
//'https:'
location.assign('https://pluralsight.com')
  //(the browser will direct  https://pluralsight.com)


  // body of HTML
  < article id = 'article1' >
    <h3>Title goes here</h3>
    <p>p1</p>
    <p>p2</p>
    <p>p3</p>
</article >
//Javascript
var elements = document.getElementsByTagName('p');
console.log(elements);
//[p,p,p]

// body of HTML
<article id='article1'>
  <h3>Title goes here</h3>
  <p>p1</p>
  <p class='special'>p2</p>
  <p class='special'>p3</p>
</article>
//Javascript
var elements = document.getElementsByTagName('special');
console.log(elements);
//[p.special, p.special]

// body of HTML
<article id='article1' class='my-custom-class'>
  <h3>Title goes here</h3>
  <p>p1</p>
  <p class='special'>p2</p>
  <p class='special'>p3</p>
</article>
//Javascript
var a = document.getElementById('article1');
console.log(a.getAttribute('class'));
//my-custom-class

// body of HTML
<article id='article1' class='my-custom-class'>
  <h3>Title goes here</h3>
  <p>p1</p>
  <p class='special'>p2</p>
  <p class='special'>p3</p>
</article>
//Javascript
var a = document.getElementById('article1');
a.setAttribute('class', 'daynamic-style');
console.log(a.getAttribute('class'));
//daynamic-style

// body of HTML
<article id='article1' class='my-custom-class'>
  <h4>Title goes here</h4>
  <p>p1</p>
</article>
//Javascript
var a = document.getElementById('article1');
a.setAttribute('class', 'daynamic-style');
console.log(a.childNodes);
// [text, h4,text,p,text]

// body of HTML
<article id='article1' class='my-custom-class'>
  <h3>Title goes here</h3>
  <p>p1</p>
  <p class='special'>p2</p>
  <p class='special'>p3</p>
</article>
//Javascript
var element = document.querySeletor('article1');
console.log(element);
//<article>...</article>

// body of HTML
<article id='article1' class='my-custom-class'>
  <h3>Title goes here</h3>
  <p>p1</p>
  <p class='special'>p2</p>
  <p class='special'>p3</p>
</article>
//Javascript
var element = document.querySeletor('#article1');
console.log(element);
//<article>...</article>

// body of HTML
<article id='article1' class='my-custom-class'>
  <h3>Title goes here</h3>
  <p>p1</p>
  <p class='special'>p2</p>
  <p class='special'>p3</p>
</article>
//Javascript
var element = document.querySeletor('.special');
console.log(element);
// <p class='special'>p2</p>, just run the first matching one

// body of HTML
<article id='article1' class='my-custom-class'>
  <h3>Title goes here</h3>
  <p>p1</p>
  <p class='special'>p2</p>
  <p class='special'>p3</p>
</article>
//Javascript
var element = document.querySelectorAll('.special');
console.log(element);
// [p.special, p.special], it will show all 
//(query selector is a modern way to access the DOM element)









