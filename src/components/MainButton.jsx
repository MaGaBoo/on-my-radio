import React from 'react';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';

 const MainButton = () => {
  return (
    <div>
        <Button variant="contained" startIcon={<SearchIcon />}>
            Search
        </Button>
    </div>

  )
}

export default MainButton;