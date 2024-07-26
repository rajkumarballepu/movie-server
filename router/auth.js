const { Home, addMovie, getAllMovies, deleteMovie } = require("../controller/movieController");

const router = require("express").Router();

router.get("/", Home);
router.post("/post-movie", addMovie);
router.get("/all", getAllMovies);
router.delete("/delete/:id", deleteMovie);

module.exports = router;