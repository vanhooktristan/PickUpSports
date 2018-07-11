const router = require("express").Router();
const gameRoutes = require("./game.js");

// Book routes
router.use("/game.js", gameRoutes);

module.exports = router;
