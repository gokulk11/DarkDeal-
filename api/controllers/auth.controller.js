const User = require("../models/user.model.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const errorHandler = require("../utils/error.js");
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });


const signUp = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hash = bcrypt.hashSync(password, 10);
  const newUser = new User({ username, email, password: hash });
  try {
    await newUser.save();
    res.status(201).json("User created successfully");
  } catch (err) {
    next(err);
  }
};

const signIn = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) {
      return next(errorHandler(404, "User Not Found"));
    }
    const validPassword =  bcrypt.compareSync(password, validUser.password);
    if(!validPassword) {
      return next(errorHandler(401,"Wrong Credentials!"))
    }
    //valid email and password then..
    
    const token = jwt.sign({id:validUser._id},process.env.JWT_SECRET_KEY)
    const { password: pass, ...rest} = validUser._doc
    res.cookie("auth_token", token,{httpOnly: true}).status(200).json(rest)
    
  } catch (error) {
    next(error)
  }
};
console.log(process.env.JWT_SECRET_KEY)
module.exports = {
  signUp,
  signIn,
};
