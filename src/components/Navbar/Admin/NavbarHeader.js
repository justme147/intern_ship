import React from "react";
import { Link, useHistory } from "react-router-dom";

import logo from "../../../assets/images/adminpanel/logo.svg";

export default function NavbarHeader() {
  const history = useHistory();
  return (
    <header className="sidebar__header" onClick={() => history.push("/")}>
      <img src={logo} alt="" className="sidebar__image" />
      <h2 className="sidebar__title">Need for drive</h2>
    </header>
  );
}
