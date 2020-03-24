import React from "react";

export default function ModelItem({ car, onMenuItemClick, selectItem }) {
  const classes = ["body-main-model__item"];

  if (car.id === selectItem) {
    classes.push("body-main-model__item--active");
  }

  function modelItemClick() {
    onMenuItemClick(car.id, car.model, car.name, car.number, car.fuel);
  }

  return (
    <div className={classes.join(" ")} onClick={modelItemClick}>
      <h5 className="body-main-model__title">{car.model}</h5>
      <p className="body-main-model__price">{car.price}</p>
      <img
        src={`./images/orderpage/cars/${car.model}.jpg`}
        className="body-main-model__image"
      />
    </div>
  );
}
