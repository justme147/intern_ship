import React from "react";

export default function CarCard() {
  return (
    <div className="body-main__card">
      <div className="body-main__info">
        <img
          src="/images/orderpage/cars/i30 N.jpg"
          alt=""
          className="body-main__image"
        />
        <h3 className="body-main__model">Hyndai, i30 N</h3>
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eaque,
          quidem, commodi soluta qui quae quod dolorum sint alias, possimus
          illum assumenda eligendi cumque?
        </p>
      </div>
    </div>
  );
}
