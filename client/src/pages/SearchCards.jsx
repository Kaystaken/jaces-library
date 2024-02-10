import { Stack, TextField, Button, Grid, Box, Paper, Container } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useQuery } from '@apollo/client';
import Sidebar from '../components/SideBar'
import { QUERY_CARDS } from '../utils/queries';
// import { SingleCardDisplay } from '../components/SingleCardDisplay';

function SearchCards() {
  const { loading, data } = useQuery(QUERY_CARDS);

  return (
    <>
        <Stack>
          <Sidebar/>
        </Stack>
      {/* <Stack spacing={2}>
        <Stack direction='row' spacing={2}>
          <TextField id='card-search' label='Card name' variant='outlined' size='small' />
          <Button variant='contained' size='small'><SearchIcon />Search</Button>
        </Stack>
        {/* {
        (!loading && data) && 

        <SingleCardDisplay {...getCardDisplayData(data.cards[10000])} />
      } */}

     {/* </Stack> */}
    </>
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