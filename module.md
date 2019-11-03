JavaScript modules are reusable pieces of code that can be exported from one program and imported for use in another program.
```
let Airplane = {};

Airplane.myAirplane = "StarJet";

module.exports = Airplane;

//
const Airplane = require('./1-airplane.js');

function displayAirplane() {
  console.log(Airplane.myAirplane);
}

displayAirplane();
```
//StarJet

