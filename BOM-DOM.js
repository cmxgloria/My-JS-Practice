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



