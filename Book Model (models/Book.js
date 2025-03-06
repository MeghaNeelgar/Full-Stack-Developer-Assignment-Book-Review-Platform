const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  title: String,
  author: String,
  description: String,
  genre: String,
  image: String,
  rating: { type: Number, default: 0 },
});

module.exports = mongoose.model("Book", BookSchema);
