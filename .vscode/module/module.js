var scoreboard = function () {
  var message = 'welcome to the game';
  function printMessage() {
    console.log(message);
  }
  return {
    showMessage: printMessage
  }
}();