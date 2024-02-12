import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_CARD_DETAILS } from '../utils/queries';
import { Container, Grid, Typography } from '@mui/material';

const Details = () => {
  const { cardId } = useParams();
    console.log(cardId)
  const { loading, error, data } = useQuery(GET_CARD_DETAILS, {
    variables: { cardId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const {image_uris, name, oracle_text, type_line } = data.cardDetails;

  return (
    <Container>
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <img src={image_uris?.normal} alt={name} style={{ width: '100%' }} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant="h4">{name}</Typography>
        <Typography paragraph>{type_line}</Typography>
        <Typography paragraph>{oracle_text}</Typography>
      </Grid>
    </Grid>
  </Container>
  );
};

export default Details;