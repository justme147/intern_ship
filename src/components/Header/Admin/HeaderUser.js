import React, { useState } from "react";
import PropTypes from "prop-types";

import avatar from "../../../assets/images/adminpanel/avatar.jpg";
import dropdownIcon from "../../../assets/images/adminpanel/dropdown_icon.svg";
import { useHistory } from "react-router-dom";

function HeaderUser(props) {
  const history = useHistory();
  const [isMenu, setIsMenu] = useState(false);

  function handleExitClick() {
    props.exit();
    history.push("/admin/login");
  }

  return (
    <div className="body-header__user">
      <div className="body-header__cont" onClick={() => setIsMenu(!isMenu)}>
        <img src={avatar} alt="" className="body-header__avatar" />
        <p className="body-header__name">Admin</p>
        <img src={dropdownIcon} alt="" />
      </div>

      {isMenu && (
        <ul className="body-header__dropmenu">
          <li className="body-header__dropitem" onClick={handleExitClick}>
            Выйти
          </li>
        </ul>
      )}
    </div>
  );
}

HeaderUser.propTypes = {
  exit: PropTypes.func,
};

export default HeaderUser;
