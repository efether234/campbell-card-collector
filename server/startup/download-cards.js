const Card = require("../models/card");

require("dotenv").config();

url =
  "https://api.scryfall.com/cards/search?order=released&q=a%3Acampbell_white";

module.exports = () => {
  fetch(url)
    .then((res) => res.json())
    .then((body) => {
      Object.values(body.data).forEach(async (card) => {
        let newCard = await Card.findOne({ id: card.id });
        if (newCard) return;

        newCard = new Card(card);
        await newCard.save();
      });
    });
};

// module.exports = downloadCards;
