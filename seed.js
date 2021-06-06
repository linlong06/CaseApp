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
    
    var newUser = new User({username: process.env.ADMIN_USERNAME});
    User.register(newUser, process.env.ADMIN_PASSWORD, function(err){
        if (err) {
            console.log(err);
        } else {
            console.log("Add admin account!");
        }
    });
}

module.exports = seedDB;