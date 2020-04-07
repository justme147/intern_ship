import React from "react";
import { Link } from "react-router-dom";

export default function Header(props) {
  const classes = ["body-header__inner"];

  if (props.padding) {
    classes.push("body-header__inner--padding");
  }
  return (
    <div className={classes.join(" ")}>
      <Link to="/" className="body-header__logo">
        Need for drive
      </Link>
      <div className="body-header__location">
        <img
          src="/images/startscreen/icon_map_marker.svg"
          alt="map_marker"
          className="body-header__icon"
        />
        <p className="body-header__text">Ульяновск</p>
      </div>
    </div>
  );
}
