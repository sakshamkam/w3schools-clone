import React from "react";
import "../style folder/subColor.css";
import "../style folder/learn.css";

const Learn = () => {
  return (
    <div>
      <div className="empty"></div>
      <div className="learn-boss">
        <div className="learn-sub-boss">
          <div className="learn-box pink-back">
            <h1>PHP</h1>
            <h3>A web server programming language</h3>

            <div className="learn-button">
              <h4>Learn PHP</h4>
            </div>
          </div>
          <div className="learn-box yellow-back">
            <h1>jQuery</h1>
            <h3>A JS library for developing web pages</h3>
            <div className="learn-button">
              <h4>Learn jQuery</h4>
            </div>
          </div>
          <div className="learn-box w1">
            {" "}
            <h1>Java</h1>
            <h3>A programming language</h3>
            <div className="learn-button">
              <h4>Learn jQuery</h4>
            </div>
          </div>
          <div className="learn-box w2">
            {" "}
            <h1>C++</h1>
            <h3>A programming language</h3>
            <div className="learn-button">
              <h4>Learn jQuery</h4>
            </div>
          </div>
          <div className="learn-box w3">
            {" "}
            <h1>W3.CSS</h1>
            <h3>A CSS framework for faster and better responsive web pages</h3>
            <div className="learn-button">
              <h4>Learn jQuery</h4>
            </div>
          </div>
          <div className="learn-box w1">
            {" "}
            <h1>Bootstrap</h1>
            <h3>A CSS framework for designing better web pages</h3>
            <div className="learn-button">
              <h4>Learn jQuery</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learn;
