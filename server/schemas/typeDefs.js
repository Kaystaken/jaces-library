const typeDefs = `
  type CardImages {
    png: String
    border_crop: String
    art_crop: String
    large: String
    normal: String
    small: String
  }

  type CardFace {
    _id: ID!
    name: String
    flavor_name: String
    flavor_text: String
    mana_cost: String
    type_line: String
    oracle_text: String
    power: String
    toughness: String
    image_uris: CardImages
  }

  type Card {
    id: String
    layout: String
    rulings_uri: String
    card_faces: [CardFace]
    cmc: Float
    color_identity: [String]
    defense: String
    keywords: [String]
    loyalty: String
    mana_cost: String
    name: String
    oracle_text: String
    power: String
    toughness: String
    type_line: String
    flavor_name: String
    flavor_text: String
    image_uris: CardImages
    rarity: String
    set_name: String
    set: String
  }

  type Collection {
    username: String
    cards: [String]
  }
  
  type Deck {
    username: String
    cards: [String]
    name: String
  }

  type Query {
    cards: [Card]
    collection(username: String): Collection
    decks(username: String): [Deck]
    set(setCode: String): [Card]
    set_list: [String]
  }

  type Mutation {
    addCardToCollection(username: String, cardId: String): Collection
    removeCardFromCollection(username: String, cardId: String): Collection
    addCardToDeck(username: String, name: String, cardId: String): Deck
    removeCardFromDeck(username: String, name: String, cardId: String): Deck
  }
`;

module.exports = typeDefs;
