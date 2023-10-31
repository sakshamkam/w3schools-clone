import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({ setResults }) => {
  const [search, setSearch] = useState("");

  const fetchData = (value) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((user) => {
          return (
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value)
          );
        });
        setResults(results);
      });
  };

  const handleChange = (value) => {
    setSearch(value); //changes the data in search
    fetchData(value); //searches the value in jsonPlaceHolder
  };
  return (
    <>
      <div className="search-divide s-left">
        <input
          type="text"
          placeholder="Search our tutorials, e.g. HTML"
          name="search"
          value={search}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
      <div className="search-divide s-right">
        <FontAwesomeIcon
          className="search-icon"
          icon={faMagnifyingGlass}
          size="xs"
        />
      </div>
    </>
  );
};

export default SearchBar;
