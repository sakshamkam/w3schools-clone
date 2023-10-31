import React, { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Scrollable from "./components/MainPage/Scrollable";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import TopSearch from "./components/MainPage/TopSearch";
import TopResult from "./components/MainPage/TopResult";
// import SecOne from "./components/headSec/SecOne";
// import SecTwo from "./components/headSec/SecTwo";

const Navbar = () => {
  // const goToLogin = () => {
  //   navigate("/login");
  // };
  // const goToSign = () => {
  //   navigate("/signup");
  // };

  // const handleTutorial = () => {
  //   console.log(tutorialCheck);
  //   setTutorialCheck(true);
  //   console.log(tutorialCheck);
  // };

  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);

  const handleShow1 = () => {
    setShow1(!show1);
    setShow2(false);
    setShow3(false);
    setShow4(false);
  };
  const handleShow2 = () => {
    setShow1(false);
    setShow2(!show2);
    setShow3(false);
    setShow4(false);
  };
  const handleShow3 = () => {
    setShow1(false);
    setShow2(false);
    setShow3(!show3);
    setShow4(false);
  };
  const handleShow4 = () => {
    setShow1(false);
    setShow2(false);
    setShow3(false);
    setShow4(!show4);
  };

  function handleShow5() {
    setShow1(false);
    setShow2(false);
    setShow3(false);
    setShow4(!show4);
  }

  const [results, setResults] = useState([]);

  return (
    <>
      <div className="boss">
        <div className="header-left">
          <div
            // onClick={() => {
            //   window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            // }}
            className="logo"
          >
            <Link to="/home">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/W3Schools_logo.svg/1088px-W3Schools_logo.svg.png"
                alt="W3"
              />
            </Link>
          </div>

          <div className="header-button hb1" onClick={() => handleShow1()}>
            Tutorials &nbsp;
            <FontAwesomeIcon icon={faCaretDown} />
          </div>
          <div className="header-button hb2" onClick={() => handleShow2()}>
            Exercises &nbsp;
            <FontAwesomeIcon icon={faCaretDown} />
          </div>
          <div className="header-button hb3" onClick={() => handleShow3()}>
            Get Certified &nbsp;
            <FontAwesomeIcon icon={faCaretDown} />
          </div>
          <div className="header-button hb4" onClick={() => handleShow5()}>
            Services &nbsp;
            <FontAwesomeIcon icon={faCaretDown} />
          </div>
          {/* <div>
            <div className="header-button inp-space">
              <TopSearch setResults={setResults} />
            </div>
            <TopResult results={results} />
          </div> */}
        </div>

        <div className="header-right">
          <div className="header-capsule">
            <span
              style={{
                fontSize: "1.6rem",
                color: "purple",
                display: "flex",
                alignItems: "center",
                fontWeight: "600",
              }}
            >
              &lt;&#47;&gt;&nbsp;{" "}
            </span>
            Spaces
          </div>
          <div className="header-capsule">
            <span
              style={{
                fontSize: "1.6rem",
                color: "purple",
                display: "flex",
                alignItems: "center",
              }}
            >
              <AiOutlineShoppingCart
                style={{ height: "2rem", width: "2rem" }}
              />
              &nbsp;
            </span>
            Certificates
          </div>
          <div className="big-capsule">
            <Link className="left-capsule" to={"/signup"}>
              <div>Sign Up</div>
            </Link>

            <Link className="right-capsule" to={"/login"}>
              <div>Log in</div>
            </Link>
          </div>
        </div>
        {/* {!displayValue && <Scrollable />} */}
        <Scrollable />

        {/* <SecOne /> */}
        {/* <SecTwo /> */}

        {show1 && (
          <div className="tutorial-section-in-navbar">
            <div className="tutorial-head">
              <h1>Tutorials</h1>
            </div>
            <div className="courses">
              <div className="course-section">
                <h2>HTML and CSS</h2>
                <p>Learn HTML</p>
                <p>Learn CSS</p>
                <p>Learn RWD</p>
                <p>Learn Bootstrap</p>
                <p>Learn W3.CSS</p>
                <p>Learn Sass</p>
                <p>Learn Colors</p>
                <p>Learn Icons</p>
                <p>Learn SVG</p>
                <p>Learn Canvas</p>
                <p>Learn Graphics</p>
                <p>Learn Character Sets</p>
                <p>Learn How To</p>
              </div>
              <div className="course-section">
                <h2>JavaScript</h2>
                <p>Learn JavaScript</p>
                <p>Learn React</p>
                <p>Learn jQuery</p>
                <p>Learn Vue</p>
                <p>Learn AngularJS</p>
                <p>Learn JSON</p>
                <p>Learn AJAX</p>
                <p>Learn AppML</p>
                <p>Learn W3.JS</p>
              </div>
              <div className="course-section">
                <h2>Backend</h2>
                <p>Learn Python</p>
                <p>Learn SQL</p>
                <p>Learn MySQL</p>
                <p>Learn PHP</p>
                <p>Learn Java</p>
                <p>Learn C</p>
                <p>Learn C++</p>
                <p>Learn C#</p>
                <p>Learn R</p>
                <p>Learn Kotlin</p>
                <p>Learn Go</p>
                <p>Learn Django</p>
                <p>Learn TypeSCript</p>
                <p>Learn Node.js</p>
                <p>Learn Git</p>
                <p>Learn MongoDB</p>
              </div>
            </div>
          </div>
        )}

        {show2 && (
          <div className="tutorial-section-in-navbar">
            <div className="tutorial-head">
              <h1>Exercises</h1>
            </div>
            <div className="courses">
              <div className="course-section">
                <h2>HTML and CSS</h2>
                <p>HTML</p>
                <p>CSS</p>
                <p>Bootstrap</p>
                <br />
                <h2>Data Analytics</h2>
                <p>Data Analytics</p>
                <p>NumPy</p>
                <p>Pandas</p>
                <p>Excel</p>
                <p>Social Media</p>
              </div>
              <div className="course-section">
                <h2>JavaScript</h2>
                <p>JavaScript</p>
                <p>React</p>
                <p>jQuery</p>
                <p>Vue</p>
              </div>
              <div className="course-section">
                <h2>Backend</h2>
                <p>Python</p>
                <p>SQL</p>
                <p>MySQL</p>
                <p>PHP</p>
                <p>Java</p>
                <p>C</p>
                <p>C++</p>
                <p>C#</p>
                <p>R</p>
                <p>Kotlin</p>
                <p>Go</p>
                <p>Django</p>
                <p>TypeSCript</p>
                <p>Node.js</p>
                <p>Git</p>
                <p>Mongo</p>
              </div>
            </div>
          </div>
        )}

        {show3 && (
          <div className="tutorial-section-in-navbar">
            <div className="tutorial-head">
              <h1>Get Certified</h1>
            </div>
            <div className="courses">
              <div className="course-section">
                <h2>HTML and CSS</h2>
                <p>HTML</p>
                <p>CSS</p>
                <p>Bootstrap</p>
                <br />
                <h2>Data Analytics</h2>
                <p>Data Analytics</p>
                <p>NumPy</p>
                <p>Pandas</p>
                <p>Excel</p>
                <p>Social Media</p>
              </div>
              <div className="course-section">
                <h2>JavaScript</h2>
                <p>JavaScript</p>
                <p>React</p>
                <p>jQuery</p>
                <p>Vue</p>
                <br />
                <h2>Programs</h2>
                <p>Full Access</p>
                <p>Front End</p>
                <p>Web Dev.</p>
                <p>Web App</p>
                <p>Web Design</p>
              </div>
              <div className="course-section">
                <h2>Backend</h2>
                <p>Python</p>
                <p>SQL</p>
                <p>MySQL</p>
                <p>PHP</p>
                <p>Java</p>
                <p>C</p>
                <p>C++</p>
                <p>C#</p>
                <p>R</p>
                <p>Kotlin</p>
                <p>Go</p>
                <p>Django</p>
                <p>TypeSCript</p>
                <p>Node.js</p>
                <p>Git</p>
                <p>Mongo</p>
              </div>
            </div>
          </div>
        )}

        {show4 && (
          <div className="tutorial-section-in-navbar">
            <div className="tutorial-head">
              <h1>All Our Services</h1>
            </div>
            <div className="courses">
              <div className="course-section">
                <p>Free Tutorials</p>
                <p>Exercises</p>
                <p>Log in / Sign Up</p>
                <p>Where to Start</p>
                <p>Templates</p>
                <p>CSS Framework</p>
                <p>Browser Statistics</p>
                <p>Color Picker</p>
              </div>
              <div className="course-section">
                <p>Reference</p>
                <p>Quizzes</p>
                <p>My learning</p>
                <p>Code editor</p>
                <p>How To's</p>
                <p>Web Hosting</p>
                <p>Typing Speed</p>
                <p>Code Game</p>
              </div>
              <div className="course-section">
                <p>Create a Website</p>
                <p>Get Certified</p>
                <p>Upgrade</p>
                <p>Bootcamps</p>
                <p>Videos</p>
                <p>Create a Server</p>
                <p>AWS Training</p>
                <p>Newsletter</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
