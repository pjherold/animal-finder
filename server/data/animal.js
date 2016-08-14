var mongoose = require("mongoose");
var animalSchema = mongoose.Schema({
    name: String,
    type: String
});

module.exports = mongoose.model("animal", animalSchema);
