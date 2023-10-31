import React from "react";
import { useState } from "react";

const TopSearch = ({ setResults }) => {
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
    setSearch(value);
    fetchData(value);
  };
  return (
    <>
      <input
        type="text"
        name="search"
        placeholder="Search..."
        value={search}
        onChange={(e) => handleChange(e.target.value)}
      />
    </>
  );
};

export default TopSearch;
