var express         = require("express"),
    router          = express.Router(),
    passport        = require("passport"),
    User            = require("../models/user"),
    School          = require("../models/school"),
    Survey          = require("../models/survey"),
    middleware      = require("../middleware/index"),
    multer          = require("multer"),
    fs              = require("fs");
    
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
  }
})

var upload = multer({ storage: storage });

//===============
// ADMIN ROUTEs
//===============

router.get("/", middleware.checkAdmin, function(req, res){
    res.render("admin/index");
});


router.get("/schools", middleware.checkAdmin, function(req, res){
    School.find({}, function(err, allSchools) {
        if (err) {
            console.log(err);
        }
        else {
            res.render("admin/schools", {schools: allSchools});
        }
    });
});

router.get("/schools/new", middleware.checkAdmin, function(req, res){
   res.render("admin/newSchool"); 
});

router.post("/schools", middleware.checkAdmin, function(req, res) {
    var state = req.body.state;
    var city = req.body.city;
    var name = req.body.name;
    var zipcode = req.body.zipcode
    var owner = {id: req.user._id, username: req.user.username};
    var newSchool = {state: state, city: city, name: name, zipcode: zipcode, owner: owner};
    School.create(newSchool, function(err, newAdded){
        if (err) {
            console.log(err);
        } else {
            res.redirect("/admin/schools");
        }
    });
});

router.get("/schools/:id/edit", middleware.checkAdmin, function(req, res) {
     School.findById(req.params.id, function(err, foundSchool){
         if (err) {
             console.log(err);
         } else {
             res.render("admin/editSchool", {school: foundSchool});
         }
     });
});


router.delete("/schools/:id", middleware.checkAdmin, function(req, res) {
    School.findByIdAndRemove(req.params.id, function(err){
         if (err) {
             console.log(err);
         } else {
             res.redirect("/admin/schools");
         }
     });
});

router.get("/schools/:id/survey", middleware.checkAdmin, function(req, res){
    School.findById(req.params.id).populate("surveys").exec(function(err, foundSchool){
        if (err) {
            console.log(err);
        } else {
            res.render("admin/showSurvey", {school: foundSchool});
        }
    });
});

router.delete("/schools/:id/survey/:survey_id", middleware.checkAdmin, function(req, res) {
    Survey.findByIdAndRemove(req.params.survey_id, function(err){
         if (err) {
             console.log(err);
         } else {
             res.redirect("/admin/schools/" + req.params.id + "/survey");
         }
     });
});


//===============
// FILE MANAGEMENT
//===============
router.get("/resources", middleware.checkAdmin, function(req, res){
    let filenames = fs.readdirSync("public/uploads");
    res.render("admin/resources", {filenames: filenames});
});

router.post("/resources/upload", middleware.checkAdmin, upload.single("file"), function(req, res, next){
    res.redirect("/admin/resources");
});

router.get("/resources/download/:file", middleware.checkAdmin, function(req, res){
    const path = "public/uploads/" + req.params.file;
    res.download(path);
});

router.get("/resources/delete/:file", middleware.checkAdmin, function(req, res){
    const path = "public/uploads/" + req.params.file;
    fs.unlink(path, function(err){
        if (err) {
            console.log(err);
        } else {
            res.redirect("/admin/resources");
        }
    });
});


module.exports = router;