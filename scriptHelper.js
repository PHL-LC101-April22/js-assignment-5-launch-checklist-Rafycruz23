// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
  missionTarget = document.getElementById("missionTarget");
  missionTarget.innerHTML =`
  <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter:${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons:${moons} </li>
                </ol>
                <img src="${imageUrl}">
`
}

function validateInput(testInput) {   
    if (testInput == ""){
        return "Empty";
    } else if (isNaN(testInput)==false){
        return "Is a Number";
    } else {
        return "Not a Number";
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  let pilotStatus = document.getElementById("pilotStatus");
  let copilotStatus = document.getElementById("copilotStatus");
  let fuelStatus = document.getElementById("fuelStatus");
  let cargoStatus = document.getElementById("cargoStauts");
  let h2 = document.getElementById("launchStatus");


  if (fuelLevel < 10000) {
    list.style.visibility= "visible";
    h2.innerHTML = "Shutle not ready for launch";
    h2.style.color = "red";
    fuelStatus.innerHTML = "Not enough fuel"
    pilotStatus.innerHTML = `Pilot ${pilot} ready for launch`;
    copilotStatus.innerHTML = `Pilot ${copilot} ready for launch`;
  } else if (cargoLevel > 10000) {
    list.style.visibility = "visible";
    cargoStatus.innerHTML = "Too much mass for takeoff";
    h2.innerHTML="Shuttle not ready for launch";
    h2.style.color="red";    
    pilotStatus.innerHTML = `Pilot ${pilot} ready for launch`;
    copilotStatus.innerHTML = `Pilot ${copilot} ready for launch`;
  } else if (cargoLevel < 10000 && fuelLevel > 10000){
    list.style.visibility = "visible";
    h2.innerHTML = "Shuttle is ready for launch";
    h2.style.color = "green";
    pilotStatus.innerHTML = `Pilot ${pilot} ready for launch`;
    copilotStatus.innerHTML = `Pilot ${copilot} ready for launch`;
    fuelStatus.innerHTML="Fuel Available";
    cargoStatus.innerHTML="Weight within Limits"

  }
  
}

async function myFetch() {
    let planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then( function(response) {
    return response.json();

  })
  console.log(planetsReturned)
    return planetsReturned
}

function pickPlanet(planets) {
  let randomPlanet = Math.floor(Math.random() * planets.length);
  return planets[randomPlanet]
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
