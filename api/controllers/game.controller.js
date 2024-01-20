const Game = require("../models/game.model")

const addGame = async (req, res, next) => {
    try {
        const game = await Game.create(req.body)
        return res.status(201).json(game)
    } catch (error) {
        next(error)
    }
}

module.exports ={
    addGame,
}
