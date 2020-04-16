import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import deleteIcon from "../../assets/images/orderpage/form_icon_delete.svg";

function LocationForm(props) {
  const [cityShow, setCityShow] = useState(false);

  function inputChange(e) {
    const value =
      e.target.value.length !== 0
        ? e.target.value[0].toUpperCase() + e.target.value.slice(1)
        : e.target.value;

    props.onInputChange(e.target.name, value, 0);
  }

  function inputClick(e) {
    props.onInputChange(e.target.name, "", 0);
  }

  function cityItemClick(value) {
    props.onInputChange("city", value, 0);
    setCityShow(false);
    if (value === props.city) return;
    fetchData(value);
  }

  function onInputKeyDown(e) {
    if (e.key === "Enter") {
      console.log(e.target);
      fetchData(props.city);
      e.target.blur();
      setCityShow(false);
    }
  }

  async function fetchData(value) {
    // if (value === props.city) return;

    const token = process.env.REACT_APP_MAPBOX_TOKEN;

    const newValue = value === "Волгоград" ? `город-герой ${value}` : value;

    const response = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${newValue}.json?access_token=${token}&types=place`
    );
    const json = await response.json();
    const { features } = json;

    console.log(features);

    const position = {
      latitude: features[0].center[1],
      longitude: features[0].center[0],
    };

    localStorage.setItem("city", value);
    localStorage.setItem("position", JSON.stringify(position));
    props.onViewportChange(position);
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
          onKeyDown={(e) => onInputKeyDown(e)}
          // onBlur={() => setCityShow(false)}
          // onBlur={() => console.log()}
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
  onViewportChange: PropTypes.func,
};

export default LocationForm;
