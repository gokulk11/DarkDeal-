const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema(
  {
    title: String,
    dev: String,
    genre: Array,
    edition: String,
    description: String,
    releaseDate: String,
    categoryRef: String,
    platforms: [
      {
        name: String,
        price: Number,
        discountPrice: Number,
        offer: Boolean,
        imageUrls: Array,
      },
    ],
    
  },
  { timestamps: true }
);

const Game = mongoose.model("Game", gameSchema);

module.exports = Game;
