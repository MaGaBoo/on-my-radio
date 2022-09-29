import React, { useState, useEffect } from "react";
import axios from "axios";
import { IoPlay, IoStop } from "react-icons/io5";
import MainButton from "./components/MainButton";

function App() {
  const [search, setSearch] = useState("");
  const [list, setList] = useState([]);
  const url = `https://de1.api.radio-browser.info/json/stations/byname/${search}`;
  
useEffect(()=> {
  axios.get(url)
  .then((results) => {
    setList(results.data)
/*   .catch((error) => console.log(error)) */
  })
}, [url]);

  const playRadio = (radio) => {
    const audio = new Audio(radio.url);
    audio.play();
  };

  return (
    <div className="container-md">
      <header className="parent">
        <div className="container">
          <h1>
            <span className="text center">OnMyRadio</span>
          </h1>
        </div>

        <input
          type="text"
          placeholder="Search radios"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        ></input>
        <MainButton onClick={ list ? list : <p>Loading...</p> }>
          Search
        </MainButton>

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
  );
}

export default App;

//Foto de <a href="https://unsplash.com/@rexcuando?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Eric Nopanen</a> en <a href="https://unsplash.com/es/s/fotos/radio?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
