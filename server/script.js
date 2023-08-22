fetch("https://api.magicthegathering.io/v1/cards?artist=campbell_white")
  .then((res) => res.json())
  .then((cards) => {
    console.log(typeof cards);
  });
