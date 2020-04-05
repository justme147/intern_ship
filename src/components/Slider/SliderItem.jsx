import React from "react";

export default function SliderItem(props) {
  const item = props.item;
  return (
    <div className="slider__item">
      <div className={`slider__image slider__image--slide${item.id}`}>
        <div className="slider__bcg">
          <div className="slider-content">
            <div className="slider-content__top">
              <h3 className="slider-content__title">{item.title}</h3>
              <p className="slider-content__text">{item.text}</p>
              <button
                className={`button slider-content__button slider-content__button--bcg${item.id}`}
              >
                Подробнее
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
