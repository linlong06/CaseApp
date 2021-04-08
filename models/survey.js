var mongoose = require("mongoose");

var surveySchema = new mongoose.Schema({
    school: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "School"
            },
    grade: String,
    c1: Number,
    c2: Number,
    c3: Number,
    c4: Number,
    c5: Number,
    a1: Number,
    a2: Number,
    a3: Number,
    a4: Number,
    a5: Number,
    s1: Number,
    s2: Number,
    s3: Number,
    s4: Number,
    s5: Number,
});

module.exports = mongoose.model("Survey", surveySchema);