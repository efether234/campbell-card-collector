const express = require("express");
const mongoose = require("mongoose");
const Card = require("../models/card");
const router = express.Router();

router.get("/", async (req, res) => {
  const cards = await Card.find().select("-__v").sort("released_at");
  res.send(cards);
});

module.exports = router;
