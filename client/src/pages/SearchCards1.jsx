import { Button, Stack, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useQuery } from '@apollo/client';

import { QUERY_CARDS } from '../utils/queries';
import { SingleCardDisplay } from '../components/SingleCardDisplay';

function SearchCards() {
  const { loading, data } = useQuery(QUERY_CARDS);

  return (
    <Stack spacing={2}>
      <Stack direction='row' spacing={1}>
        <TextField id='card-search' label='Card name' variant='outlined' size='small' />
        <Button variant='contained' size='small'><SearchIcon />Search</Button>
      </Stack>
      {
        (!loading && data) && 
        <SingleCardDisplay {...getCardDisplayData(data.cards[10000])} />
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

export { SearchCards };