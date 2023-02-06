const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/Users");
const app = express();

app.use(express.json());

mongoose.connect(
  "mongodb+srv://blog:sbDfdGiNqIw8fbE7@cluster0.soavyro.mongodb.net/?retryWrites=true&w=majority"
);

app.use(cors());

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const userDoc = await User.create({
    username,
    password,
  });
  res.json(userDoc);
});

app.listen(4000);

//
