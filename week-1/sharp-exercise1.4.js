var header = require('../header.js');

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Car added to the racetrack!
 Truck added to the racetrack!
 Jeep added to the racetrack!

 -- The following vehicles have been added to the racetrack --
 Truck: <Model>
 Car: <Model>
 Jeep: <Model>

*/
console.log(header.display("Robert", "Sharp", "Excercise 1.4"));
console.log("\n");

// start program

//Car constructor w/ one parameter
function Car(model) {
    this.model = model;
};
//Truck constructor w/ two parameters
function Truck(model, year) {
    this.model = model;
    this.year = year;
};
//Jeep constructor w/ three parameters
function Jeep(model, year, color) {
    this.model = model;
    this.year = year;
    this.color = color;
};
//adding start prototype method to each class
Car.prototype.start = function () {
    console.log("Car added to the racetrack!")
};

Truck.prototype.start = function () {
    console.log("Truck added to the racetrack!")
};

Jeep.prototype.start = function () {
    console.log("Jeep added to the racetrack!")
};
//vehicle vars
var skyline = new Car("Skyline");

var raptor = new Truck("Raptor", 2016);

var wrangler = new Jeep("Wrangler", 2016, "Tan");

//empty racetrack array
var racetrack = [];

//DriveIt function that pushes vehicles to the racetrack array
function DriveIt(vehicle) {
    vehicle.start();
    racetrack.push(vehicle);
};

DriveIt(skyline);
DriveIt(raptor);
DriveIt(wrangler);

//display vehicles added to the racetrack
console.log("\n-- The following vehicles have been added to the racetrack --");

//for loop to iterate over the racetrack array
for (var x=0; x<racetrack.length; x++) {
    console.log(racetrack[x].constructor.name + ": " + racetrack[x].model);
}


// end program


