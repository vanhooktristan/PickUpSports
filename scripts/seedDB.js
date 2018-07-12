const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Game collection and inserts the games

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/game",
  {
    useMongoClient: true
  }
);

const gameSeed = [
  {
    sport: "Soccer",
    location: "Swope Park Soccer Village, Kansas City, MO",
    description:
      "Just a few people going to soccer village to kick the ball around, interested in anyone willing to join us",
    numPlayers: 8,
    date: new Date(Date.now())
  }
];

db.Game
  .remove({})
  .then(() => db.Game.collection.insertMany(gameSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
