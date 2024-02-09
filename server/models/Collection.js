const { Schema, model } = require('mongoose');

const collectionSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  cards: [
    {
      type: String,
      trim: true,
    },
  ],
});

const Collection = model('Collection', collectionSchema);

module.exports = Collection;
