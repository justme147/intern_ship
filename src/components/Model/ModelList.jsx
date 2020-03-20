import React from "react";

import ModelItem from "./ModelItem.jsx";

export default function ModelList(props) {
  return (
    <div className="body-main-model__list">
      {props.cars.map(item => {
        return props.filter !== "all" ? (
          props.filter === item.class ? (
            <ModelItem car={item} key={item.id} />
          ) : null
        ) : (
          <ModelItem car={item} key={item.id} />
        );
      })}
    </div>
  );
}
