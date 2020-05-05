import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import ModelMenuItem from "./ModelMenuItem";
import { fetchData } from "../../assets/scripts/fetchdata";

function ModelMenu(props) {
  const [menu, setMenu] = useState([
    { id: 1, name: "all", title: "Все модели" },
  ]);
  useEffect(() => {
    async function fetchMenuItems() {
      try {
        const response = await fetchData("category");
        setMenu([...menu, ...response]);
        // console.log(response);
      } catch (e) {
        console.log(e);
      }
    }
    fetchMenuItems();
  }, []);
  return (
    <ul className="body-main-model__ul">
      {menu.map((item) => {
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
};

export default ModelMenu;
