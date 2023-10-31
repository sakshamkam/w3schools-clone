import React from "react";
import "../style folder/subColor.css";

const SubCom = (props) => {
  return (
    <div
      style={{ backgroundColor: props.backgroundColor }}
      className="subject-upper-boss"
    >
      <div className="subject-boss">
        <div className="subject-boxes sub-box-left">
          <h1 style={{ color: props.headColor }}>{props.divName}</h1>
          <h3 style={{ marginBottom: "4rem", color: props.headColor }}>
            {props.divSlogan}
          </h3>

          {/* {<p style={{ fontSize: "10rem" }}>{props.backgroundColor}</p>} */}

          <div style={{ height: "40%" }} className="subject-buttons">
            <div
              style={{ backgroundColor: props.b1c, color: props.c1 }}
              className="subject-butt"
            >
              {props.b1}
            </div>
            <div
              style={{ backgroundColor: props.b2c, color: props.c2 }}
              className="subject-butt"
            >
              {props.b2}
            </div>
            <div
              style={{ backgroundColor: props.b3c, color: props.c3 }}
              className="subject-butt"
            >
              {props.b3}
            </div>
          </div>
        </div>
        <div className="subject-boxes sub-box-right grey-back">
          <h2>{props.divName} Example:</h2>

          <div className="text-box">
            <p style={{ whiteSpace: "pre-line" }}>{props.paraText}</p>
          </div>

          <div className="sub-try">
            <div onClick={() => window.open(`${props.link}`)} className="try">
              Try it yourself
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubCom;
