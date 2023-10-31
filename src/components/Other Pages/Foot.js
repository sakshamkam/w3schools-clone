import React from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";

const Foot = () => {
  return (
    <>
      <div className="foot-boss">
        <p>
          © 1999 - 2023 W3schools. All rights reserved. Cookie policy, Privacy
          and Terms.
        </p>
      </div>
      <div className="foot-help green-back">
        <AiOutlineQuestionCircle className="help-icon" />
        Help
      </div>
    </>
  );
};

export default Foot;
