import React, { useState } from "react";
import PropTypes from "prop-types";

import deleteIcon from "../../assets/images/orderpage/form_icon_delete.svg";

function LocationForm(props) {
  const [cityShow, setCityShow] = useState(false);

  function inputChange(e) {
    props.onInputChange(e.target.name, e.target.value, 0);
  }

  function inputClick(e) {
    props.onInputChange(e.target.name, "", 0);
  }

  function cityItemClick(value) {
    props.onInputChange("city", value, 0);
    setCityShow(false);
  }

  return (
    <form className="form-section__container">
      <div className="form-section__group">
        <label className="form-section__label">Город</label>
        <input
          className="form-section__input"
          type="text"
          value={props.city}
          onChange={inputChange}
          name="city"
          placeholder="Начните вводить город выдачи"
          autoComplete="off"
          onFocus={() => setCityShow(true)}
          // onBlur={() => setCityShow(false)}
        />
        {props.city && (
          <img
            src={deleteIcon}
            className="form-section__delete"
            onClick={inputClick}
            name="city"
          />
        )}
        {cityShow && (
          <ul className="form-section__list">
            {props.cities.map((item) => {
              const valueFix = item.value.toLowerCase();
              if (valueFix.includes(props.city.toLowerCase())) {
                return (
                  <li
                    key={item.id}
                    className="form-section__item"
                    onClick={() => cityItemClick(item.value)}
                  >
                    {item.value}
                  </li>
                );
              }
            })}
          </ul>
        )}
      </div>

      <div className="form-section__group">
        <label className="form-section__label">Пункт выдачи</label>
        <input
          className="form-section__input"
          type="text"
          value={props.place}
          onChange={inputChange}
          name="place"
          placeholder="Начните вводить пункт выдачи"
          autoComplete="off"
        />
        {props.place && (
          <img
            src={deleteIcon}
            className="form-section__delete"
            onClick={inputClick}
            name="place"
          />
        )}
      </div>
    </form>
  );
}

LocationForm.propTypes = {
  city: PropTypes.string,
  place: PropTypes.string,
  onInputChange: PropTypes.func,
  cities: PropTypes.arrayOf(PropTypes.object),
};

export default LocationForm;
