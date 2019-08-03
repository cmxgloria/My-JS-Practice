//body of HTML
<input id='summit1' type='button' onclick="summitForm()" />

//Javascript
function summitForm() {
  console.log('in summitForm');
}
//in summitForm

///body of HTML
<input type='button' value='summit' onclick="alert(foo)" />
  //foo

  //body of HTML
  <input id='summit1' type='button' onclick="summitForm(this)" />

 //Javascript file
 function summitForm(element) {
  console.log(element.id);
}
//summit1


//body of HTML
<input id='summit1' type='button' onclick="summitForm(this,event)" />

//Javascript file
function summitForm(element, event) {
  console.log(event.type);
}
//click

//body of HTML
<input id='summit1' type='button' />

//Javascript file
var button = document.getElementById('summit1');
button.onclick = function () {
  console.log('Button Clicked .')
}
  //Button Clicked .

  //body of HTML
  < input id = 'summit1' type = 'button' />

 //Javascript file
 var button = document.getElementById('summit1');
button.onclick = function () {
  console.log('Button Clicked .')
}
button.onClick = null;
//(nothing show on the screen)

//body of HTML
<input id='summit1' type='button' />

//Javascript file
var button = document.getElementById('summit1');
button.addEventListener(click, function () {
  console.log('Button Clicked.')
})
  //Button Clicked.




  //body of HTML
  < input id = 'summit1' type = 'button' />

 //Javascript file
 var button = document.getElementById('summit1');
button.addEventListener(click, function () {
  console.log('Button Clicked.')
});
button.addEventListener(click, function () {
  console.log('Add another function.')
});
//Button Clicked.
//Add another function.

//body of HTML
<input id='summit1' type='button' />

//Javascript file
var button = document.getElementById('summit1');
var summitHandler = function formSummitHandler() {
  console.log('in formSummitHandler()');
};
button.addEventListener('click', summitHandler);
//in formSummitHandler()

//body of HTML
<input id='summit1' type='button' />

//Javascript file
var button = document.getElementById('summit1');
var summitHandler = function formSummitHandler() {
  console.log('in formSummitHandler()');
};
button.addEventListener('click', summitHandler);
button.removeEventListener('click', summitHandler);
 //null

