import React from "react";
import "../style folder/pro.css";
import { FaBeer } from "react-icons/fa";
import { AiFillCheckCircle } from "react-icons/ai";

const Pro = () => {
  return (
    <div className="pro-boss">
      <h1>Become a PRO User</h1>
      <h2>And unlock powerful features:</h2>

      <div className="ads">
        <div className="ad-box">
          <div className="ad-icon">
            <AiFillCheckCircle className="this-icon" />
          </div>
          <div className="ad-text">
            <h2>Browse W3Schools without ads</h2>
          </div>
        </div>
        <div className="ad-box">
          <div className="ad-icon">
            <AiFillCheckCircle className="this-icon" />
          </div>
          <div className="ad-text">
            <h2>Website hosting (Includes Spaces PRO)</h2>
          </div>
        </div>
        <div className="ad-box">
          <div className="ad-icon">
            <AiFillCheckCircle className="this-icon" />
          </div>
          <div className="ad-text">
            <h2>Access to our HTML Video Tutorial</h2>
          </div>
        </div>
      </div>

      <div>
        <h3
          onClick={() => {
            window.open("https://www.w3schools.com/pro/index.php");
          }}
          className="pro-text"
        >
          Learn more
        </h3>
      </div>
    </div>
  );
};

export default Pro;
