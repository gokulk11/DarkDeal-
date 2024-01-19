const express = require("express");
const { verifyToken } = require("../utils/verifyuser.js");
const { updateUser } = require("../controllers/user.controller.js");

const router = express.Router();

router.get("/test", (req, res) => {
  res.json({ userRouter: true });
});

router.patch('/update/:id', verifyToken,updateUser)

module.exports = router;
