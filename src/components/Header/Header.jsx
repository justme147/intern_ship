import React from "react";

export default function Header() {
  return (
    <header className="body-header">
      <div className="body-header__inner body-header__inner--padding">
        <a href="index.html" className="body-header__logo">
          Need for drive
        </a>
        <div className="body-header__location">
          <img
            src="images/startscreen/icon_map_marker.svg"
            alt="map_marker"
            className="body-header__icon"
          />
          <p className="body-header__text">Ульяновск</p>
        </div>
      </div>
    </header>
  );
}
