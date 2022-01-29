const mongoose = require("mongoose");

const movieSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  cast: {
    type: [String],
    required: true,
  },
  genres: {
    type: [String],
    required: true,
  }
});
const Movie = mongoose.model('Movie', movieSchema);
module.exports = { Movie };
