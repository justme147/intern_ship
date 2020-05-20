import React from "react";
import PropTypes from "prop-types";

function Total({ order }) {
  return (
    <div className="body-main-total__inner">
      <div className="body-main-total">
        <div className="body-main-total__container">
          <div className="body-main-total__descr">
            <p className="body-main-total__model">
              {order[1].name}, {order[1].value}
            </p>
            <p className="body-main-total__number">
              {order[1].number.toUpperCase()}
            </p>
            <p className="body-main-total__fuel">
              <span>Топливо </span>
              {order[5].isFull ? "100%" : order[1].fuel}
            </p>
            <p className="body-main-total__since">
              <span>Доступна с </span>
              {order[3].since}
            </p>
          </div>
          <div className="body-main-total__img">
            <img
              src={order[1].image}
              alt=""
              className="body-main-total__image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

Total.propTypes = {
  order: PropTypes.arrayOf(PropTypes.object),
};

export default Total;
