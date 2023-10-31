import React from "react";
import "../style folder/start.css";
import { useNavigate } from "react-router-dom";

const Start = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/signup");
  };
  return (
    <div className="start-boss">
      <h1>My Learning</h1>
      <h2>Track your progress with our free "My Learning" program.</h2>
      <h2>Log in to your account, and start earning points!</h2>
      <div className="start-img">
        <img
          src="https://www.w3schools.com/myl-green-off.png"
          alt="Start Learning"
        />
      </div>
      <div
        onClick={() => {
          handleNavigate();
        }}
        className="start-butt"
      >
        <h2>Sign Up for Free</h2>
      </div>
    </div>
  );
};

export default Start;
