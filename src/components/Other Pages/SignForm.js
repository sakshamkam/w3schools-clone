import React, { useState } from "react";
import "./Other Styles/form.css";
import { FcGoogle } from "react-icons/fc";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [lowerCheckVal, setLowerCheck] = useState(false);
  const [capitalCheck, setCapitalCheck] = useState(false);
  const [digitCheck, setDigitCheck] = useState(false);
  const [specialCheck, setSpecialCheck] = useState(false);
  const [lengthCheck, setLengthCheck] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    if (e.target.name === "password") {
      const lower = /(?=.*[a-z])/;
      const capital = /(?=.*[A-Z])/;
      const digit = /(?=.*[0-9])/;
      const special = /[ -/:-@[-`{-~]/;
      const length = /(?=.{8,14}$)/;

      setLowerCheck(lower.test(e.target.value));
      setCapitalCheck(capital.test(e.target.value));
      setDigitCheck(digit.test(e.target.value));
      setSpecialCheck(special.test(e.target.value));
      setLengthCheck(length.test(e.target.value));
    }
  };

  const handleSubmit = () => {
    setErrors(validation(formData));

    if (errors.email === "✅" && errors.password === "✅") {
      navigate("/");
    }
  };

  const goLogin = () => {
    navigate("/login");
  };

  const validation = (values) => {
    let errors = {};
    const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
    // const passRegex =
    //   /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;

    if (!values.email) {
      errors.email = "Email Required";
    } else if (!emailRegex.test(values.email)) {
      errors.email = "Invalid Email";
    } else {
      errors.email = "✅";
    }

    if (!values.password) {
      errors.password = "Password Required";
    } else if (
      lowerCheckVal &&
      capitalCheck &&
      digitCheck &&
      specialCheck &&
      lengthCheck
    ) {
      errors.password = "✅";
    }

    return errors;
  };

  const [errors, setErrors] = useState({});

  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div className="form-boss">
      <div className="form-container">
        <h1>Sign up</h1>
        <div className="form-head">
          <h2>Email</h2>
          <div className="form-sign">
            <p>Already have an account?</p>
            <h3 onClick={() => goLogin()}>Log in</h3>
          </div>
        </div>
        <div className="input-handle">
          <input
            type="email"
            name="email"
            placeholder=""
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>

        <div className="form-head show">
          <h2>Password</h2>
          <p onClick={handleShow}>
            <span>
              {show ? (
                <BsFillEyeFill
                  style={{
                    width: "1.2rem",
                    height: "1.2rem",
                    marginRight: "0.5rem",
                  }}
                />
              ) : (
                <BsFillEyeSlashFill
                  style={{
                    width: "1.2rem",
                    height: "1.2rem",
                    marginRight: "0.5rem",
                  }}
                />
              )}
            </span>
            Show
          </p>
        </div>
        <div className="input-handle">
          <input
            type={show ? "text" : "password"}
            name="password"
            placeholder=""
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
          {!lowerCheckVal && <p>Must contain lowercase</p>}
          {!capitalCheck && <p>Must contain Uppercase</p>}
          {!digitCheck && <p>Must contain a number</p>}
          {!specialCheck && <p>Must contain a special character</p>}
          {!lengthCheck && <p>Must contain 8-15 characters</p>}
        </div>

        <div onClick={() => handleSubmit()} className="form-button green-back">
          Check and Sign up for Free
        </div>
        <div className="form-button blue-back" style={{ color: "white" }}>
          <FaFacebook className="form-icons" />
          Continue with Facebook
        </div>
        <div className="form-button">
          <FcGoogle className="form-icons" />
          Continue with Google
        </div>
        <div className="form-button">
          <FaGithub className="form-icons" />
          Continue with Github
        </div>
        <div className="form-button">Continue with Fiede</div>
        <div className="form-forgot">
          <p>Forgot Password?</p>
        </div>
      </div>
    </div>
  );
};

export default Form;
