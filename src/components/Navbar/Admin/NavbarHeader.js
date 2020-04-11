import React from "react";
import { Link } from "react-router-dom";

import logo from "../../../assets/images/adminpanel/logo.svg";

export default function NavbarHeader() {
  return (
    <header className="sidebar__header">
      <img src={logo} alt="" className="sidebar__image" />
      <Link to="/" className="sidebar__title">
        Need for drive
      </Link>
    </header>
  );
}
