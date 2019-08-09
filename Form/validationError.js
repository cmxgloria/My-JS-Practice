let form = document.getElementById('user-form');
form.addEventListener('submit', event => {
  let user = form.elements['user'];
  let userError = Document.getElementById('user-error');
  if (user.value.length < 4) {
    userError.textContent = 'Invalid entry';
    userError.style.color = 'red';
    userError.borderColor = 'red';
    user.focus();
    event.preventDefault();
  }
});