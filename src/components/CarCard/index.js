import React from "react";
import PropTypes from "prop-types";

function CarCard(props) {
  return (
    <div className="body-main__card">
      <div className="body-main__info">
        <img
          src={`http://api-factory.simbirsoft1.com${props.car.thumbnail.path}`}
          alt={props.car.name}
          className="body-main__image"
        />
        <h3 className="body-main__model">{props.car.name}</h3>
        <p className="body-main__type">Компакт-кар</p>
        <label className="body-main__file">
          <input type="file" />
          <span className="body-main__choose">Выберите файл...</span>
          <span className="body-main__overview">Обзор</span>
        </label>
      </div>
      <div className="body-main__fuel">
        <div className="body-main__filled">
          <h4 className="body-main__label">Заполнено</h4>
          <p className="body-main__percent">74%</p>
        </div>
        <div className="body-main__progress">
          <div className="body-main__current"></div>
        </div>
      </div>
      <div className="body-main__description">
        <h4 className="body-main__label body-main__label--bold">Описание</h4>
        <p className="body-main__text">
          {props.car.description === "" || !props.car.description
            ? "Описания нет"
            : props.car.description}
        </p>
      </div>
    </div>
  );
}

CarCard.propTypes = {
  car: PropTypes.object,
};

export default CarCard;
