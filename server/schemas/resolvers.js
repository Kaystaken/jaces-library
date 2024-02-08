const { Card } = require('../models');

const resolvers = {
  Query: {
    cards: async () => {
      return Card.find({});
    }
  }
};

module.exports = resolvers;
