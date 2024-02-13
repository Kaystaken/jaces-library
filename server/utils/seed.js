const connection = require("../config/connection");
const { Card } = require("../models");
const cards1 = require("./default-cards-20240207220534-1.json");
const cards2 = require("./default-cards-20240207220534-2.json");
const cards3 = require("./default-cards-20240207220534-3.json");
const cards4 = require("./default-cards-20240207220534-4.json");
const cards5 = require("./default-cards-20240207220534-5.json");
const cards6 = require("./default-cards-20240207220534-6.json");
const cards7 = require("./default-cards-20240207220534-7.json");
const cards8 = require("./default-cards-20240207220534-8.json");

const cardCollection = [cards1, cards2, cards3, cards4, cards5, cards6, cards7, cards8];
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

  for(let count = 0; count < cardCollection.length; count++) {
    const cards = cardCollection[count];
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
  }

  console.info("Seeding complete! 🌱");
  process.exit(0);
});
