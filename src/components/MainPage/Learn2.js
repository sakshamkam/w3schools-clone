import React from "react";

const Learn2 = (props) => {
  return (
    <div className="learn-boss-2">
      <div className="learn-sub-boss-2">
        <div className="learn-box-2 pink-back pb1">
          <h1>{props.first}</h1>
        </div>
        <div className="learn-box-2 yellow-back yb2">
          <h1>{props.second}</h1>
        </div>
      </div>
    </div>
  );
};

export default Learn2;
