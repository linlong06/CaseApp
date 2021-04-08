var School            = require("../models/school");
var middlewareObj = {};

middlewareObj.isLoggedIn = function(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    } else {
        req.flash("error", "You need to log in to do that!");
        res.redirect("/login");
    }
}

middlewareObj.checkSchoolOwnership = function(req, res, next) {
    if (req.isAuthenticated()) {
        School.findById(req.params.id, function(err, foundSchool){
            if (err) {
                req.flash("error", "School not found!");
                res.redirect("back");
            } else if (foundSchool.owner.id.equals(req.user._id)) {
                return next();
            } else {
                req.flash("error", "You don't have permission to do that!");
                res.redirect("back");
            }
        });
    } else {
        req.flash("error", "You need to log in to do that!");
        res.redirect("back");
    }
}

module.exports = middlewareObj;