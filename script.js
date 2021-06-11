// Write your JavaScript code here!
window.addEventListener("load", function() {
   
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(response => response.json()).then(json => {
      const div = document.getElementById("missionTarget");
      console.log(json.length);
      let randomPlanet =  Math.floor(Math.random()*6+1);
      div.innerHTML = `
      <ol>
          <li>Name: ${json[randomPlanet].name}</li>
          <li>Diameter: ${json[randomPlanet].diameter}</li>
          <li>Star: ${json[randomPlanet].star}</li>
          <li>Distance from Earth: ${json[randomPlanet].distance}</li>
          <li>Number of Moons: ${json[randomPlanet].moons}</li>
      </ol>
      <img src="${json[randomPlanet].image}">  
      `;
  });

   let form = document.querySelector("form");
   let pilotNameInput = document.querySelector("input[name=pilotName]");
   let copilotNameInput = document.querySelector("input[name=copilotName]");
   let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
   let cargoMassInput = document.querySelector("input[name=cargoMass]");
   form.addEventListener("submit", function(event) {
     event.preventDefault();
      
      if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
         alert("All fields are required!");
         event.preventDefault();
      }
      else if (isNaN(Number(pilotNameInput.value)) === false || isNaN(Number(copilotNameInput.value)) === false || isNaN(fuelLevelInput.value) === true |isNaN(Number(cargoMassInput.value)) === true) {   
         alert("Make sure to enter valid information for each field!");
         event.preventDefault();
      }
      else {
         document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotNameInput.value} is ready for launch`;
         document.getElementById("copilotStatus").innerHTML = `Co-Pilot ${copilotNameInput.value} is ready for launch`;
         if (fuelLevelInput.value < 10000 && cargoMassInput.value < 10000) {
            document.getElementById("faultyItems").style.visibility = "visible"; 
            document.getElementById("fuelStatus").innerHTML = "Not enough fuel for the journey.";
            document.getElementById("launchStatus").innerHTML = "<span style='color: red'>Shuttle not ready for launch</span>";
         }
         else if (fuelLevelInput.value > 10000 && cargoMassInput.value > 10000) {
            document.getElementById("faultyItems").style.visibility = "visible"; 
            document.getElementById("cargoStatus").innerHTML = "There is too much mass for the shuttle to take off";
            document.getElementById("launchStatus").innerHTML = "<span style='color: red'>Shuttle not ready for launch</span>";
         }
         else if (fuelLevelInput.value < 10000 && cargoMassInput > 10000) {
            document.getElementById("faultyItems").style.visibility = "visible"; 
            document.getElementById("fuelStatus").innerHTML = "Not enough fuel for the journey.";
            document.getElementById("cargoStatus").innerHTML = "There is too much mass for the shuttle to take off";
            document.getElementById("launchStatus").innerHTML = "<span style='color: red'>Shuttle not ready for launch</span>";
         }
         else {
         document.getElementById("faultyItems").style.visibility = "visible";   
         document.getElementById("launchStatus").innerHTML = "<span style='color: green'>Shuttle ready for launch</span>";
         }
      };
          
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
