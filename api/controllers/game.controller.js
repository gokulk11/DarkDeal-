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
      "platforms.name": { $regex: platform, $options: "i" },
      "platforms.offer": hasOffer,
    })
      .sort({ [sort]: order })
      .limit(limit)
      .skip(startIndex)
      .select({
        title: 1,
        dev: 1,
        genre: 1,
        platforms: 1,
      });

    games.forEach((game) => {
      game.platforms = game.platforms.filter(
        (platforms) => platforms.offer === hasOffer
      );
    });

    return res.status(200).json(games);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  addGame,
  getGame,
};
