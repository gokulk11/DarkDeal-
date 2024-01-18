const express = require("express");
const { signUp, signIn, google } = require("../controllers/auth.controller.js");


const router = express.Router();

router.get("/test", (req, res) => {
  res.json({ authRouter: true });
});

router.post('/signup',signUp)
router.post('/signin',signIn)
router.post('/google',google)

module.exports = router;