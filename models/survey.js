var mongoose = require("mongoose");

var surveySchema = new mongoose.Schema({
    grade: String,
    c1: Number,
    c2: Number,
    c3: Number,
    c4: Number,
    c5: Number
});

module.exports = mongoose.model("Survey", surveySchema);