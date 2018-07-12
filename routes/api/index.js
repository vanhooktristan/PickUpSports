const router = require("express").Router();
const gameRoutes = require("./games.js");

// Game routes
router.use("/games.js", gameRoutes);

module.exports = router;
