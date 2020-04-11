import React from "react";

import arrowIcon from "../../assets/images/orderpage/menu_arrow.svg";

export default function NavigationItem({ link, active, clickItem }) {
  const classes = ["body-list__item"];

  if (link.id === active) {
    classes.push("body-list__item--active");
  }

  if (link.id < active) {
    classes.push("body-list__item--complete");
  }

  return (
    <li className={classes.join(" ")} onClick={() => clickItem(link.id)}>
      {link.link}
      {link.id !== 4 ? (
        <img src={arrowIcon} className="body-list__image" />
      ) : (
        ""
      )}
    </li>
  );
}
