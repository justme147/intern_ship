import React from "react";

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
        <img
          src="./images/orderpage/menu_arrow.svg"
          className="body-list__image"
        />
      ) : (
        ""
      )}
    </li>
  );
}
