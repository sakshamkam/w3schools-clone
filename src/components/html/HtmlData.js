import React from "react";
import { Outlet } from "react-router-dom";

const HtmlData = (props) => {
  // console.log(props);
  return (
    <div className="right-section">
      <h1>{props.title}</h1>
      <div className="html-butt-sec">
        <div className="html-butt">&lt;Prev</div>
        <div className="html-butt">Next&gt;</div>
      </div>
      <div className="studying-sec">
        <div className="right-green">
          <p style={props.gp1 ? { display: "block" } : { display: "none" }}>
            {props.gp1}
          </p>
          <p style={props.gp2 ? { display: "block" } : { display: "none" }}>
            {props.gp2}
          </p>
          <p style={props.gp3 ? { display: "block" } : { display: "none" }}>
            {props.gp3}
          </p>
          <p style={props.gp4 ? { display: "block" } : { display: "none" }}>
            {props.gp4}
          </p>
          <p style={props.gp5 ? { display: "block" } : { display: "none" }}>
            {props.gp5}
          </p>
          <p style={props.gp6 ? { display: "block" } : { display: "none" }}>
            {props.gp6}
          </p>
          <p style={props.gp7 ? { display: "block" } : { display: "none" }}>
            {props.gp7}
          </p>
          <p style={props.gp8 ? { display: "block" } : { display: "none" }}>
            {props.gp8}
          </p>
        </div>

        <div className="right-try">
          <div className="right-text-box grey-back">
            <h1>Example</h1>
            <img
              style={
                props.imgexample
                  ? { display: "block", padding: "2rem" }
                  : { display: "none" }
              }
              src={props.imgexample}
              alt="header pic"
            />
            <p
              style={props.example ? { display: "block" } : { display: "none" }}
            >
              {props.example}
            </p>
            <div className="right-text-try">Try it Yourself</div>
          </div>
        </div>

        <div className="right-optional-green"></div>

        <div className="right-white-paras">
          <p style={props.wp1 ? { display: "block" } : { display: "none" }}>
            {props.wp1}
          </p>
          <p style={props.wp2 ? { display: "block" } : { display: "none" }}>
            {props.wp2}
          </p>
          <p style={props.wp3 ? { display: "block" } : { display: "none" }}>
            {props.wp3}
          </p>
          <p style={props.wp4 ? { display: "block" } : { display: "none" }}>
            {props.wp4}
          </p>
          <p style={props.wp5 ? { display: "block" } : { display: "none" }}>
            {props.wp5}
          </p>
          <p style={props.wp6 ? { display: "block" } : { display: "none" }}>
            {props.wp6}
          </p>
          <p style={props.wp7 ? { display: "block" } : { display: "none" }}>
            {props.wp7}
          </p>
          <p style={props.wp8 ? { display: "block" } : { display: "none" }}>
            {props.wp8}
          </p>
        </div>

        <div className="right-optional-try"></div>
      </div>
      <div className="html-butt-sec">
        <div className="html-butt" style={{ userSelect: "none" }}>
          &lt;Prev
        </div>
        <div className="html-butt" style={{ userSelect: "none" }}>
          Next&gt;
        </div>
      </div>

      <Outlet />
    </div>
  );
};

export default HtmlData;
