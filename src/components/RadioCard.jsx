import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

const RadioCard = (station) => {
  const theme = useTheme();
  const data = {...station}
  return (
    <Card sx={{ display: "flex" }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto"}}>
            <Typography component="div" variant="h5">
            {data.station.name}
            </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

export default RadioCard;
