const express = require("express");

const cards = require("../routes/cards");

module.exports = (app) => {
  app.use(express.json());
  app.use("/api/cards", cards);
};
