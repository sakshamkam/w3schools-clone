import React from "react";
import "../style folder/start.css";

const Template = () => {
  return (
    <div className="template-boss">
      <h1>Web Templates</h1>
      <h2>Browse our selection of free responsive HTML Templates</h2>
      <div className="template-img">
        <img
          src="https://www.w3schools.com/w3css_templates.jpg"
          alt="Template"
        />
      </div>
      <div className="template-butt">
        <h2
          onClick={() =>
            window.open("https://www.w3schools.com/w3css/w3css_templates.asp")
          }
        >
          Browse Templates
        </h2>
      </div>
    </div>
  );
};

export default Template;
