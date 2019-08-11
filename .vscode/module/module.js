var scoreboard = function () {
  var message = 'welcome to the game';
  function printMessage() {
    console.log(message);
  }
  return {
    showMessage: printMessage
  }
}();

//module format: Asynchronous Module Defition(AMD), CommonJS, Universal Module Defition(UMD)

