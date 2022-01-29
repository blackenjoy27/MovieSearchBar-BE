const express = require("express");

const MoviesController = require("../controllers/movie");
const router = express.Router();


router.post("/", MoviesController.searchMovie);


module.exports = router;
