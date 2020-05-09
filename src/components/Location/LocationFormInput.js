import React from "react";
import PropTypes from "prop-types";

function LocationFormInput(props) {
  return (
    <>
      <input
        className={
          !props.isCorrect
            ? "form-section__input form-section__input--border"
            : "form-section__input"
        }
        type="text"
        value={props.value}
        onChange={props.inputChange}
        name={props.name}
        placeholder={props.placeholder}
        autoComplete="off"
        onFocus={props.handleInputFocus}
        onKeyDown={props.handleInputKeyDown}
      />
      {props.value && (
        <img
          src={props.iconSrc}
          className="form-section__delete"
          onClick={props.handleIconClick}
          name={props.name}
        />
      )}
      {props.menuShow && props.isCorrect && (
        <ul className="form-section__list">
          {props.arrayData.map((item) => {
            const outputProp = props.name === "city" ? item.name : item.address;
            const valueFix = outputProp.toLowerCase();

            if (valueFix.includes(props.value.toLowerCase())) {
              return (
                <li
                  className="form-section__item"
                  key={item.id}
                  onClick={() => props.handleMenuItemClick(outputProp, item.id)}
                >
                  {outputProp}
                </li>
              );
            }
          })}
        </ul>
      )}
      {!props.isCorrect && props.name === "city" && (
        <p className="form-section__error">
          Город введен неверно. Проверьте правильность ввода или выберите город
          из предложенного списка.
        </p>
      )}
      {!props.isCorrect && props.name === "place" && (
        <p className="form-section__error">
          Пункт выдачи введен неверно. Проверьте правильность ввода или выберите
          пункт из предложенного списка.
        </p>
      )}
    </>
  );
}

LocationFormInput.propTypes = {
  isCorrect: PropTypes.bool,
  value: PropTypes.string,
  inputChange: PropTypes.func,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  handleInputFocus: PropTypes.func,
  handleInputKeyDown: PropTypes.func,
  iconSrc: PropTypes.string,
  handleIconClick: PropTypes.func,
  menuShow: PropTypes.bool,
  arrayData: PropTypes.arrayOf(PropTypes.object),
  handleMenuItemClick: PropTypes.func,
};

export default LocationFormInput;
