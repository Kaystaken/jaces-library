const { Card } = require('../models');

const resolvers = {
  Query: {
    cards: async () => {
      return Card.find({});
    }
  },
  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };

    }, saveCard: async (parent, { CardToSave }, context) => {
      console.log('CardToSave: ', CardToSave);
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $push: { savedCard: CardToSave } },
          { new: true, runValidators: true }
        );
        return updatedUser;
      }
      throw AuthenticationError;
    },
    removeCard: async (parent, { cardId }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { savedCard: { cardId: cardId } } },
          { new: true }
        );
        return updatedUser;
      }
      throw AuthenticationError;
    },

    addCardToDeck: async (parent, { cardName, cardImage }, context) => {
      if (!context.user) {
        throw new AuthenticationError("You must be logged in!");
      }
      const deck = await Deck.findOne({});
      if (!deck) {
        throw new Error("Deck not found");
      }
      const card = await Card.findById(cardId);
      if (!card) {
        throw new Error("Card not found");
      }
      const existingCard = deck.cards.find(c => c.cardId.toString() === cardId);
      if (existingCard) {
        existingCard.quantity += 1;
      } else {
        deck.cards.push({ cardId: card._id, quantity: 1 });
      }

      await deck.save();

      return deck;
    },

    removeCardFromDeck: async (parent, { cardId }, context) => {

      if (!context.user) {
        throw new AuthenticationError("You must be logged in!");
      }

      const deck = await Deck.findOne({});
      if (!deck) {
        throw new Error("Deck not found");
      }

      deck.cards.pull({ cardId: cardId });

      await deck.save();

      return deck;
    },
  }
};

module.exports = resolvers;
