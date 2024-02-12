const { Schema, model } = require('mongoose');

const deckSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  cards: [
    {
      type: Schema.Types.ObjectId,
      trim: true,
      ref: "Card"
    },
  ],
  // name: {
  //   type: String,
  //   trim: true,
  // }
});

const Deck = model('Deck', deckSchema);

module.exports = Deck;