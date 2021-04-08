var express         = require("express"),
    router          = express.Router(),
    passport        = require("passport"),
    User            = require("../models/user"),
    School          = require("../models/school"),
    Survey          = require("../models/survey"),
    middleware      = require("../middleware/index")

// MAIN ROUTES
router.get("/", function(req, res){
    res.redirect("/schools");
});

router.get("/resources", function(req, res){
    res.render("resources");
});

router.get("/about", function(req, res){
    res.render("about");
});


router.get("/schools", function(req, res){
    School.find({}, function(err, allSchools) {
        if (err) {
            console.log(err);
        }
        else {
            res.render("schools/index", {schools: allSchools});
        }
    });
});

router.get("/schools/new", middleware.isLoggedIn, function(req, res){
   res.render("schools/new"); 
});

router.post("/schools", middleware.isLoggedIn, function(req, res) {
    var state = req.body.state;
    var city = req.body.city;
    var name = req.body.name;
    var owner = {id: req.user._id, username: req.user.username};
    var newSchool = {state: state, city: city, name: name, owner: owner};
    School.create(newSchool, function(err, newAdded){
        if (err) {
            console.log(err);
        } else {
            res.redirect("/schools");
        }
    });
});

router.get("/schools/:id/showSurvey", middleware.checkSchoolOwnership, function(req, res){
    School.findById(req.params.id).populate("surveys").exec(function(err, foundSchool){
        if (err) {
            console.log(err);
        } else {
            res.render("schools/showSurvey", {school: foundSchool});
        }
    });
});


router.get("/schools/:id/newSurvey", middleware.checkSchoolOwnership, function(req, res){
    School.findById(req.params.id, function(err, foundSchool){
        if (err) {
            console.log(err);
        } else {
            res.render("schools/newSurvey", {school: foundSchool});
        }
    }); 
});

router.post("/schools/:id", middleware.checkSchoolOwnership, function(req, res){
    School.findById(req.params.id, function(err, foundSchool){
        if (err) {
            console.log(err);
        } else {
            Survey.create(req.body.survey, function(err, addedSurvey){
                if (err) {
                    console.log(err);
                } else {
                    addedSurvey.save();
                    foundSchool.surveys.push(addedSurvey);
                    foundSchool.save();
                    res.render("submitted", {survey: addedSurvey});                    
                }
            });
        }
    });
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
                res.redirect("/schools");
            });
        }
    });
});

router.get("/login", function(req, res){
    res.render("login");
});

router.post("/login", passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login"}), function(req, res) {});

router.get("/logout", function(req, res) {
    req.logout();
    req.flash("success", "You have successfully logged out!");
    res.redirect("/schools");
});

module.exports = router;