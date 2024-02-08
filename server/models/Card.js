const mongoose = require('mongoose');

const { Schema } = mongoose;

const CardFace = new Schema({
  name: {
    type: String
  },
  flavor_name: {
    type: String
  },
  flavor_text: {
    type: String
  },
  mana_cost: {
    type: String
  },
  type_line: {
    type: String
  },
  oracle_text: {
    type: String
  },
  power: {
    type: String
  },
  toughness: {
    type: String
  },
  image_uris: {
    type: Object
  }
});

const cardSchema = new Schema({
  id: {
    type: String
  },
  layout: {
    type: String
  },
  rulings_uri: {
    type: String
  },
  card_faces: {
    type: [CardFace]
  },
  cmc: {
    type: Number
  },
  color_identity: {
    type: [String]
  },
  defense: {
    type: String
  },
  keywords: {
    type: [String]
  },
  loyalty: {
    type: String
  },
  mana_cost: {
    type: String
  },
  name: {
    type: String
  },
  oracle_text: {
    type: String
  },
  power: {
    type: String
  },
  toughness: {
    type: String
  },
  type_line: {
    type: String
  },
  flavor_name: {
    type: String
  },
  flavor_text: {
    type: String
  },
  image_uris: {
    type: Object
  },
  rarity: {
    type: String
  },
  set_name: {
    type: String
  },
  set: {
    type: String
  }
});

const Card = mongoose.model('Card', cardSchema);

module.exports = Card;