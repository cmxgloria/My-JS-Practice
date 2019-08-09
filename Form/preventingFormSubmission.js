let form = document.getElementById('user-form');
form.addEventListener('submit', event => {
  //prevent the browser from submitting the form
  event.preventDefault();
});