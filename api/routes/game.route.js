const express = require("express");
const { addGame, getGame, getps5games } = require("../controllers/game.controller")
const router = express.Router();

router.get("/test", (req, res) => {
    res.json({ gameRouter: true });
});

router.post('/addgame',addGame);
router.get('/get',getGame);
router.get('/ps5',getps5games)

module.exports = router;