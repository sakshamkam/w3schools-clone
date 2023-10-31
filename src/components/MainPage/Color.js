import React from "react";
import "../style folder/start.css";

const Color = () => {
  return (
    <div className="color-boss">
      <h1>Color Picker</h1>
      <h2>W3Schools' famous color picker:</h2>
      <div
        onClick={() =>
          window.open("https://www.w3schools.com/colors/colors_picker.asp")
        }
        className="color-img"
      >
        <img
          src="https://www.w3schools.com/images/colorpicker.png"
          alt="Color picker"
        />
      </div>
    </div>
  );
};

export default Color;
