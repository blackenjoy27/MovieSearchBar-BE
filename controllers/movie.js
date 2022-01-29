const { Movie } = require("../models/movies");

exports.searchMovie = async (req, res) => {
  try {
    const { keyword } = req.body;
    let regexp = new RegExp(keyword, "i");

    const result = await Movie.find({
      $or: [
        { title: { $regex: regexp } },
        { cast: { $regex: regexp } },
        { genres: { $regex: regexp } },
        { year: Number.isInteger(keyword)?keyword:0 },
      ],
    });

    res.status(200).json(result);
  } catch (e) {
    res.status(400).json({ message: `Request Fail: ${e.message}` });
  }
};
