import React, { useState } from "react";
import PropTypes from "prop-types";

import NavigationItem from "./NavigationItem";

function NavigationList(props) {
  const [links, setLinks] = useState([
    {
      id: 1,
      link: "Местоположение",
    },
    {
      id: 2,
      link: "Модель",
    },
    {
      id: 3,
      link: "Дополнительно",
    },
    {
      id: 4,
      link: "Итого",
    },
  ]);

  return (
    <nav className="body-list__inner">
      <ul className="body-list">
        {links.map((item) => {
          return (
            <NavigationItem
              link={item}
              key={item.id}
              active={props.active}
              clickItem={props.menuClick}
            />
          );
        })}
      </ul>
    </nav>
  );
}

NavigationList.propTypes = {
  active: PropTypes.number,
  menuClick: PropTypes.func,
};

export default NavigationList;
