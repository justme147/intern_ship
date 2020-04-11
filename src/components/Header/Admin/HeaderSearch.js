import React from "react";

import search from "../../../assets/images/adminpanel/search_icon.svg";

export default function HeaderSearch() {
  return (
    <div className="body-header__search">
      <label className="body-header__label">
        <img src={search} alt="" className="body-header_icon" />
        <input
          type="text"
          className="body-header__input"
          placeholder="Поиск ..."
        />
      </label>
    </div>
  );
}
