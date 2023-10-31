import React from "react";

const TopResult = ({ results }) => {
  const check =
    typeof results != "undefined" &&
    results != null &&
    results.length != null &&
    results.length > 0;

  console.log(results + check);
  return (
    <div
      style={check ? { display: "block" } : { display: "none" }}
      className="result top-result"
    >
      {results.map((result, id) => {
        return <h2 key={id}>{result.name}</h2>;
      })}
    </div>
  );
};

export default TopResult;
