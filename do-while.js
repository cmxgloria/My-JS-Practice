var lineItem = 3;
var currentItem = 0;
do {
  console.log('item: ' + currentItem);
  currentItem++;
}
while (
  currentItem < lineItem
);


//same as above
var lineItem = 3;
var currentItem = 0;
while (currentItem < lineItem)
  console.log('item: ' + currentItem++);

//endless output
var lineItem = 3;
var currentItem = 0;
while (currentItem < lineItem)
  console.log('item: ' + currentItem);
currentItem++