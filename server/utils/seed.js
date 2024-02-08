const connection = require("../config/connection");
const { Card } = require("../models");
const cards = require("./default-cards-20240207220534.json");

connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("connected");
  // Delete the collections if they exist
  let cardCheck = await connection.db
    .listCollections({ name: "cards" })
    .toArray();
  if (cardCheck.length) {
    await connection.dropCollection("cards");
  }

  let cardIndex = 0;
  while(cardIndex < cards.length) {
    const cardSelection = [];

    for (let count = 0; count < 20; count++) {
      const currentCard = cards[cardIndex];
      cardSelection.push(currentCard);
      cardIndex++;
    }

    await Card.insertMany(cardSelection);
  }

  console.info("Seeding complete! 🌱");
  process.exit(0);
});
