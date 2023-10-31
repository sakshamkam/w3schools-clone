import React from "react";
import "../style folder/footer.css";
import { AiFillFacebook, AiOutlineInstagram } from "react-icons/ai";
import { BsDiscord, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer-boss">
      <div className="footer-sub-boss">
        <div className="footer-link-section">
          <div className="footer-links foot-img-img">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/W3Schools_logo.svg/1088px-W3Schools_logo.svg.png"
              alt="W3"
            />
          </div>
          <div className="footer-links">
            <h2>SPACES</h2>
          </div>
          <div className="footer-links">
            <h2>UPGRADE</h2>
          </div>
          <div className="footer-links">
            <h2>NEWSLETTER</h2>
          </div>
          <div className="footer-links">
            <h2>GET CERTIFIED</h2>
          </div>
          <div className="footer-links">
            <h2>REPORT ERROR</h2>
          </div>
        </div>
        <div className="footer-information">
          <div className="info-div">
            <h2>Top Tutorials</h2>
            <p>HTML Tutorial</p>
            <p>CSS Tutorial</p>
            <p>JavaScript Tutorial</p>
            <p>How to Tutorial</p>
            <p>SQL Tutorial</p>
            <p>Python Tutorial</p>
            <p>W3.CSS Tutorial</p>
            <p>BootStrap Tutorial</p>
            <p>PHP Tutorial</p>
            <p>Java Tutorial</p>
            <p>C++ Tutorial</p>
            <p>jQuery Tutorial</p>
          </div>
          <div className="info-div">
            <h2>Top References</h2>
            <p>HTML Reference</p>
            <p>CSS Reference</p>
            <p>JavaScript Reference</p>
            <p>SQL Reference</p>
            <p>Python Reference</p>
            <p>W3.CSS Reference</p>
            <p>BootStrap Reference</p>
            <p>PHP Reference</p>
            <p>HTML Colors Reference</p>
            <p>Java Reference</p>
            <p>Angular Reference</p>
            <p>jQuery Reference</p>
          </div>
          <div className="info-div">
            <h2>Top Examples</h2>
            <p>HTML Examples</p>
            <p>CSS Examples</p>
            <p>JavaScript Examples</p>
            <p>How to Examples</p>
            <p>SQL Examples</p>
            <p>Python Examples</p>
            <p>W3.CSS Examples</p>
            <p>BootStrap Examples</p>
            <p>PHP Examples</p>
            <p>Java Examples</p>
            <p>C++ Examples</p>
            <p>jQuery Examples</p>
          </div>
          <div className="info-div">
            <h2>Get Certified</h2>
            <p>HTML Certificate</p>
            <p>CSS Certificate</p>
            <p>JavaScript Certificate</p>
            <p>Front End Certificate</p>
            <p>SQL Certificate</p>
            <p>Python Certificate</p>
            <p>W3.CSS Certificate</p>
            <p>BootStrap Certificate</p>
            <p>PHP Certificate</p>
            <p>Java Certificate</p>
            <p>C++ Certificate</p>
            <p>jQuery Certificate</p>
          </div>
        </div>
        <div className="footer-last">
          <div className="footer-icon">
            <AiFillFacebook className="ff" />
          </div>
          <div className="footer-icon">
            <BsDiscord className="ff" />
          </div>
          <div className="footer-icon">
            <BsLinkedin className="ff" />
          </div>
          <div className="footer-icon">
            <AiOutlineInstagram className="ff" />
          </div>
          <div className="footer-icon">
            <p className="footer-underlined">FORUMS</p>
          </div>
          <div className="footer-icon">
            <p className="footer-underlined">ABOUT</p>
          </div>
        </div>
        <div className="footer-paragraph">
          <p>
            W3Schools is optimized for learning and training. Examples might be
            simplified to improve reading and learning. Tutorials, references,
            and examples are constantly reviewed to avoid errors, but we cannot
            warrant full correctness of all content. While using W3Schools, you
            agree to have read and accepted our{" "}
            <span
              onClick={() =>
                window.open(
                  "https://www.w3schools.com/about/about_copyright.asp"
                )
              }
              className="footer-underlined"
            >
              terms of use,
            </span>{" "}
            <span
              onClick={() =>
                window.open("https://www.w3schools.com/about/about_privacy.asp")
              }
              className="footer-underlined"
            >
              cookie and privacy policy.
            </span>
          </p>
        </div>
        <div className="footer-paragraph">
          <p>
            <span
              onClick={() =>
                window.open(
                  "https://www.w3schools.com/about/about_copyright.asp"
                )
              }
              className="footer-underlined"
            >
              Copyright 1999-2023
            </span>{" "}
            by Refsnes Data. All Rights Reserved.
            <span
              onClick={() =>
                window.open("https://www.w3schools.com/w3css/default.asp")
              }
              className="footer-underlined"
            >
              W3Schools is Powered by W3.CSS.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
