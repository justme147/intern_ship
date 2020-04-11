import React from "react";

import notification from "../../../assets/images/adminpanel/notifications_icon.svg";

export default function HeaderNotification() {
  return (
    <div className="body-header__notification">
      <img
        src={notification}
        alt=""
        className="body-header__icon body-header__icon--width"
      />
      <span className="body-header__count">2</span>
    </div>
  );
}
