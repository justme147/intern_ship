import React from "react";

import LangSwitch from "./LangSwitch.jsx";
import BurgerMenu from "./BurgerMenu.jsx";

export default function Navbar(props) {
  const classes = ["sidebar"];
  if (props.fixed) {
    classes.push("sidebar--fixed");
  }
  return (
    <section className={classes.join(" ")}>
      <div className="sidebar__inner">
        <BurgerMenu padding />

        <LangSwitch />
      </div>
    </section>
  );
}
