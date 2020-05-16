import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import AdminCheckbox from "../AdminCheckbox";

function CarSetting({ car }) {
  const [model, setModel] = useState(car.name);
  const [type, setType] = useState("Компакт-кар");
  const [colors, setColors] = useState(car.colors);
  const [newColor, setNewColor] = useState("");

  function addNewColor() {
    if (newColor === "") {
    }
    setColors(colors.concat(newColor[0].toLowerCase() + newColor.slice(1)));
    setNewColor("");
  }

  function saveCarHandler() {
    console.log("save");
  }

  function resetCarHandler() {
    console.log("reset");
    setModel(car.name);
    setType("Компакт-кар");
    setColors(car.colors);
  }

  return (
    <div className="body-main__settings">
      <h2 className="body-main__subtitle">Настройки автомобиля</h2>
      <div className="body-main__wrap body-main__wrap--nowrap body-main__wrap--margin">
        <label className="body-main__group">
          Модель автомобиля
          <input
            type="text"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            className="body-main__input"
            placeholder="Введите модель автомобиля"
          />
        </label>
        <label className="body-main__group">
          Тип автомобиля
          <input
            type="text"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="body-main__input"
            placeholder="Введите тип автомобиля"
          />
          {/* <span className="body-main__error">Пример ошибки</span> */}
        </label>
      </div>
      <div className="body-main__wrap body-main__wrap--end">
        <label className="body-main__group body-main__group--margin">
          Доступные цвета
          <input
            type="text"
            value={newColor}
            onChange={(e) => setNewColor(e.target.value)}
            className="body-main__input"
            placeholder="Введите цвет автомобиля"
          />
          {/* <span className="body-main__error">Пример ошибки</span> */}
        </label>
        <button className="body-main__create" onClick={addNewColor}>
          <span></span>
        </button>
      </div>

      <div className="body-main__checkbox-group body-main__checkbox-group--margin">
        {colors.map((item) => {
          return <AdminCheckbox text={item} key={item} blue checked readOnly />;
        })}
      </div>

      <div className="body-main__wrap body-main__wrap--between">
        <div className="body-main__edit">
          <button
            className="body-main__button body-main__button--blue"
            onClick={saveCarHandler}
          >
            Сохранить
          </button>
          <button
            className="body-main__button body-main__button--gray"
            onClick={resetCarHandler}
          >
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

CarSetting.propTypes = {
  car: PropTypes.object,
};

export default CarSetting;
