import React, { useState, useRef } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import PauseIcon from '@mui/icons-material/Pause';

const RadioCard = (station) => {
  const [playing, setPlaying] = useState(false);
  const data = { ...station };
  const audioRef = useRef(new Audio(data.station.url));

  const theme = useTheme();

  const playRadio = (station) => {
    setPlaying(true);
    audioRef.current.play();
  };

  const stopRadio = () => {;
  setPlaying(false);
  audioRef.current.pause();
};

  return (
    <Card sx={{ display: "flex" }}>
      <Box sx={{ display: "flex", flexDirection: "column", mx: "2px" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {data.station.name}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {data.station.tags}
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
          <IconButton aria-label="previous">
            {theme.direction === "rtl" ? (
              <SkipNextIcon />
            ) : (
              <SkipPreviousIcon />
            )}
          </IconButton>

          {!playing ? (
            <IconButton aria-label="play/pause" onClick={playRadio}>
              <PlayArrowIcon sx={{ height: 38, width: 38 }}></PlayArrowIcon>
            </IconButton>
          ) : (
            <IconButton aria-label="stop" onClick={stopRadio}>
              <PauseIcon sx={{ height: 38, width: 38 }}></PauseIcon>
            </IconButton>
          )}
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={data.station.favicon}
        alt={data.station.name}
      />
    </Card>
  );
};

export default RadioCard;
