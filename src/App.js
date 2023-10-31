// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import "./components/style folder/Navbar.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
// import SecOne from "./components/headSec/SecOne";
// import SecTwo from "./components/headSec/SecTwo";
// import SecThree from "./components/headSec/SecThree";
// import SecFour from "./components/headSec/SecFour";
// import { AiOutlineShoppingCart } from "react-icons/ai";
import Assembly from "./components/Assembly";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Other Pages/Login";
import { useEffect } from "react";
// import Scrollable from "./MainPage/Scrollable";
// import Scrollable from "./components/MainPage/Scrollable";
import Sign from "./components/Other Pages/Sign";
import Html from "./components/html/Html";
import Navbar from "./Navbar";
import HtmlLeft from "./components/html/HtmlLeft";
import Html01 from "./components/html/Html01";
import Html02 from "./components/html/Html02";
import Html03 from "./components/html/Html03";
import Html04 from "./components/html/Html04";
import Html05 from "./components/html/Html05";
import Html06 from "./components/html/Html06";
import Html07 from "./components/html/Html07";
import Html08 from "./components/html/Html08";
import Html09 from "./components/html/Html09";
import Html10 from "./components/html/Html10";
import Html11 from "./components/html/Html11";
import Html12 from "./components/html/Html12";
import Html13 from "./components/html/Html13";
import Html14 from "./components/html/Html14";
import Html15 from "./components/html/Html15";
import Html16 from "./components/html/Html16";
import Html17 from "./components/html/Html17";
import Html18 from "./components/html/Html18";
import Html19 from "./components/html/Html19";
import Html21 from "./components/html/Html21";
import Html22 from "./components/html/Html22";
import Html23 from "./components/html/Html23";
import Html24 from "./components/html/Html24";
import Html25 from "./components/html/Html25";
import Html26 from "./components/html/Html26";
import Html27 from "./components/html/Html27";
import Html28 from "./components/html/Html28";
import Html29 from "./components/html/Html29";
import Html31 from "./components/html/Html31";
import Html30 from "./components/html/Html30";
import Html32 from "./components/html/Html32";
import Html33 from "./components/html/Html33";
import Html34 from "./components/html/Html34";
import Html35 from "./components/html/Html35";
import Html36 from "./components/html/Html36";
import Html37 from "./components/html/Html37";
import Html38 from "./components/html/Html38";
import Html20 from "./components/html/Html20";

const App = () => {
  return (
    <Router>
      <AnotherComponent />
    </Router>
  );
};

function AnotherComponent() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/home" element={<Home />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/signup" element={<Sign />}></Route>
        {/* <Route exact path="/tutorials" element={<SecOne />}></Route> */}
        {/* <Route exact path="/exercises" element={<SecTwo />}></Route> */}
        {/* <Route exact path="/certified" element={<SecThree />}></Route> */}
        {/* <Route exact path="/services" element={<SecFour />}></Route> */}
        <Route exact path="/html" element={<Html />}>
          <Route exact path="html-01" element={<Html01 />} />
          <Route exact path="html-02" element={<Html02 />} />
          <Route exact path="html-03" element={<Html03 />} />
          <Route exact path="html-04" element={<Html04 />} />
          <Route exact path="html-05" element={<Html05 />} />
          <Route exact path="html-06" element={<Html06 />} />
          <Route exact path="html-07" element={<Html07 />} />
          <Route exact path="html-08" element={<Html08 />} />
          <Route exact path="html-09" element={<Html09 />} />
          <Route exact path="html-10" element={<Html10 />} />
          <Route exact path="html-11" element={<Html11 />} />
          <Route exact path="html-12" element={<Html12 />} />
          <Route exact path="html-13" element={<Html13 />} />
          <Route exact path="html-14" element={<Html14 />} />
          <Route exact path="html-15" element={<Html15 />} />
          <Route exact path="html-16" element={<Html16 />} />
          <Route exact path="html-17" element={<Html17 />} />
          <Route exact path="html-18" element={<Html18 />} />
          <Route exact path="html-19" element={<Html19 />} />
          <Route exact path="html-20" element={<Html20 />} />
          <Route exact path="html-21" element={<Html21 />} />
          <Route exact path="html-22" element={<Html22 />} />
          <Route exact path="html-23" element={<Html23 />} />
          <Route exact path="html-24" element={<Html24 />} />
          <Route exact path="html-25" element={<Html25 />} />
          <Route exact path="html-26" element={<Html26 />} />
          <Route exact path="html-27" element={<Html27 />} />
          <Route exact path="html-28" element={<Html28 />} />
          <Route exact path="html-29" element={<Html29 />} />
          <Route exact path="html-30" element={<Html30 />} />
          <Route exact path="html-31" element={<Html31 />} />
          <Route exact path="html-32" element={<Html32 />} />
          <Route exact path="html-33" element={<Html33 />} />
          <Route exact path="html-34" element={<Html34 />} />
          <Route exact path="html-35" element={<Html35 />} />
          <Route exact path="html-36" element={<Html36 />} />
          <Route exact path="html-37" element={<Html37 />} />
          <Route exact path="html-38" element={<Html38 />} />
        </Route>
        {/* <Route exact path="html-tutorial" element={<HtmlTutorial />} /> */}
      </Routes>
    </>
  );
}

function Home() {
  // useEffect(() => {
  //   window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  // }, []);

  return (
    <div className="wrapper">
      <Navbar />
      <Assembly />
    </div>
  );
}

export default App;
