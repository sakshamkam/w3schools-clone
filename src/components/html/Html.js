import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../../Navbar";
import "../style folder/courses.css";
import HtmlData from "./HtmlData";
// import home from "./Html-DataFiles/htmlhome.json";
import HtmlLeft from "./HtmlLeft";

const Html = () => {
  return (
    <div>
      {/* <Navbar /> */}

      {/* <div className="html-upper-boss"> */}
      {/* <HtmlLeft /> */}
      {/* <Link to={"/html/html-tutorial"} style={{ fontSize: "2rem" }}>
        click me
      </Link> */}

      {/* <HtmlData {...home} /> */}
      {/* </div> */}

      <Outlet />
    </div>
  );
};

export default Html;
