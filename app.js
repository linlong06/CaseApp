// package declaration
require('dotenv').config()

var express             = require("express"),
    bodyParser          = require("body-parser"),
    mongoose            = require("mongoose"),
    flash               = require("connect-flash"),    
    passport            = require("passport"),
    LocalStrategy       = require("passport-local"),
    methodOverride      = require("method-override"),
    User                = require("./models/user"),
    School             = require("./models/school"),
    Survey             = require("./models/survey"),
    seedDB              = require("./seed");

var indexRoutes         = require("./routes/index");
var adminRoutes         = require("./routes/admin");

// express and DB configuration
var app = express();
var url = process.env.DATABASEURL || "mongodb://localhost:27017/case";
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());
// seedDB();

//passport config
app.use(require("express-session")({
    secret: "my own secret",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
});

app.use("/", indexRoutes);
app.use("/admin", adminRoutes);

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Server has started!"); 
});
