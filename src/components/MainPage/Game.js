import React from "react";
import "../style folder/start.css";

const Game = () => {
  return (
    <div className="game-boss">
      <h1>Code Game</h1>
      <h2>Help the Lynx collect pine cones!</h2>
      <div
        onClick={() =>
          window.open("https://www.w3schools.com/codegame/index.html")
        }
        className="game-img"
      >
        <img
          src="https://www.w3schools.com/images/w3lynx_200.png"
          alt="Code Game"
        />
      </div>
      <div></div>
    </div>
  );
};

export default Game;
