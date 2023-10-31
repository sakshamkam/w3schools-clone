import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../Navbar";
import "../style folder/courses.css";
import HtmlData from "./HtmlData";
import home from "./Html-DataFiles/html02.json";
import HtmlLeft from "./HtmlLeft";

const Html02 = () => {
  return (
    <div>
      <Navbar />

      <div className="html-upper-boss">
        <HtmlLeft />

        <HtmlData {...home} />
      </div>

      <Outlet />
    </div>
  );
};

export default Html02;
