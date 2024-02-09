import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_SAVED_CARDS } from '../../utils/queries'; 

const SavedCollection = () => {

  const { loading, error, data } = useQuery(GET_SAVED_CARDS);

 e
  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error</p>;

  return (
    <div>
      <h2>Saved Collection</h2>
      <ul>
        {data.savedCards.map(card => (
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

export default SavedCollection;