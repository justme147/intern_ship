import React from "react";

import avatar from "../../../assets/images/adminpanel/avatar.jpg";
import dropdownIcon from "../../../assets/images/adminpanel/dropdown_icon.svg";

export default function HeaderUser() {
  return (
    <div className="body-header__user">
      <img src={avatar} alt="" className="body-header__avatar" />
      <p className="body-header__name">Admin</p>
      <img src={dropdownIcon} alt="" />
    </div>
  );
}
