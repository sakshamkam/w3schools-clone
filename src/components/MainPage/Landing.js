import React, { useState } from "react";
import "../style folder/Landing.css";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

const Landing = () => {
  const white = { color: "white" };
  const another = { color: "#fff4a3" };
  const [first, setFirst] = useState(white);

  const [results, setResults] = useState([]);

  return (
    <>
      <div className="div-one">
        <h1 className="divh1">Learn to Code</h1>
        <h2>With the world's largest web developer site.</h2>
        <div className="search-result-container">
          <div className="search-container">
            <div className="search-box">
              <SearchBar setResults={setResults} />
            </div>
          </div>

          <div className="result-container">
            <SearchResults results={results} />
          </div>
        </div>

        <h2
          className="search-anchor"
          onMouseEnter={() => setFirst(another)}
          onMouseLeave={() => setFirst(white)}
          style={first}
        >
          Not Sure Where To Begin?
        </h2>
      </div>

      <div className="astrodiv">
        <img
          src="https://www.w3schools.com/images/lynx_in_space.png"
          alt="astronaut"
        />
      </div>
    </>
  );
};

export default Landing;
