import React, { useState } from "react";
import { BottomNavigationAction, BottomNavigation } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FolderIcon from "@mui/icons-material/Folder";

const Footer = () => {
  const [value, setValue] = useState(0);

  return (
    <BottomNavigation
      sx={{ position: "fixed", bottom: 0, width: 1.0 }}
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <BottomNavigationAction label="Recents" icon={<SearchIcon />} />
      <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Nearby" icon={<FolderIcon />} />
    </BottomNavigation>
  );
};

export default Footer;
