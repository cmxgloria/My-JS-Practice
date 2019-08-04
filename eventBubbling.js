//body of HTML
<div id='div1' style="width:200px; height:200px; background-color:red">
  <div id='div2' style="width:200px; height:200px; background-color:red" ></div>
</div>

//Javascript file
var div1 = document.getElementById('div1');
var div2 = document.getElementById('div2');
var clickHandler = function divClickHandler(event) {
  console.log(this.id);
};
div1.addEventListener('click', clickHandler, false);
div2.addEventListener('click', clickHandler, false);
//div2
//div1

//body of HTML
<div id='div1' style="width:200px; height:200px; background-color:red">
  <div id='div2' style="width:200px; height:200px; background-color:red" ></div>
</div>

//Javascript file
var div1 = document.getElementById('div1');
var div2 = document.getElementById('div2');
var clickHandler = function divClickHandler(event) {
  console.log(this.id);
};
div1.addEventListener('click', clickHandler, true);
div2.addEventListener('click', clickHandler, true);

//div1
//div2

//body of HTML
<div id='div1' style="width:200px; height:200px; background-color:red">
  <div id='div2' style="width:200px; height:200px; background-color:red" ></div>
</div>

//Javascript file
var div1 = document.getElementById('div1');
var div2 = document.getElementById('div2');
var clickHandler = function divClickHandler(event) {
  console.log(this.id);
  event.stopPropagation();
};
div1.addEventListener('click', clickHandler, true);
div2.addEventListener('click', clickHandler, true);
//div1
