// Write your JavaScript code here!
window.addEventListener("load", function() {
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      // alert("submit");
      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let copilotNameInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass]");
      // alert("pilotname: " + pilotNameInput.value);
      console.log(isNaN(cargoMassInput.value));
      if (pilotNameInput.value === "" || isNaN(Number(pilotNameInput.value)) === false || copilotNameInput.value === "" || isNaN(Number(copilotNameInput.value)) === false || fuelLevelInput.value === "" || isNaN(fuelLevelInput.value) === true || cargoMassInput.value === "" || isNaN(Number(cargoMassInput.value)) === true) {
         alert("All fields are required! and must correspond to the correct type");
         // stop the form submission
         event.preventDefault();}
         else {alert("submitted successfully ")};
      
   });
});
/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${json[i].name}</li>
   <li>Diameter: ${json[i].diameter}</li>
   <li>Star: ${json[i].star}</li>
   <li>Distance from Earth: ${json[i].distance}</li>
   <li>Number of Moons: ${json[i].moons}</li>
</ol>
<img src="${json[i].image}">
*/
