import React from "react";

function Loader(props) {
  const classes = ["spinner", "spinner-3"];

  if (props.white) {
    classes.push("spinner-white");
  }

  return <div className={classes.join(" ")}></div>;
}

export default Loader;
