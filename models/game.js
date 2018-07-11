const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gameSchema = new Schema({
  sport: { type: String, required: true },
  location: { type: String, required: true },
  description: String,
  date: { type: Date, default: Date.now }
});

const Game = mongoose.model("Game", gameSchema);

module.exports = Game;
