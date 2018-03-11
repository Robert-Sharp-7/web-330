var header = require('../header.js');
header.display("Robert", "Sharp", "Exercise 3.3")
/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Same database instance? true

*/

// start program

//creates the singleton databases
var DatabaseSingleton = (function() {
    var instance;
    function createInstance() {
        var postgresDatabase = new Object("Database instance initialized!");
        return postgresDatabase;
    }
    return {
        getInstance: function() {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    }
})();
//tests databases to see if they're the same
function DatabaseSingletonTest() 
{
    var oracle = DatabaseSingleton.getInstance();
    var postgres = DatabaseSingleton.getInstance();
    //logs the message with the boolean value of true if the databses are the same instance
    console.log("Same database instance? %s ", oracle === postgres);
} 


DatabaseSingletonTest();
// end program