import React from 'react';
import { useQuery } from '@apollo/client';
import { DECK_QUERY } from '../utils/queries'; 

const Deck = () => {
 
  const { loading, error, data } = useQuery(DECK_QUERY);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error</p>;

  const { decks } = data;

  return (
    <div>
      <ul>
        {decks.cards.map((card) => (
          <li key={card.cardId}>
            <h3>{card.name}</h3>
            <img src={card.image} alt={card.name} />
            <p>{card.oracle_text}</p>
           
          </li>
        ))}
      </ul>
    </div>
  );
};

export { Deck };
