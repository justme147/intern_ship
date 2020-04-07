import React from "react";

import NavbarHeader from "./NavbarHeader.jsx";
import NavbarMenu from "./NavbarMenu.jsx";

export default function Navbar() {
  return (
    <section className="sidebar">
      <div className="sidebar__container">
        <nav className="sidebar__menu">
          <NavbarHeader />
          <NavbarMenu />
        </nav>
      </div>
    </section>
  );
}
