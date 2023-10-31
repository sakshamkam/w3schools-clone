import React, { useState } from "react";
import "./style folder/Navbar.css";
import Landing from "./MainPage/Landing";
import Subjects from "./MainPage/Subjects";
import SubCom from "./MainPage/SubCom";
import Learn from "./MainPage/Learn";
import Learn2 from "./MainPage/Learn2";
import Learn3 from "./MainPage/Learn3";
import Waves from "./MainPage/Waves";
import Pro from "./MainPage/Pro";
import Footer from "./MainPage/Footer";
import Start from "./MainPage/Start";
import Color from "./MainPage/Color";
import Game from "./MainPage/Game";
import Exercise from "./MainPage/Exercise";
import Template from "./MainPage/Template";

const Assembly = () => {
  const css = {
    divName: "CSS",
    divSlogan: "The language for styling web pages",
    b1: "Learn CSS",
    b2: "CSS Reference",
    b3: "Get Certified",
    b1c: "#04aa6d",
    b2c: "#282a35",
    b3c: "#ffc0c7",
    c1: "white",
    c2: "white",
    c3: "black",
    backgroundColor: "#fff4a3",
    headColor: "black",
    paraText:
      "body {\nbackground-color: lightblue; \n}\n\nh1 {\ncolor: white;\ntext-align: center;\n}\n\np {\nfont-family:verdana;\n}",
    link: "https://www.w3schools.com/css/tryit.asp?filename=trycss_default",
  };
  const js = {
    divName: "JavaScript",
    divSlogan: "The language for programming web pages",
    b1: "Learn JavaScript",
    b2: "JavaScript Reference",
    b3: "Get Certified",
    b1c: "#04aa6d",
    b2c: "white",
    b3c: "#ffc0c7",
    c1: "white",
    c2: "black",
    c3: "black",
    backgroundColor: "#282a35",
    headColor: "white",
    paraText:
      '<button onclick="myFunction()">Click\nMe!</button>\n\n<script>\nfunction myFunction() {\nlet x = document.getElementById("demo");\nx.style.fontSize = "25px";\nx.style.color = "red";\n}\n</script>',
    link: "https://www.w3schools.com/js/tryit.asp?filename=tryjs_default",
  };
  const python = {
    divName: "Python",
    divSlogan: "A popular programming language",
    b1: "Learn Python",
    b2: "Python Reference",
    b3: "Get Certified",
    b1c: "#04aa6d",
    b2c: "#282a35",
    b3c: "#ffc0c7",
    c1: "white",
    c2: "white",
    c3: "black",
    backgroundColor: "#f3ecea",
    headColor: "black",
    paraText: 'if 5 > 2:\nprint("Five is greater than two!")',
    link: "https://www.w3schools.com/python/trypython.asp?filename=demo_indentation",
  };
  const sql = {
    divName: "SQL",
    divSlogan: "A language for accessing databases",
    b1: "Learn SQL",
    b2: "SQL Reference",
    b3: "Get Certified",
    b1c: "#04aa6d",
    b2c: "#282a35",
    b3c: "#ffc0c7",
    c1: "white",
    c2: "white",
    c3: "black",
    backgroundColor: "#96d4d4",
    headColor: "black",
    paraText: "SELECT * FROM Customers\nWHERE Country='Mexico';",
    link: "https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_where",
  };

  const learnPart1 = {
    first: "C",
    second: "C#",
  };
  const learnPart2 = {
    first: "Excel",
    second: "Google Sheets",
  };
  const learnPart3 = {
    first: "Machine Learning",
    second: "Artificial Intelligence",
  };
  return (
    <>
      <Landing />
      <Waves />
      <Subjects />
      <SubCom {...css} />
      <SubCom {...js} />
      <SubCom {...python} />
      <SubCom {...sql} />
      <Learn />
      <Learn2 {...learnPart1} />
      <Learn3 />
      <Learn2 {...learnPart2} />
      <Learn2 {...learnPart3} />
      <Start />
      <Pro />
      <Color />
      <Game />
      <Exercise />
      <Template />
      <Footer />
    </>
  );
};

export default Assembly;
