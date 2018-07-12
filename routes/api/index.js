const router = require("express").Router();
const gameRoutes = require("./game.js");

// Game routes
router.use("/games.js", gameRoutes);

module.exports = router;
