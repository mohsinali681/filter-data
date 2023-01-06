import { useState } from "react";
import "./App.css";
import Data from "./Data.json";
import React from "react";

function App() {
  const [searchbar, setSearchBar] = useState(" ");

  return (
    <div className='filter-data'>
      <input
        type='text'
        placeholder='search'
        id='search-bar'
        onChange={(event) => {
          setSearchBar(event.target.value);
        }}
      />
      {Data.filter((val) => {
        if (searchbar === "") {
          return val;
        } else if (val.name.toLowerCase().includes(searchbar.toLowerCase())) {
          return val;
        }
      }).map((val, key) => {
        return (
          <div>
            <p key={key}>{val.name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
