import React from "react";
import { Link } from "react-router-dom";

export default function NavbarHeader() {
  return (
    <header className="sidebar__header">
      <img
        src="/images/adminpanel/logo.svg"
        alt=""
        className="sidebar__image"
      />
      <Link to="/" className="sidebar__title">
        Need for drive
      </Link>
    </header>
  );
}
