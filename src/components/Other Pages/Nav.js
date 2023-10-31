import React from "react";
import { RxCross1 } from "react-icons/rx";
import "./Other Styles/nav.css";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="login-nav">
        <div onClick={() => navigate("/")} className="nav-logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/W3Schools_logo.svg/1088px-W3Schools_logo.svg.png"
            alt="w3"
          />
        </div>
        <div onClick={() => navigate("/")} className="nav-cross">
          <RxCross1 className="cross" />
        </div>
      </div>
    </>
  );
};

export default Nav;
