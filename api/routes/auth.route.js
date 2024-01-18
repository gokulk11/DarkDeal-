const express = require("express");
const { signUp, signIn, google, signOut } = require("../controllers/auth.controller.js");


const router = express.Router();

router.get("/test", (req, res) => {
  res.json({ authRouter: true });
});

router.post('/signup',signUp)
router.post('/signin',signIn)
router.post('/google',google)
router.get('/signout',signOut)

module.exports = router;