const router = require("express").Router();
const gamesController = require("../../controllers/gamesController");

// Matches with "/api/games"
router.route("/")
  .get(gamesController.findAll)
  .post(gamesController.create);

router.route("/games")
  .get(gamesController.findAll);

router.route("/locations")
  .get(gamesController.findAll);

// Matches with "/api/games/:id"
router.route("/:id")
  .get(gamesController.findById)
  .put(gamesController.update)
  .delete(gamesController.remove);

module.exports = router;
