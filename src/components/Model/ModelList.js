import React from "react";
import PropTypes from "prop-types";

import ModelItem from "./ModelItem";

function ModelList(props) {
  return (
    <div className="body-main-model__list">
      {props.cars.map((item) => {
        return props.filter !== "all" ? (
          props.filter === item.class ? (
            <ModelItem
              car={item}
              key={item.id}
              onMenuItemClick={props.onMenuItemClick}
              selectItem={props.selectItem}
            />
          ) : null
        ) : (
          <ModelItem
            car={item}
            key={item.id}
            onMenuItemClick={props.onMenuItemClick}
            selectItem={props.selectItem}
          />
        );
      })}
    </div>
  );
}

ModelList.propTypes = {
  cars: PropTypes.arrayOf(PropTypes.object),
  filter: PropTypes.string,
  onMenuItemClick: PropTypes.func,
  selectItem: PropTypes.number,
};

export default ModelList;
