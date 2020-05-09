import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import ModelMenuItem from "./ModelMenuItem";
import { fetchData } from "../../assets/scripts/fetchdata";

function ModelMenu(props) {
  return (
    <ul className="body-main-model__ul">
      {props.menu.map((item) => {
        return (
          <ModelMenuItem
            item={item}
            filter={props.filter}
            key={item.id}
            menuClick={props.onMenuClick}
          />
        );
      })}
    </ul>
  );
}

ModelMenu.propTypes = {
  filter: PropTypes.string,
  onMenuClick: PropTypes.func,
  menu: PropTypes.arrayOf(PropTypes.object),
};

export default ModelMenu;
