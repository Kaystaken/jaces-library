import * as React from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { useMutation, useQuery } from '@apollo/client';

import { ADD_TO_COLLECTION, REMOVE_FROM_COLLECTION } from '../utils/mutations';
import { GET_SAVED_CARDS } from '../utils/queries'; 

function SingleCardDisplay({ id,imageUri, name, oracleText, typeLine }) {
  const { data } = useQuery(GET_SAVED_CARDS);
  const [addToCollection] = useMutation(ADD_TO_COLLECTION, {
    refetchQueries: [{ query: GET_SAVED_CARDS }],
  });
  const [removeFromCollection] = useMutation(REMOVE_FROM_COLLECTION, {
    refetchQueries: [{ query: GET_SAVED_CARDS }],
  });

  let hasCard = false;
  if (data) {
    const cardIds = data.collection.map(card => card.id);
    hasCard = cardIds.includes(id);
  }

  const addCardToCollection = async () => {
    await addToCollection({
      variables: { cardId: id }
    });
  };

  const removeCardFromCollection = async () => {
    await removeFromCollection({
      variables: { cardId: id }
    });
  };

  return (
    <Card sx={{
      maxWidth: 300,
      margin: "0 auto",
      padding: 1,
    }}>
      <CardMedia
        component='img'
        sx={{ objectFit: 'scale-down' }}
        image={imageUri}
        title={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography gutterBottom variant="body2" component="div">
          {typeLine}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          dangerouslySetInnerHTML={{ __html: transformOracleText(oracleText) }}
        />
      </CardContent>
      <CardActions>
        {
          hasCard ?
          <Button size="small" color="error" onClick={removeCardFromCollection}>Remove from Collection</Button> :
          <Button size="small" onClick={addCardToCollection}>Add to Collection</Button>
        }
        <Button size="small">Add to Deck</Button>
      </CardActions>
    </Card>
  );
}

function transformOracleText(oracleText) {
  const regex = /({\w+})/;
  console.log('oracle text:', oracleText);
  const tokens = oracleText.split(regex);

  return tokens.map(token => {
    const captureRegex = /[^{\}]+(?=})/;
    const symbol = token.match(captureRegex);
    if (!symbol) { return token; }
    let symbolUsed = symbol[0].toLowerCase();
    symbolUsed = symbolUsed === 't' ? 'tap' : symbolUsed;
    return `<i class='ms ms-cost ms-${symbolUsed}'></i>`;
  }).join('');
}

export { SingleCardDisplay };