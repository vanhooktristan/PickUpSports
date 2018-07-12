const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Game collection and inserts the games

mongoose.connect(
  process.env.MONGODB_URI || "mmongodb://<dbuser>:<dbpassword>@ds235401.mlab.com:35401/heroku_rbkckc4m",
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
    saved: false,
    date: new Date(Date.now())
  },
  {
    sport: "Basketball",
    location: "Rec Center University of Missouri Kansas City, Kansas City, MO",
    description:
      "Very skilled players are welcome, we are looking for a challenge!",
    numPlayers: 4,
    saved: false,
    date: new Date(Date.now())
  },
  {
    sport: "Baseball",
    location: "Fountain Bluff Park, Kansas City, MO",
    description:
      "We are a bunch of lazy people that like to play outfield, need a player to come out and hit dingers for us",
    numPlayers: 4,
    saved: false,
    date: new Date(Date.now())
  },
  {
    sport: "Soccer",
    location: "River Park, Parkville, MO",
    description:
      "We are looking to play 3v3 soccer with people that just want to play for fun",
    numPlayers: 5,
    saved: false,
    date: new Date(Date.now())
  },
  {
    sport: "Tennis",
    location: "Clayview Country Club, Kansas City, MO",
    description:
      "Looking to play doubles with some experienced players",
    numPlayers: 2,
    saved: false,
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
