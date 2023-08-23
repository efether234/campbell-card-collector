/**
 * Fetch all Campbell Cards from the Scryfall API and store them
 * in a MongoDB Database.
 */

const Card = require("../models/card");

require("dotenv").config();

url =
  "https://api.scryfall.com/cards/search?order=released&q=a%3Acampbell_white";

module.exports = () => {
  fetch(url)
    .then((res) => res.json())
    .then((body) => {
      // Iterate over all cards that were fetched from the API. Add each one
      // to the DB.
      Object.values(body.data).forEach(async (card) => {
        let newCard = await Card.findOne({ id: card.id });

        // For each card, check if that card already exists in the DB. If it
        // does, skip adding it to the DB.
        if (newCard) return;

        newCard = new Card(card);
        await newCard.save();
      });
    });
};
