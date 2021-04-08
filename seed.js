var mongoose = require("mongoose");
var School = require("./models/school");
var Survey = require("./models/survey");

var seedSchool = {
    state: "CA",
    city: "Mountain View",
    name: "Forrest High School",
    owner: {
        id: "6062ae29eca03e19063404df",
        username: "admin"
    }
};

var seedSurvey = {
    grade: "12th",
    c1: 1,
    c2: 2,
    c3: 3,
    c4: 4,
    c5: 5,
    a1: 1,
    a2: 2,
    a3: 3,
    a4: 4,
    a5: 5,
    s1: 1,
    s2: 2,
    s3: 3,
    s4: 4,
    s5: 5,    
};

function seedDB() {
    School.deleteMany({}, function(err){
        if (err) {
            console.log(err);
        } else {
            console.log("Removed all schools!");
            Survey.deleteMany({}, function(err){
               if (err) {
                   console.log(err);
               } 
                School.create(seedSchool, function(err, school){
                    if (err) {
                        console.log(err);
                    } else {
                        console.log("Created a new school");
                        Survey.create(seedSurvey, function(err, survey){
                            if (err) {
                                console.log(err);
                            } else {
                                school.surveys.push(survey);
                                school.save();
                            }
                        });
                    }
                });
            });
        }
    });
}

module.exports = seedDB;