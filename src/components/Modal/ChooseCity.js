import React from "react";
import PropTypes from "prop-types";

function ChooseCity(props) {
  return (
    <div className="container__location" onClick={props.handleWindowClick}>
      <section className="location">
        <div className="location__inner">
          <div className="location__close">
            <div
              className="location__icon--padding"
              onClick={props.handleCloseClick}
            >
              <img
                src={props.srcIcon}
                className="location__icon"
                alt="close_icon"
              />
            </div>
          </div>
          <label className="location__title">Укажите Ваш город</label>
          <input
            type="text"
            className={
              !props.isCorrectCity
                ? "location__input location__input--border"
                : "location__input"
            }
            placeholder="Введите город"
            value={props.city}
            onChange={props.handleCityChange}
          />
          {!props.isCorrectCity && (
            <p className="location__error">
              Город введен неверно. Проверьте правильность ввода или убедитесь,
              что в данном городе предоставляются наши услуги.
            </p>
          )}
          {props.city && props.isCorrectCity && (
            <ul className="location__list">
              {props.cities.map((item) => {
                const valueFix = item.name.toLowerCase();
                if (valueFix.includes(props.city.toLowerCase())) {
                  return (
                    <li
                      key={item.id}
                      className="location__item"
                      onClick={() => props.handleItemClick(item.name, item.id)}
                    >
                      {item.name}
                    </li>
                  );
                }
              })}
            </ul>
          )}
        </div>
      </section>
    </div>
  );
}

ChooseCity.propTypes = {
  handleWindowClick: PropTypes.func,
  handleCloseClick: PropTypes.func,
  srcIcon: PropTypes.string,
  isCorrectCity: PropTypes.bool,
  city: PropTypes.string,
  handleCityChange: PropTypes.func,
  cities: PropTypes.arrayOf(PropTypes.object),
  handleItemClick: PropTypes.func,
};

export default ChooseCity;
