import React from "react";
import PropTypes from "prop-types";

import LangSwitch from "./LangSwitch";
import BurgerMenu from "./BurgerMenu";

function Navbar(props) {
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

Navbar.propTypes = {
  fixed: PropTypes.bool,
};

export default Navbar;
