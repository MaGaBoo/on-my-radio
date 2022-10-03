import React, { useState } from "react";
import axios from "axios";
import { IoPlay } from "react-icons/io5";
import MainButton from "./components/MainButton";
import Header from "./components/Header";
import { Box } from "@mui/system";
import { Input } from "@mui/material";
import Footer from "./components/Footer";

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
              onChange={e => setSearch(e.target.value)}
            ></Input>
            <button onClick={doSearch}>Search</button>
          </Box>
          <section aria-label="stations-list">
            {list.length > 0 &&
              list.map((station, i) => (
                <ul key={i}>
                  <li>{station.name}</li>
                  <IoPlay
                    className="ioPlay"
                    onClick={() => playRadio(station)}
                  />
                </ul>
              ))}
          </section>
        </header>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
