var mongoose    = require("mongoose");
var School      = require("./models/school");
var Survey      = require("./models/survey");
var User        = require("./models/user");

function seedDB() {
    User.deleteMany({}, function(err){
        if (err) {
            console.log(err);
        }
        else {
            console.log("Removed all users!");
        }
    });
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