const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const getCards = require("../startup/download-cards");

router.get("/", (req, res) => {
  res.send("GET /cards");
});

router.get("/test", (req, res) => {
  res.send("Check console");
});

module.exports = router;
