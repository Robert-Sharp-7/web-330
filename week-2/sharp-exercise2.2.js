var header = require('../header.js');

header.display("Robert", "Sharp", "Exercise 2.2")
/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 The person's full name is '<fullname>.'
 The person's age is '<age>.'

*/

// start program
var person = {
    
    //Function returning the person's age
    getAge: function () {
        return this.age;
    }
};
var jim = Object.create(person, {

    //The values associated with my instanced person variable
    "age": 
    {
        "value": "52"
    },
    "fullName": 
    {
        "value": "Jim Sharp"
    }
});

//watching the video helped me be able to log these messages clearly

console.log("This is person's name is %s", jim.fullName)
console.log("This person is %s ", jim.getAge())




// end program