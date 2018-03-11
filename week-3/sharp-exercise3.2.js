var header = require('../header.js');
header.display("Robert", "Sharp", "Exercise 3.2")
/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Oracle {
    username: '<username>',
    password: '<password>',
    server: '<server>',
    version: '<version>'
 }

 Informix {
    username: '<username>',
    password: '<password>',
    server: '<server>'
 }

*/

// start program
function Postgres(properties) {
    this.username = properties.username || "admin";
    this.password = properties.password || "s3cret";
    this.server = properties.server || "localhost:5432";
}

function MySql(properties) {
    this.username = properties.username || "ca-admin";
    this.password = properties.password || "ca-s3cret";
    this.server = properties.server || "localhost:8000";
    this.version = properties.version || 5.7
}
//Oracle function with logics to be logged to console
function Oracle (properties) {
    this.username = properties.username || 'admin';
    this.password = properties.password || 'o-s3cret';
    this.server = properties.server || 'localhost:5454';
    this.version = properties.version || '10g';
}
//Informix function with logics to be logged to console
function Informix (properties) {
    this.username = properties.username || 'admin';
    this.password = properties.password || 'in-s3cret';
    this.server = properties.server || 'localhost:3030';
}

function DatabaseFactory() {}

DatabaseFactory.prototype.databaseClass = MySql;
DatabaseFactory.prototype.createDatabase = function(properties) {
    if (properties.databaseType === "Postgres") {
        this.databaseClass = Postgres;
    } 
    if (properties.databaseType === "MySql") {
        this.databaseClass = MySql;
    }
    //adding Oracle and Informix to DataBaseFactory.prototype
    if (properties.databaseType === "Oracle") {
        this.databaseClass = Oracle;
    }
    if (properties.databaseType === "Informix") {
        this.databaseClass = Informix;
    }

    return new this.databaseClass(properties);
};

var postgresFactory = new DatabaseFactory();
var postgres = postgresFactory.createDatabase({
    databaseType: "Postgres",
    username: "admin",
    password: "SuperSecret"
});

var mySqlFactory = new DatabaseFactory();
var mySql = mySqlFactory.createDatabase({
    databaseType: 'MySQL',
    username: "default",
    password: "password"
});

var oracleFactory = new DatabaseFactory();
var oracle = oracleFactory.createDatabase({
    databaseType: "Oracle",
    username: "admin",
    password: "admin",
});
//creating oracle and informix factories
var informixFactory = new DatabaseFactory();
var informix = informixFactory.createDatabase({
    databaseType: "Informix",
    username: "admin",
    password: "password",
});
//displays factory properties
console.log(oracle);
console.log(informix);




// end program


