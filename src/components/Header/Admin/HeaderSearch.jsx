import React from "react";

export default function HeaderSearch() {
  return (
    <div className="body-header__search">
      <label className="body-header__label">
        <img
          src="/images/adminpanel/search_icon.svg"
          alt=""
          className="body-header_icon"
        />
        <input
          type="text"
          className="body-header__input"
          placeholder="Поиск ..."
        />
      </label>
    </div>
  );
}
