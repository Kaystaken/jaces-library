import { Stack, TextField, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useLazyQuery } from '@apollo/client';
import { useState } from 'react';

import { SEARCH_CARDS } from '../utils/queries';
import { SingleCardDisplay } from '../components/SingleCardDisplay';

function SingleCard() {
  const [performSearch, { loading, data }] = useLazyQuery(SEARCH_CARDS);
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (changeEvent) => {
    setSearchTerm(changeEvent.target.value);
  };

  const handleKeyUp = (event) => {
    if (event.key === 'Enter') {
      searchCards();
    }
  }
  const searchCards = () => {
    performSearch({ variables: { searchTerm }});
  };

  return (
    <Stack spacing={2}>
      <Stack direction='row' spacing={1}>
        <TextField id='card-search' value={searchTerm} onKeyUp={handleKeyUp} onChange={handleChange} label='Card name' variant='outlined' size='small' />
        <Button onClick={searchCards} variant='contained' size='small'>
          <SearchIcon />Search
        </Button>
      </Stack>
      {
        (!loading && data) && 
        data.searchCards.map(card => {
          if (!card.image_uris) { return null; }
          return <SingleCardDisplay key={card.id} {...getCardDisplayData(card)} />;
        })
      }
    </Stack>
  );
}

function getCardDisplayData(card) {
  return {
    imageUri: card.image_uris.normal,
    name: card.name,
    oracleText: card.oracle_text,
    typeLine: card.type_line
  };
}

export { SingleCard };