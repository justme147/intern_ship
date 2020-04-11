import React from "react";

export default function MenuItem(props) {
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
