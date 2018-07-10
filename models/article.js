const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gameList = new Schema({
  _id: { type: Schema.Types.ObjectId, required: true },
  sport: { type: String, required: true },
  location: { type: String, required: true },
  numPlayers: { type: Date, default: Date.now }
}, { _id: false });

const Game = mongoose.model("Game", gameList);

module.exports = Game;
