let availableAirplanes = [{
    name: 'AeroJet',
    fuelCapacity: 800,
    availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators'],
},
{
    name: 'SkyJet',
    fuelCapacity: 500,
    availableStaff: ['pilots', 'flightAttendants']
}];

let flightRequirements = {
    requiredStaff: 4,
};

function meetsStaffRequirements(availableStaff, requiredStaff) {
    if (availableStaff.length >= requiredStaff) {
        return true;
    } else {
        return false;
    }
};

import {availableAirplanes, flightRequirements, meetsStaffRequirements, a} from './airplane';
function displayFuelCapacity() {
  availableAirplanes.forEach(function(element) {
    console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
  });
}

displayFuelCapacity();

function displayStaffStatus() {
  availableAirplanes.forEach(function(element) {
   console.log(element.name + ' meets staff requirements: ' + meetsStaffRequirements(element.availableStaff, flightRequirements.requiredStaff) );
  });
}

displayStaffStatus();
//print: Fuel Capacity of AeroJet: 800
Fuel Capacity of SkyJet: 500
AeroJet meets staff requirements: true
SkyJet meets staff requirements: false
