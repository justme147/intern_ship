import React from "react";

export default function ModelItem({ car }) {
  return (
    <div className="body-main-model__item">
      <h5 className="body-main-model__title">{car.model}</h5>
      <p className="body-main-model__price">{car.price}</p>
      <img
        src={`./images/orderpage/cars/${car.model}.jpg`}
        className="body-main-model__image"
      />
    </div>
  );
}
