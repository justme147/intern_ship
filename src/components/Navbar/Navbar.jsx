import React from "react";

export default function Navbar() {
  return (
    <section className="sidebar sidebar--fixed">
      <div className="sidebar__inner">
        <div className="burger">
          <div className="burger__inner burger__inner--padding_t">
            <span className="burger__item"></span>
          </div>
        </div>

        <div className="sidebar-lang-switch">
          <button className="sidebar-lang-switch__button">Eng</button>
        </div>
      </div>
    </section>
  );
}
