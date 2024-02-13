import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_RANDOM_COMMANDER } from '../utils/queries';
import {Card, CardContent, Typography, Grid, Box} from '@mui/material'
import { SingleCardDisplay } from '../components/SingleCardDisplay';
import { Container } from '@mui/system';

const RandomCommanderList = () => {
  const { loading, data } = useQuery(GET_RANDOM_COMMANDER);
  
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
  <Container>
    <Box 
    component="h1"
    sx={{
      bgcolor: 'primary.main',
      py:2,
      px: 4,
      height: '100%',
      width: '100%'
    }}>
      Looking for a new commander? Try one of these:</Box>
      <Grid container spacing={2}>
      {
        !loading && data && data.randomCommanders.map(card => {
          if (!card.image_uris) { return null; }
          return (
            <Grid xs={12} sm={6} md={4} lg={3} key={card.id}>
              <SingleCardDisplay key={card.id} {...getCardDisplayData(card)} />
            </Grid>
          );  
        })
      }
      </Grid>
    </Container>
  );
};

export default RandomCommanderList;