import React from "react";

import HeaderSearch from "./HeaderSearch";
import HeaderNotification from "./HeaderNotification";
import HeaderUser from "./HeaderUser";

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
