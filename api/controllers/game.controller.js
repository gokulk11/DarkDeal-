const { response } = require("express");
const Game = require("../models/game.model");

const addGame = async (req, res, next) => {
  try {
    const game = await Game.create(req.body);
    return res.status(201).json(game);
  } catch (error) {
    next(error);
  }
};

const getps5games = async (req, res, next) => {
    try {
      
      const ps5Games = await Game.find({"platforms.name":"PS5"},
      { "platforms.$": 1, title: 1, dev: 1, genre: 1, edition: 1, description: 1, releaseDate: 1, _id: 1,categoryRef:1, })
      res.status(200).json(ps5Games)
    } catch (error) {
        next(error)
    }
}


const getGame = async (req, res, next) => {
  try {
    const limit = parseInt(req.query.limit) || 20;
    const startIndex = parseInt(req.query.startIndex) || 0;

    const searchTerm = req.query.searchTerm || "";
    const platform = req.query.platform || "";
    const hasOffer = req.query.hasOffer === "true";
    const sort = req.query.sort || "createdAt";
    const order = req.query.order || "desc";

    const games = await Game.find({
      title: { $regex: searchTerm, $options: "i" },
      "platforms.name": { $regex: new RegExp(platform, "i") },
      "platforms.offer": hasOffer,
    })
      .sort({ [sort]: order })
      .limit(limit)
      .skip(startIndex)
      .select({
        title: 1,
        dev: 1,
        genre: 1,
        categoryRef:1,
        releaseDate:1,
        edition: 1,
        description:1,
        platforms: { $elemMatch: { name: { $regex: new RegExp(platform, "i") },offer: hasOffer} },
      });

      const filteredGames = games.filter((game) => game.platforms.length > 0);

    return res.status(200).json(filteredGames);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  addGame,
  getGame,
  getps5games,
};
