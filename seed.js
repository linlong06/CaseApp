var mongoose = require("mongoose");
var School = require("./models/school");
var Survey = require("./models/survey");


function seedDB() {
    School.deleteMany({}, function(err){
        if (err) {
            console.log(err);
        } else {
            console.log("Removed all schools!");
            Survey.deleteMany({}, function(err){
               if (err) {
                   console.log(err);
               } else {
                   console.log("Removed all surveys!")
               }
            });
        }
    });
}

module.exports = seedDB;