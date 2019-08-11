var scoreboard = function () {
  var message = 'welcome to the game';
  function printMessage() {
    console.log(message);
  }
  return {
    showMessage: printMessage
  }
}();

//module format: Asynchronous Module Defition(AMD), CommonJS, Universal Module Defition(UMD),SystemRegister, ES2015

//module loaders: RequireJS(AMD), SystemJS(AMD, CommonJS, UMD, SystemRegister)


//--AMD format
//game.js
define(['./player'], function (player) {
  console.log('Starting game for' + player.getName());
  function calculateScore() {
    //calculate the score here
  }
  return
  {
    calculateScore: calculateScore
  };
});

//summary
//role of module bundlers
//replacement for module loaders
//browserify
//webpack
//related courses  --creating JavaScript Modules with Browserify    --webpack Fundamentals
