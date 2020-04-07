import React from "react";

import HeaderSearch from "./HeaderSearch.jsx";
import HeaderNotification from "./HeaderNotification.jsx";
import HeaderUser from "./HeaderUser.jsx";

export default function Header() {
  return (
    <header className="body-header body-header--flex">
      <HeaderSearch />
      <div className="body-header__wrap">
        <HeaderNotification />
        <HeaderUser />
      </div>
    </header>
  );
}
