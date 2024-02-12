import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_CARD_DETAILS } from '../utils/queries';

const Details = () => {
  const { cardId } = useParams();
    console.log(cardId)
  const { loading, error, data } = useQuery(GET_CARD_DETAILS, {
    variables: { cardId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { image_uris, name, oracle_text, type_line } = data.cardDetails;

  return (
    <div>
      <h1>{name}</h1>
      <img src={image_uris?.normal} alt={name} />
      <p>{oracle_text}</p>
      <p>{type_line}</p>
    </div>
  );
};

export default Details;