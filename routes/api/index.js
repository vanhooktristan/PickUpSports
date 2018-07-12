const router = require("express").Router();
const gameRoutes = require("./game.js");

// Game routes
router.use("/games", gameRoutes);

module.exports = router;
