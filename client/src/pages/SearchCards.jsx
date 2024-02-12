import React from 'react';
import { Grid } from '@mui/material';
import { useLazyQuery } from '@apollo/client';

import { useParams } from 'react-router-dom';
import { SEARCH_CARDS } from '../utils/queries';
import { SingleCardDisplay } from '../components/SingleCardDisplay';

const ResultsPage = () => {
  const { searchTerm } = useParams();
  const decodedSearchTerm = decodeURIComponent(searchTerm);
  const [performSearch, { loading, data }] = useLazyQuery(SEARCH_CARDS);

  React.useEffect(() => {
    performSearch({ variables: { searchTerm: decodedSearchTerm } });
  }, [performSearch, decodedSearchTerm]);

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
    <div>
      <h1> Results for "{decodedSearchTerm}"</h1>
      <Grid container spacing={2}>
      {
        !loading && data && data.searchCards.map(card => {
          if (!card.image_uris) { return null; }
          return (
        <Grid item xs={12} sm={6} md={4} lg={3} key={card.id}>
          <SingleCardDisplay key={card.id} {...getCardDisplayData(card)} />
        </Grid>
          );  
        })
      }
      </Grid>
    </div>
  );
};



export default ResultsPage
