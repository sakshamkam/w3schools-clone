import React from "react";
import Nav from "./Nav";
import SignForm from "./SignForm";
import Foot from "./Foot";
import { Outlet } from "react-router-dom";

const Sign = () => {
  return (
    <div>
      <Nav />
      <SignForm />
      <Foot />
      <Outlet />
    </div>
  );
};

export default Sign;
