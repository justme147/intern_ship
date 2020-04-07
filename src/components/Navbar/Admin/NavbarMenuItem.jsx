import React from "react";
import { Link } from "react-router-dom";

export default function NavbarMenuItem(props) {
  return (
    <li onClick={props.onItemClick}>
      <Link
        to={`/admin${props.item.url}`}
        className={
          props.active !== props.item.id
            ? "sidebar__item"
            : "sidebar__item active"
        }
      >
        <img
          src={`/images/adminpanel/menu_item_${props.item.id}.svg`}
          alt=""
          className="sidebar__icon"
        />
        {props.item.title}
      </Link>
    </li>
  );
}
