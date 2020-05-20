import React from "react";
import PropTypes from "prop-types";

import HeaderSearch from "./HeaderSearch";
import HeaderNotification from "./HeaderNotification";
import HeaderUser from "./HeaderUser";

function Header(props) {
  return (
    <header className="body-header body-header--flex">
      <HeaderSearch />
      <div className="body-header__wrap">
        <HeaderNotification count={props.notif} />
        <HeaderUser exit={props.exitClick} />
      </div>
    </header>
  );
}

Header.propTypes = {
  exitClick: PropTypes.func,
  notif: PropTypes.number,
};

export default Header;
