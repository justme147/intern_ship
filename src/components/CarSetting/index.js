import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import AdminCheckbox from "../Checkbox/AdminCheckbox";
import { putData } from "../../assets/scripts/fetchdata";

function CarSetting({ car, changeAlert, changeAlertMessage }) {
  const [model, setModel] = useState(car.name);
  const [type, setType] = useState("Компакт-кар");
  const [colors, setColors] = useState([]);
  const [newColor, setNewColor] = useState("");

  const [error, setError] = useState({
    model: { empty: false },
    type: { empty: false },
    color: { empty: false, identical: false },
  });

  useEffect(() => {
    const updateArray = car.colors.map((item) => ({
      name: item,
      checked: true,
    }));
    setColors(updateArray);
  }, []);

  function addNewColor() {
    if (newColor === "") {
      setError({ ...error, color: { ...error.color, empty: true } });
      return;
    }
    setColors(colors.concat({ name: newColor, checked: true }));
    setNewColor("");
    setError({ ...error, color: { ...error.color, empty: false } });
  }

  async function saveCarHandler() {
    let errors = false;

    if (model === "") {
      setError({
        ...error,
        model: { ...error.model, empty: true },
      });
      errors = true;
    }
    if (type === "") {
      setError({
        ...error,
        type: { ...error.type, empty: true },
      });
      errors = true;
    }

    if (errors) {
      changeAlertMessage({
        title: "Неудача. Полe 'модель' и 'тип' не могут быть пустыми",
        correct: false,
      });
      changeAlert(true);
      return;
    }

    const colorsNew = [];
    colors.map((item) => (item.checked ? colorsNew.push(item.name) : null));

    const updateCar = {
      name: model,
      colors: colorsNew,
    };

    const putCar = await putData(
      "car",
      JSON.parse(localStorage.getItem("api_token")),
      car.id,
      updateCar
    );

    changeAlertMessage({
      title: "Успех. Автомобиль успешно изменен",
      correct: true,
    });
    changeAlert(true);
  }

  function resetCarHandler() {
    console.log("reset");
    setModel(car.name);
    setType("Компакт-кар");

    const updateArray = car.colors.map((item) => ({
      name: item,
      checked: true,
    }));
    setColors(updateArray);
    setError({
      model: { empty: false },
      type: { empty: false },
      color: { empty: false, identical: false },
    });
    changeAlert(false);
  }

  function handleCheckboxChange(name) {
    const findItem = colors.filter((item) => item.name === name);
    findItem[0].checked = !findItem[0].checked;
    const newColors = colors.map((item) => {
      return item.name === findItem[0].name ? findItem[0] : item;
    });

    setColors(newColors);
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
          {error.model.empty && (
            <span className="body-main__error">Поле не может быть пустым</span>
          )}
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
          {error.type.empty && (
            <span className="body-main__error">Поле не может быть пустым</span>
          )}
        </label>
      </div>
      <div className="body-main__wrap body-main__wrap--end">
        <label className="body-main__group body-main__group--margin">
          Доступные цвета
          <input
            type="text"
            value={newColor}
            onChange={(e) =>
              setNewColor(
                e.target.value.length !== 0 ? e.target.value.toLowerCase() : ""
              )
            }
            className="body-main__input"
            placeholder="Введите цвет автомобиля"
          />
          {error.color.empty && (
            <span className="body-main__error">Поле не может быть пустым</span>
          )}
        </label>
        <button className="body-main__create" onClick={addNewColor}>
          <span></span>
        </button>
      </div>

      <div className="body-main__checkbox-group body-main__checkbox-group--margin">
        {colors.map((item) => {
          return (
            <AdminCheckbox
              text={item.name}
              key={item.name}
              blue
              checked={item.checked}
              changeHandler={handleCheckboxChange}
            />
          );
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
  changeAlert: PropTypes.func,
  changeAlertMessage: PropTypes.func,
};

export default CarSetting;
