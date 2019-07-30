var blog = {
  name: 'gloria'
};
var updatedBlog = blog;
updatedBlog.name = 'Gavin';
console.log(blog);
//{name: "Gavin"}


var blog = {
  name: 'gloria'
};
var updatedBlog = blog;
blog.name = 'Gavin';
console.log(blog);
//{name: "Gavin"}


var blog = {
  name: 'gloria'
};
var updatedBlog = blog;
updatedBlog.name = 'Gavin';
console.log(blog.name);
//Gavin

var blog = {
  name: 'gloria'
};
function changeLocalBlog(localBlog) {
  localBlog.name = 'no name'
};
changeLocalBlog(blog);
console.log(blog.name);
//no name

var a1 = [1, 2, 3];
var a2 = a1;
a1[0] = 99;
console.log(a2[0]);
//99

var entries = Array('nav', 'tx', 'he');
console.log(entries instanceof Array);
//true

var entries = ['plane', 'ship', 'bike'];
console.log(entries.toString());
//'plane,ship,bike'

var entries = ['plane', 'ship', 'bike'];
console.log(entries);
//["plane" ,"ship" ,"bike"]

var rating = [5, 2, 4];
console.log(rating.join('|'));
//5|2|4


