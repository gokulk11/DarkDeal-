const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routes/user.route.js");
const authRouter = require("./routes/auth.route.js");
const cookieParser = require('cookie-parser');
const app = express();

const port = 3000;

app.use(express.json());
app.use(cookieParser())

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

main()
  .then((data) => console.log("DB connected"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://localhost:27017/darkdeal");

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});



//JB6Z2Ml0eHcNaJ8i
