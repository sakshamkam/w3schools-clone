import React from "react";
import Nav from "./Nav";
import Form from "./Form";
import Foot from "./Foot";
import { Outlet } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <Nav />
      <Form />
      <Foot />
      <Outlet />
    </div>
  );
};

export default Login;
