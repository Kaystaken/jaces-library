import React from 'react';
import { useQuery } from '@apollo/client';
import { DECK_QUERY } from '../../utils/queries'; 

const DeckPage = () => {
 
  const { loading, error, data } = useQuery(DECK_QUERY);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error</p>;

  const { deck } = data;

  return (
    <div>
      <h2>{deck.name}</h2>
      <ul>
        {deck.cards.map((card) => (
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

export default DeckPage;
