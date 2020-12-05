import React from "react";
import PropTypes from "prop-types";

function ModelItem({ car, onMenuItemClick, selectItem }) {
  const classes = ["body-main-model__item"];

  if (car.id === selectItem) {
    classes.push("body-main-model__item--active");
  }

  function modelItemClick() {
    onMenuItemClick(car);
  }

  return (
    <div className={classes.join(" ")} onClick={modelItemClick}>
      <h5 className="body-main-model__title">{car.name.split(", ")[1]}</h5>
      <p className="body-main-model__price">
        {car.priceMin} - {car.priceMax} ₽
      </p>
      <img
        src={`http://api-factory.simbirsoft1.com${car.thumbnail.path}`}
        className="body-main-model__image"
      />
    </div>
  );
}

ModelItem.propTypes = {
  car: PropTypes.object,
  onMenuItemClick: PropTypes.func,
  selectItem: PropTypes.string,
};

export default ModelItem;
