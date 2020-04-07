import React from "react";

export default function HeaderNotification() {
  return (
    <div className="body-header__notification">
      <img
        src="/images/adminpanel/notifications_icon.svg"
        alt=""
        className="body-header__icon body-header__icon--width"
      />
      <span className="body-header__count">2</span>
    </div>
  );
}
