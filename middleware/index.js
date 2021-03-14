var middlewareObj = {};

middlewareObj.isLoggedIn = function(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    } else {
        req.flash("error", "You need to log in to do that!");
        res.redirect("/login");
    }
}

module.exports = middlewareObj;