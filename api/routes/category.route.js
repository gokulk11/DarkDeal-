const express = require("express");
const {addCategory} = require("../controllers/category.controller")
const router = express.Router();

router.post('/addcategory',addCategory);

module.exports = router;