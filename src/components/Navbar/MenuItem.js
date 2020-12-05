import React from "react";
import PropTypes from "prop-types";

function MenuItem(props) {
  const classes = ["list__item"];

  if (props.social) {
    classes.push("list__item--social");
  }

  function socialItem() {
    return (
      <a href="#" className="list__link">
        <img src={props.icon} alt={props.icon} className="list__image" />
      </a>
    );
  }

  return (
    <li className={classes.join(" ")}>
      {!props.social ? props.text : socialItem()}
    </li>
  );
}

MenuItem.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.string,
  social: PropTypes.bool,
};

export default MenuItem;
