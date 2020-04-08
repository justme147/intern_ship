import React, { useState } from "react";

import AdminCheckbox from "../Checkbox/AdminCheckbox.jsx";

export default function CarSetting() {
  const [colors, setColors] = useState([
    { id: 1, color: "Красный" },
    { id: 2, color: "Белый" },
    { id: 3, color: "Черный" },
  ]);
  return (
    <div className="body-main__settings">
      <h2 className="body-main__subtitle">Настройки автомобиля</h2>
      <div className="body-main__wrap body-main__wrap--nowrap body-main__wrap--margin">
        <label className="body-main__group">
          Модель автомобиля
          <input
            type="text"
            className="body-main__input"
            placeholder="Введите модель автомобиля"
          />
        </label>
        <label className="body-main__group body-main__group--red">
          Тип автомобиля
          <input
            type="text"
            className="body-main__input"
            placeholder="Введите тип автомобиля"
          />
          <span className="body-main__error">Пример ошибки</span>
        </label>
      </div>
      <div className="body-main__wrap body-main__wrap--end">
        <label className="body-main__group body-main__group--margin">
          Доступные цвета
          <input
            type="text"
            className="body-main__input"
            placeholder="Введите цвет автомобиля"
          />
        </label>
        <button className="body-main__create">
          <span></span>
        </button>
      </div>

      <div className="body-main__checkbox-group body-main__checkbox-group--margin">
        {colors.map((item) => {
          return <AdminCheckbox text={item.color} key={item.id} blue />;
        })}
      </div>

      <div className="body-main__wrap body-main__wrap--between">
        <div className="body-main__edit">
          <button className="body-main__button body-main__button--blue">
            Сохранить
          </button>
          <button className="body-main__button body-main__button--gray">
            Отменить
          </button>
        </div>
        <div className="body-main__delete">
          <button className="body-main__button body-main__button--red">
            Удалить
          </button>
        </div>
      </div>
    </div>
  );
}
