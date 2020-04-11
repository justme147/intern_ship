import React from "react";

import ModelItem from "./ModelItem";

export default function ModelList(props) {
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
