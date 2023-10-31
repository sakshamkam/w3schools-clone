import React from "react";
import "../style folder/start.css";

const Exercise = () => {
  return (
    <div className="exercise-boss black-back">
      <h1>Exercises and Quizzes</h1>
      <h2>Test your skills!</h2>
      <div className="exercise-buttons">
        <div
          onClick={() =>
            window.open("https://www.w3schools.com/exercises/index.php")
          }
          className="exercise-butt green-back eb1"
        >
          Exercise
        </div>
        <div
          onClick={() =>
            window.open("https://www.w3schools.com/quiztest/default.asp")
          }
          className="exercise-butt yellow-back eb2"
        >
          Quizzes
        </div>
      </div>
    </div>
  );
};

export default Exercise;
