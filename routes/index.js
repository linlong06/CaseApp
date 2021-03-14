var express         = require("express"),
    router          = express.Router(),
    passport        = require("passport"),
    User            = require("../models/user"),
    School          = require("../models/school"),
    Survey          = require("../models/survey"),
    middleware      = require("../middleware/index")

// MAIN ROUTES
router.get("/", function(req, res){
    res.render("landing");
});

router.get("/resources", function(req, res){
    res.render("resources");
});

router.get("/survey", middleware.isLoggedIn, function(req, res){
    res.render("survey");
});

router.post("/survey", middleware.isLoggedIn, function(req, res) {
    var school = {state: req.body.state, city: req.body.city, name: req.body.name};
    var survey = {grade: req.body.grade, c1: req.body.c1, c2: req.body.c2, c3: req.body.c3, c4: req.body.c4, c5: req.body.c5};
    School.create(school, function(err, addedSchool){
        if (err) {
            console.log(err);
        } else {
            Survey.create(survey, function(err, addedSurvey){
                if (err) {
                    console.log(err);
                } else {
                    addedSchool.surveys.push(addedSurvey);
                    addedSchool.save();
                    res.render("submitted");
                }
            }); 
        }
    });
});

router.get("/about", function(req, res){
    res.render("about");
});

//===============
// AUTH ROUTEs
//===============

router.get("/register", function(req, res){
    res.render("register");
});

router.post("/register", function(req, res){
    var newUser = new User({username: req.body.username});
    User.register(newUser, req.body.password, function(err, user){
        if (err) {
            req.flash("error", err.message);
            return res.render("register");
        } else {
            passport.authenticate("local")(req, res, function(){
                req.flash("success", "Welcome to State Your Case " + user.username);
                res.redirect("/survey");
            });
        }
    });
});

router.get("/login", function(req, res){
    res.render("login");
});

router.post("/login", passport.authenticate("local", {
    successRedirect: "/survey",
    failureRedirect: "/login"}), function(req, res) {});

router.get("/logout", function(req, res) {
    req.logout();
    req.flash("success", "You have successfully logged out!");
    res.redirect("/");
});

module.exports = router;