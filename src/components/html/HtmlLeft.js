import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

const HtmlLeft = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="html-menu-butt" onClick={() => setShow(!show)}>
        <AiOutlineMenu style={{ height: "3rem", width: "3rem" }} />
      </div>

      {show && (
        <div className="html-boss">
          <h1>HTML Tutorial</h1>
          <NavLink style={{ textDecoration: "none" }} to="/html/html-01">
            <p>HTML Home</p>
          </NavLink>
          <NavLink style={{ textDecoration: "none" }} to="/html/html-02">
            <p>HTML Introductions</p>
          </NavLink>
          <NavLink style={{ textDecoration: "none" }} to="/html/html-03">
            <p>HTML Editors</p>
          </NavLink>
          <NavLink style={{ textDecoration: "none" }} to="/html/html-04">
            <p>HTML Basic</p>
          </NavLink>
          <NavLink style={{ textDecoration: "none" }} to="/html/html-05">
            <p>HTML Elements</p>
          </NavLink>
          <NavLink style={{ textDecoration: "none" }} to="/html/html-06">
            <p>HTML Attributes</p>
          </NavLink>
          <NavLink style={{ textDecoration: "none" }} to="/html/html-07">
            <p>HTML Headings</p>
          </NavLink>
          <NavLink style={{ textDecoration: "none" }} to="/html/html-08">
            <p>HTML Paragraphs</p>
          </NavLink>
          <NavLink style={{ textDecoration: "none" }} to="/html/html-09">
            <p>HTML Styles</p>
          </NavLink>
          <NavLink style={{ textDecoration: "none" }} to="/html/html-10">
            <p>HTML Formatting</p>
          </NavLink>
          <NavLink style={{ textDecoration: "none" }} to="/html/html-11">
            <p>HTML Quotations</p>
          </NavLink>
          <NavLink style={{ textDecoration: "none" }} to="/html/html-12">
            <p>HTML Comments</p>
          </NavLink>
          <NavLink style={{ textDecoration: "none" }} to="/html/html-13">
            <p>HTML Colors</p>
          </NavLink>
          <NavLink style={{ textDecoration: "none" }} to="/html/html-14">
            <p>HTML CSS</p>
          </NavLink>
          <NavLink style={{ textDecoration: "none" }} to="/html/html-15">
            <p>HTML Links</p>
          </NavLink>
          <NavLink style={{ textDecoration: "none" }} to="/html/html-16">
            <p>HTML Images</p>
          </NavLink>
          <NavLink style={{ textDecoration: "none" }} to="/html/html-17">
            <p>HTML Favicon</p>
          </NavLink>
          <NavLink style={{ textDecoration: "none" }} to="/html/html-18">
            <p>HTML PageTitle</p>
          </NavLink>
          <NavLink style={{ textDecoration: "none" }} to="/html/html-19">
            <p>HTML Tables</p>
          </NavLink>
          <NavLink style={{ textDecoration: "none" }} to="/html/html-20">
            <p>HTML List</p>
          </NavLink>
          <NavLink style={{ textDecoration: "none" }} to="/html/html-21">
            <p>HTML Block & Inline</p>
          </NavLink>
          <NavLink style={{ textDecoration: "none" }} to="/html/html-22">
            <p>HTML Classes</p>
          </NavLink>
          <NavLink style={{ textDecoration: "none" }} to="/html/html-23">
            <p>HTML Id</p>
          </NavLink>
          <NavLink style={{ textDecoration: "none" }} to="/html/html-24">
            <p>HTML Iframes</p>
          </NavLink>
          <NavLink style={{ textDecoration: "none" }} to="/html/html-25">
            <p>HTML JavaScript</p>
          </NavLink>
          <NavLink style={{ textDecoration: "none" }} to="/html/html-26">
            <p>HTML File Paths</p>
          </NavLink>
          <NavLink style={{ textDecoration: "none" }} to="/html/html-27">
            <p>HTML Head</p>
          </NavLink>
          <NavLink style={{ textDecoration: "none" }} to="/html/html-28">
            <p>HTML Layout</p>
          </NavLink>
          <NavLink style={{ textDecoration: "none" }} to="/html/html-29">
            <p>HTML Responsive</p>
          </NavLink>
          <NavLink style={{ textDecoration: "none" }} to="/html/html-30">
            <p>HTML ComputerCode</p>
          </NavLink>
          <NavLink style={{ textDecoration: "none" }} to="/html/html-31">
            <p>HTML Semantics</p>
          </NavLink>
          <NavLink style={{ textDecoration: "none" }} to="/html/html-32">
            <p>HTML Style Guide</p>
          </NavLink>
          <NavLink style={{ textDecoration: "none" }} to="/html/html-33">
            <p>HTML Entities</p>
          </NavLink>
          <NavLink style={{ textDecoration: "none" }} to="/html/html-34">
            <p>HTML Symbols</p>
          </NavLink>
          <NavLink style={{ textDecoration: "none" }} to="/html/html-35">
            <p>HTML Emojis</p>
          </NavLink>
          <NavLink style={{ textDecoration: "none" }} to="/html/html-36">
            <p>HTML Charset</p>
          </NavLink>
          <NavLink style={{ textDecoration: "none" }} to="/html/html-37">
            <p>HTML URL Encode</p>
          </NavLink>
          <NavLink style={{ textDecoration: "none" }} to="/html/html-38">
            <p>HTML vs XHTML</p>
          </NavLink>

          <Outlet />
        </div>
      )}

      <div className="html-boss-2">
        <h1>HTML Tutorial</h1>
        <NavLink style={{ textDecoration: "none" }} to="/html/html-01">
          <p>HTML Home</p>
        </NavLink>
        <NavLink style={{ textDecoration: "none" }} to="/html/html-02">
          <p>HTML Introductions</p>
        </NavLink>
        <NavLink style={{ textDecoration: "none" }} to="/html/html-03">
          <p>HTML Editors</p>
        </NavLink>
        <NavLink style={{ textDecoration: "none" }} to="/html/html-04">
          <p>HTML Basic</p>
        </NavLink>
        <NavLink style={{ textDecoration: "none" }} to="/html/html-05">
          <p>HTML Elements</p>
        </NavLink>
        <NavLink style={{ textDecoration: "none" }} to="/html/html-06">
          <p>HTML Attributes</p>
        </NavLink>
        <NavLink style={{ textDecoration: "none" }} to="/html/html-07">
          <p>HTML Headings</p>
        </NavLink>
        <NavLink style={{ textDecoration: "none" }} to="/html/html-08">
          <p>HTML Paragraphs</p>
        </NavLink>
        <NavLink style={{ textDecoration: "none" }} to="/html/html-09">
          <p>HTML Styles</p>
        </NavLink>
        <NavLink style={{ textDecoration: "none" }} to="/html/html-10">
          <p>HTML Formatting</p>
        </NavLink>
        <NavLink style={{ textDecoration: "none" }} to="/html/html-11">
          <p>HTML Quotations</p>
        </NavLink>
        <NavLink style={{ textDecoration: "none" }} to="/html/html-12">
          <p>HTML Comments</p>
        </NavLink>
        <NavLink style={{ textDecoration: "none" }} to="/html/html-13">
          <p>HTML Colors</p>
        </NavLink>
        <NavLink style={{ textDecoration: "none" }} to="/html/html-14">
          <p>HTML CSS</p>
        </NavLink>
        <NavLink style={{ textDecoration: "none" }} to="/html/html-15">
          <p>HTML Links</p>
        </NavLink>
        <NavLink style={{ textDecoration: "none" }} to="/html/html-16">
          <p>HTML Images</p>
        </NavLink>
        <NavLink style={{ textDecoration: "none" }} to="/html/html-17">
          <p>HTML Favicon</p>
        </NavLink>
        <NavLink style={{ textDecoration: "none" }} to="/html/html-18">
          <p>HTML PageTitle</p>
        </NavLink>
        <NavLink style={{ textDecoration: "none" }} to="/html/html-19">
          <p>HTML Tables</p>
        </NavLink>
        <NavLink style={{ textDecoration: "none" }} to="/html/html-20">
          <p>HTML List</p>
        </NavLink>
        <NavLink style={{ textDecoration: "none" }} to="/html/html-21">
          <p>HTML Block & Inline</p>
        </NavLink>
        <NavLink style={{ textDecoration: "none" }} to="/html/html-22">
          <p>HTML Classes</p>
        </NavLink>
        <NavLink style={{ textDecoration: "none" }} to="/html/html-23">
          <p>HTML Id</p>
        </NavLink>
        <NavLink style={{ textDecoration: "none" }} to="/html/html-24">
          <p>HTML Iframes</p>
        </NavLink>
        <NavLink style={{ textDecoration: "none" }} to="/html/html-25">
          <p>HTML JavaScript</p>
        </NavLink>
        <NavLink style={{ textDecoration: "none" }} to="/html/html-26">
          <p>HTML File Paths</p>
        </NavLink>
        <NavLink style={{ textDecoration: "none" }} to="/html/html-27">
          <p>HTML Head</p>
        </NavLink>
        <NavLink style={{ textDecoration: "none" }} to="/html/html-28">
          <p>HTML Layout</p>
        </NavLink>
        <NavLink style={{ textDecoration: "none" }} to="/html/html-29">
          <p>HTML Responsive</p>
        </NavLink>
        <NavLink style={{ textDecoration: "none" }} to="/html/html-30">
          <p>HTML ComputerCode</p>
        </NavLink>
        <NavLink style={{ textDecoration: "none" }} to="/html/html-31">
          <p>HTML Semantics</p>
        </NavLink>
        <NavLink style={{ textDecoration: "none" }} to="/html/html-32">
          <p>HTML Style Guide</p>
        </NavLink>
        <NavLink style={{ textDecoration: "none" }} to="/html/html-33">
          <p>HTML Entities</p>
        </NavLink>
        <NavLink style={{ textDecoration: "none" }} to="/html/html-34">
          <p>HTML Symbols</p>
        </NavLink>
        <NavLink style={{ textDecoration: "none" }} to="/html/html-35">
          <p>HTML Emojis</p>
        </NavLink>
        <NavLink style={{ textDecoration: "none" }} to="/html/html-36">
          <p>HTML Charset</p>
        </NavLink>
        <NavLink style={{ textDecoration: "none" }} to="/html/html-37">
          <p>HTML URL Encode</p>
        </NavLink>
        <NavLink style={{ textDecoration: "none" }} to="/html/html-38">
          <p>HTML vs XHTML</p>
        </NavLink>

        <Outlet />
      </div>
    </>
  );
};

export default HtmlLeft;
