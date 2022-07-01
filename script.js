// Write your JavaScript code here!
// import {formSubmission, validateInput} from './scriptHelper.js';


window.addEventListener("load", function() {
    let document = window.document
    let pilot = document.querySelector("input[name=pilotName]");
    let copilot = document.querySelector("input[name=copilotName]");
    let fuelLevel = document.querySelector("input[name=fuelLevel]");
    let cargoLevel = document.querySelector("input[name=cargoMass]");
    let list = document.getElementById("faultyItems");    

    


   let form = document.querySelector("form");
   form.addEventListener("submit", function(event){
    event.preventDefault();
    formSubmission(document, list, pilot.value, copilot.value, fuelLevel.value, cargoLevel.value);

if (validateInput(pilot.value) =="Empty" || validateInput(copilot.value) =="Empty" || validateInput(fuelLevel.value) =="Empty" || validateInput(cargoLevel.value) =="Empty"){
    alert("Fields required");
    list.style.visibility="hidden";
    }
else if (validateInput(pilot.value) == "Is a Number" || validateInput(copilot.value) == "Is a Number"){
    alert("Pilot and Copilot entry should be names");
    list.style.visibility="hidden";
    }    
else if (validateInput(fuelLevel.value) == "Not a Number" || validateInput(cargoLevel.value) == "Not a Number"){
    list.style.visibility="hidden";
    alert("Fuel Level & Cargo should be Numbers");
    }
})


let listedPlanets;
  // Set listedPlanetsResponse equal to the value returned by calling myFetch()
  let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       //console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
  let planet = pickPlanet(listedPlanets)
    
       addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image);
    })
   
});