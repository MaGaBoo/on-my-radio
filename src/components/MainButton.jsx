import React from 'react';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';

 const MainButton = () => {
  return (
    <div>
        <Button sx={{ backgroundColor: "#DD7230" }} hover={{ backgroundColor: "#E8A073" }} variant="contained" startIcon={<SearchIcon />}>
            Search
        </Button>
    </div>

  )
}

export default MainButton;