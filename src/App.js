import React, { useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import { Box } from "@mui/system";
import { Button, Grid, Input } from "@mui/material";
import Footer from "./components/Footer";
import RadioCard from "./components/RadioCard";

function App() {
  const [search, setSearch] = useState("");
  const [list, setList] = useState([]);

  const doSearch = () => {
    const url = `https://de1.api.radio-browser.info/json/stations/byname/${search}`;
    axios
      .get(url)
      .then((response) => setList(response.data))
      .catch((error) => console.log(error));
  };


  return (
    <>
      <div className="container-md">
        <header className="parent">
          <div className="header-container">
            <Header />
          </div>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              my: 4,
            }}
          >
            <Input
              sx={{
                backgroundColor: "#F1EDEE",
                mr: 2,
                borderRadius: 2,
                px: 0.8,
              }}
              disableUnderline
              type="text"
              placeholder="Search radios"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            ></Input>
            <Button sx={{ color: "#474056" }} onClick={doSearch}>
              Search
            </Button>
          </Box>
          <section aria-label="stations-list">
            {list.length > 0 &&
              list.map((station, i) => (
                <Grid
                  key={i}
                  container
                  spacing={1}
                  sx={{
                    flexDirection: "column",
                    padding: 1,
                    maxWidth: "80%",
                    justifyContent: "flex-start",
                  }}
                >
                  <Grid>
                    <RadioCard station={station} key={i} />
                  </Grid>
                </Grid>
              ))}
          </section>
        </header>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
