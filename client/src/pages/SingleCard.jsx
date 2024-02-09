import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_CARDS } from '../../utils/queries';

const SingleCard = ({ cardId }) => {
    const { cardId } = useParams();

  // Query hook to fetch the card data
  const { loading, error, data } = useQuery(QUERY_CARDS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  const card = data.cards.find(c => c.id === cardId);
  if (!card) return <p>Card not found</p>;

  return (
    <div>
      <h2>{card.name}</h2>
      <img src={card.image_uris.normal} alt={card.name} />
      <p>{card.oracle_text}</p>
      <p>{card.type_line}</p>
    </div>
  );
};

export default SingleCard;