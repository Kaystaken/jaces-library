import { Box, TextField, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useLazyQuery } from '@apollo/client';
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom'
import { SEARCH_CARDS } from '../utils/queries';
import { SingleCardDisplay } from '../components/SingleCardDisplay';

export function SearchBar() {
    const [performSearch, { loading, data }] = useLazyQuery(SEARCH_CARDS);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate()

    const handleChange = (changeEvent) => {
        setSearchTerm(changeEvent.target.value);
    };

    const handleKeyUp = (event) => {
        if (event.key === 'Enter') {
            searchCards();
        }
    }
    const searchCards = () => {
        performSearch({ variables: { searchTerm } });
        navigate(`/results/${encodeURIComponent(searchTerm)}`)
    };

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                zIndex: 1000,
                mr: 1,
                '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                        borderColor: 'white',
                    },
                    '&:hover fieldset': {
                        borderColor: 'white',
                    },
                    '&.Mui-focused fieldset': {
                        borderColor: 'white',
                    },
                },
                '& .MuiOutlinedInput-input': {
                    color: 'white',
                },
                '& .MuiInputLabel-root': {
                    color: 'white',
                },
                '& .MuiInputLabel-root.Mui-focused': {
                    color: 'white',
                },
            }}
        >

            <TextField id='card-search' value={searchTerm} onKeyUp={handleKeyUp} onChange={handleChange} label='Card Search' variant='outlined' size='small' />
            <Button onClick={searchCards} variant='contained' size='small' sx={{
                ml: 1, width: 'auto',
                padding: '6px  12px',
                minWidth: 'fit-content',
            }}>
                <SearchIcon />
        </Button>

        </Box >
    );
}

export default SearchBar;
