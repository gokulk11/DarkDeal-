const express = require("express");
const { verifyToken } = require("../utils/verifyuser.js");
const { updateUser, deleteUser } = require("../controllers/user.controller.js");

const router = express.Router();

router.get("/test", (req, res) => {
  res.json({ userRouter: true });
});

router.patch('/update/:id', verifyToken,updateUser)
router.delete('/delete/:id', verifyToken,deleteUser)

module.exports = router;
