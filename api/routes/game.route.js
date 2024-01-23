const express = require("express");
const { addGame, getGame } = require("../controllers/game.controller")
const router = express.Router();

router.get("/test", (req, res) => {
    res.json({ gameRouter: true });
});

router.post('/addgame',addGame);
router.get('/get',getGame);


module.exports = router;