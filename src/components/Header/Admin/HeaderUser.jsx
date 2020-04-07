import React from "react";

export default function HeaderUser() {
  return (
    <div className="body-header__user">
      <img
        src="/images/adminpanel/avatar.jpg"
        alt=""
        className="body-header__avatar"
      />
      <p className="body-header__name">Admin</p>
      &#9660;
    </div>
  );
}
