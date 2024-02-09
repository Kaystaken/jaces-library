const { Card, Collection, Deck, User } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    cards: async () => {
      return Card.find({});
    },
    collection: async (parent, { username }) => {
      return Collection.findOne({ username });
    },
    decks: async (parent, { username }) => {
      return Deck.find({ username });
    },
    set: async (parent, args) => {
      return Card.find({ set: args.setCode });
    },
    set_list: async () => {
      return Card.distinct('set');
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw AuthenticationError;
    },
  },
  Mutation: {
    login: async (parent, { email, password }) => {
      console.log('is this a thing')
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
    },
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);

      return { token, user };
    },
    addCardToCollection: async (parent, { username, cardId }) => {
      // If context has a `user` property, that means the user executing this mutation has a valid JWT and is logged in
      if (context.user) {
        return await Collection.findOneAndUpdate(
          { username },
          {
            $addToSet: { cards: cardId },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      // If user attempts to execute this mutation and isn't logged in, throw an error
      throw AuthenticationError;
    },
    removeCardFromCollection: async (parent, { username, cardId }) => {
      return Collection.findOneAndUpdate(
        { username },
        { $pull: { cards: cardId } },
        { new: true }
      );
    },
    addCardToDeck: async (parent, { username, name, cardId }) => {
      // If context has a `user` property, that means the user executing this mutation has a valid JWT and is logged in
      if (context.user) {
        return await Deck.findOneAndUpdate(
          { username, name },
          {
            $addToSet: { cards: cardId },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      // If user attempts to execute this mutation and isn't logged in, throw an error
      throw AuthenticationError;
    },
    removeCardFromDeck: async (parent, { username, name, cardId }) => {
      return Deck.findOneAndUpdate(
        { username, name },
        { $pull: { cards: cardId } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
