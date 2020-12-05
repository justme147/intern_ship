import React, { useState } from "react";
import PropTypes from "prop-types";

function LangSwitch(props) {
  const [isEng, setIsEng] = useState(true);
  const classes = ["sidebar-lang-switch"];
  if (props.display) {
    classes.push("sidebar-lang-switch__display");
  }
  return (
    <div className={classes.join(" ")}>
      <button
        className="sidebar-lang-switch__button"
        onClick={() => setIsEng(!isEng)}
      >
        {isEng ? "Eng" : "Рус"}
      </button>
    </div>
  );
}

LangSwitch.propTypes = {
  display: PropTypes.bool,
};

export default LangSwitch;
