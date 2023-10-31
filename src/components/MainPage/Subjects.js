import React from "react";
import "../style folder/subColor.css";

const Subjects = () => {
  return (
    <div className="subject-upper-boss">
      <div className="subject-boss">
        <div className="subject-boxes sub-box-left">
          <h1>HTML</h1>
          <h3>The language for building web pages</h3>

          <div className="subject-buttons">
            <div className="subject-butt green-back">Learn HTML</div>
            <div className="subject-butt yellow-back">Video Tutorial</div>
            <div className="subject-butt black-back">HTML Reference</div>
            <div className="subject-butt pink-back">Get Certified</div>
          </div>
        </div>
        <div className="subject-boxes sub-box-right grey-back">
          <h2>HTML Example:</h2>

          <div className="text-box">
            <p>
              &lt;DOCTYPE html&gt; <br />
              &lt;html&gt; <br />
              &lt;head&gt; <br />
              &lt;title&gt;HTML Tutorial&lt;&#47;title&gt; <br />
              &lt;&#47;head&gt; <br />
              &lt;body&gt; <br /> <br />
              &lt;h1&gt;This is a heading&lt;&#47;h1&gt; <br />
              &lt;p&gt;This is a paragraph.&lt;&#47;p&gt; <br /> <br />
              &lt;&#47;body&gt; <br />
              &lt;&#47;html&gt; <br />
            </p>
          </div>

          <div className="sub-try">
            <div
              onClick={() =>
                window.open(
                  "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_default_default"
                )
              }
              className="try"
            >
              Try it yourself
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subjects;
