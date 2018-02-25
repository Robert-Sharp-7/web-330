var header = require('../header.js');

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 -- DISPLAYING CELL PHONE DETAILS --
 Manufacturer: <manufacturer>
 Model: <model>
 Color: <color>
 Price: <price>


*/
// GitHub link https://robert-sharp-7.github.io/web-330/
// start program
console.log(header.display("Robert", "Sharp", "Assignment 1.3"));
console.log("\n");
// below is where my cell phone constructor object will be

function Phone(manufacturer, model, color, price) {
    this.manufacturer = manufacturer;
    this.model = model;
    this.color = color;
    this.price = price;
    //function to pull price property
    this.getPrice = function () {
        return this.price;
    }
    //function for displaying model property
    this.getModel = function () {
        return this.model;
    }
    //getDetails function for additional details including price and model
    this.getDetails = function () {
        return "Manufacturer: " + this.manufacturer + "\nModel: " + this.getModel()
        + "\nColor: " + this.color + "\nPrice: " + this.getPrice();
    }
};
//below is my own phone variable

var pixel = new Phone ("Google", "Pixel 2 XL", "Black", "649.00")

//output using getDetails() function
console.log(pixel.getDetails());


// end program