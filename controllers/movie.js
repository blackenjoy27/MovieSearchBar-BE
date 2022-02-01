const { Movie } = require("../models/movies");

exports.searchMovie = async (req, res) => {
  try {
    const { keyword } = req.body;
    let regexp = new RegExp(keyword, "i");

    const limit = req.query.limit;
    const offset = req.query.offset;

    let query = Movie.find({
      $or: [
        { title: { $regex: regexp } },
        { cast: { $regex: regexp } },
        { genres: { $regex: regexp } },
        { year: isNaN(keyword) ? 0 : keyword },
      ],
    })
    if (limit && offset) {
      query = query.limit(limit).skip(offset)
    } else {
      query = query.limit(10).skip(0)
    }
    const result = await query


    res.status(200).json(result);
  } catch (e) {
    res.status(400).json({ message: `Request Fail: ${e.message}` });
  }
};
