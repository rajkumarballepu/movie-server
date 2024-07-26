const mongoose = require("mongoose");
const movieSchema = new mongoose.Schema({
    name: String,
    urlSlug: String,
    date: String,
    frameLink: String,
    downloadLink: String,
    avatar: String,
    summary: String,
    categories: Array,
})

module.exports = mongoose.model("Movies", movieSchema);