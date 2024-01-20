const express = require("express");
const { addGame } = require("../controllers/game.controller")
const router = express.Router();

router.get("/test", (req, res) => {
    res.json({ gameRouter: true });
});

router.post('/addgame',addGame);


module.exports = router;