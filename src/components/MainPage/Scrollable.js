import React, { useRef, useState } from "react";
import "../style folder/scrollable.css";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const Scrollable = () => {
  const reference = useRef(null);
  const scrollPlus = (ele, offSet) => {
    ele.scrollLeft += offSet;
  };

  const navigate = useNavigate();

  return (
    <div className="scrollable-boss">
      {" "}
      <div className="scrollable-container">
        <div
          className="left-arrow active"
          onMouseDown={() => scrollPlus(reference.current, -200)}
        >
          <AiOutlineLeft className="arrow" />
        </div>
        <div className="outer-scroll">
          <ul className="scrollable-div" ref={reference}>
            <Link className="lili" to={"/html/html-01"}>
              <p>HTML</p>
            </Link>
            <li>
              <p>CSS</p>
            </li>
            <li>
              <p>JAVASCRIPT</p>
            </li>
            <li>
              <p>SQL</p>
            </li>
            <li>
              <p>PYTHON</p>
            </li>
            <li>
              <p>JAVA</p>
            </li>
            <li>
              <p>PHP</p>
            </li>
            <li>
              <p>HOW TO</p>
            </li>
            <li>
              <p>W3.CSS</p>
            </li>
            <li>
              <p>C</p>
            </li>
            <li>
              <p>C++</p>
            </li>
            <li>
              <p>C#</p>
            </li>
            <li>
              <p>BOOTSTRAP</p>
            </li>
            <li>
              <p>REACT</p>
            </li>
            <li>
              <p>MYSQL</p>
            </li>
            <li>
              <p>JQUERY</p>
            </li>
            <li>
              <p>EXCEL</p>
            </li>
            <li>
              <p>XML</p>
            </li>
            <li>
              <p>DJANGO</p>
            </li>
            <li>
              <p>NODE.JS</p>
            </li>
            <li>
              <p>R</p>
            </li>
            <li>
              <p>TYPESCRIPT</p>
            </li>
            <li>
              <p>ANGULAR</p>
            </li>
            <li>
              <p>GIT</p>
            </li>
            <li>
              <p>POSTGRESQL</p>
            </li>
            <li>
              <p>MONGODB</p>
            </li>
            <li>
              <p>ASP</p>
            </li>
            <li>
              <p>AWS</p>
            </li>
            <li>
              <p>AI</p>
            </li>
            <li>
              <p>GO</p>
            </li>
            <li>
              <p>KOTLIN</p>
            </li>
            <li>
              <p>SASS</p>
            </li>
            <li>
              <p>VUE</p>
            </li>
            <li>
              <p>GEN AI</p>
            </li>
            <li>
              <p>CYBERSECURITY</p>
            </li>
            <li>
              <p>DATA SCIENCE</p>
            </li>
          </ul>
        </div>
        <div
          onMouseDown={() => scrollPlus(reference.current, 200)}
          // onMouseUp={() => stop()}
          // onMouseLeave={() => stop()}
          className="right-arrow active"
        >
          <AiOutlineRight className="arrow" />
        </div>
      </div>
    </div>
  );
};

export default Scrollable;
