import React from 'react';
import { useQuery } from '@apollo/client';
import { Box, Unstable_Grid2 as Grid, Typography } from '@mui/material';

import { GET_SAVED_CARDS } from '../utils/queries'; 
import { SingleCardDisplay } from '../components/SingleCardDisplay';

const SavedCollection = () => {
  const { loading, data } = useQuery(GET_SAVED_CARDS);

  if (loading) {
    return null;
  }

  function getCardDisplayData(card) {
    return {
      id: card.id,
      imageUri: card.image_uris?.normal,
      name: card.name,
      oracleText: card.oracle_text,
      typeLine: card.type_line
    };
  }

  return (
    <Box>
      <Typography variant='h2'>Saved Collection</Typography>
      <Grid container spacing={2}>
        {(data.collection ?? []).map(card => 
          <Grid xs={12} sm={6} md={4} lg={3} key={card.id}>
            <SingleCardDisplay key={card.id} {...getCardDisplayData(card)} />
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default SavedCollection;