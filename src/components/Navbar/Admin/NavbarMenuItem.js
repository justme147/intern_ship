import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function NavbarMenuItem(props) {
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
        <img src={props.item.img} alt="" className="sidebar__icon" />
        {props.item.title}
      </Link>
    </li>
  );
}

NavbarMenuItem.propTypes = {
  item: PropTypes.object,
  active: PropTypes.number,
  onItemClick: PropTypes.func,
};

export default NavbarMenuItem;
