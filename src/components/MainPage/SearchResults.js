import React from "react";

const SearchResults = ({ results }) => {
  const check =
    typeof results != "undefined" &&
    results != null &&
    results.length != null &&
    results.length > 0;

  return (
    <div
      style={check ? { display: "block" } : { display: "none" }}
      className="result"
    >
      {results.map((result, id) => {
        return <h2 key={id}>{result.name}</h2>;
      })}
    </div>
  );
};

export default SearchResults;
