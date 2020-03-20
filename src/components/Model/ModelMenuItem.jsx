import React from "react";

export default function ModelMenuItem({ item, filter, menuClick }) {
  const classes = ["body-main-model__li"];

  if (filter === item.name) {
    classes.push("body-main-model__li--active");
  }

  return (
    <li
      className={classes.join(" ")}
      name={item.name}
      onClick={() => menuClick(item.name)}
    >
      <span className="body-main-model__circle"></span>
      {item.title}
    </li>
  );
}
