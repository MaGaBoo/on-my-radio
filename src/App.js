import React, { useState } from "react";
import axios from "axios";
import { IoPlay, IoStop } from "react-icons/io5";
import MainButton from "./components/MainButton";
import Header from "./components/Header";
import { Box } from "@mui/system";
import { Input } from "@mui/material";
import Footer from "./components/Footer";

function App() {
  const [search, setSearch] = useState("");
  const [list, setList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  const url = `https://de1.api.radio-browser.info/json/stations/byname/${search}`;

  const doSearch = () => {
    axios.get(url).then((results) => {
      setList(results.data).catch((error) => setErrorMessage(error));
    });
  };

  const playRadio = (radio) => {
    const audio = new Audio(radio.url);
    audio.play();
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
            <MainButton onClick={!list ? <p>Loading...</p> : () => doSearch}>
              Search
            </MainButton>
          </Box>
          <section aria-label="stations-list">
            {list.length > 0 && <div aria-label="length-not-null"></div>}
            {list.map((station, i) => (
              <div key={i}>
                {station.name}{" "}
                <IoPlay className="ioPlay" onClick={() => playRadio(station)} />
                <IoStop className="iostop" />
              </div>
            ))}
          </section>
        </header>
      </div>
      <Footer>
        
      </Footer>
    </>
  );
}

export default App;
