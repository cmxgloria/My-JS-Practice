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


