var mongoose = require("mongoose");

var schoolSchema = new mongoose.Schema({
    state: String,
    city: String,
    name: String,
    surveys: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Survey"
        }
    ]
});

module.exports = mongoose.model("School", schoolSchema);