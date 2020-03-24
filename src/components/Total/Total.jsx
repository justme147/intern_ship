import React from "react";

export default function Total(props) {
  return (
    <div className="body-main-total__inner">
      <div className="body-main-total">
        <div className="body-main-total__container">
          <div className="body-main-total__descr">
            <p className="body-main-total__model">
              {props.name}, {props.model}
            </p>
            <p className="body-main-total__number">
              {props.number.toUpperCase()}
            </p>
            <p className="body-main-total__fuel">
              <span>Топливо </span>
              {props.isFull ? "100%" : props.fuel}
            </p>
            <p className="body-main-total__since">
              <span>Доступна с </span>
              {props.since}
            </p>
          </div>
          <div className="body-main-total__img">
            <img
              src={`./images/orderpage/cars/${props.model}.jpg`}
              alt=""
              className="body-main-total__image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
