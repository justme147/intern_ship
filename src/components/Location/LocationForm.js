import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import deleteIcon from "../../assets/images/orderpage/form_icon_delete.svg";
import OrderItem from "../Order/OrderItem";

function LocationForm(props) {
  const [cityShow, setCityShow] = useState(false);
  const [isCorrectCity, setIsCorrectCity] = useState(true);

  const [placies, setPlacies] = useState([]);
  const [placeShow, setPlaceShow] = useState(false);
  const [isCorrectPlace, setIsCorrectPlace] = useState(true);

  useEffect(() => {
    for (let item of props.cities) {
      if (item.value === props.city) {
        setIsCorrectCity(true);
        setPlacies(item.placies);
        return;
      }
    }

    const items = document.querySelectorAll(".form-section__item");

    if (props.city === "") {
      setIsCorrectCity(true);
      return;
    }

    items.length === 0 ? setIsCorrectCity(false) : setIsCorrectCity(true);
  }, [props.city]);

  useEffect(() => {
    for (let item of placies) {
      if (item.descr === props.place) {
        setIsCorrectPlace(true);
        return;
      }
    }

    const items = document.querySelectorAll(".form-section__item");

    if (props.place === "") {
      setIsCorrectPlace(true);
      return;
    }

    items.length === 0 ? setIsCorrectPlace(false) : setIsCorrectPlace(true);
    console.log("useEffect");
  }, [props.place]);

  useEffect(() => {
    const closeUl = (e) => {
      const inputCity = document.querySelectorAll(".form-section__group")[0];
      const inputPlace = document.querySelectorAll(".form-section__group")[1];

      if (e.target === inputCity || inputCity.contains(e.target)) {
        setPlaceShow(false);
        return;
      }

      if (e.target === inputPlace || inputPlace.contains(e.target)) {
        setCityShow(false);
        return;
      }

      // if (e.target === inputCity || inputCity.contains(e.target)) return;
      // if (e.target === inputPlace || inputPlace.contains(e.target)) return;

      setCityShow(false);
      setPlaceShow(false);
    };

    window.addEventListener("click", closeUl);

    return () => {
      window.removeEventListener("click", closeUl);
    };
  }, []);

  function inputChange(e) {
    if (e.target.name === "city") {
      props.onInputChange("place", "", 0);
    }

    const value =
      e.target.value.length !== 0
        ? e.target.value[0].toUpperCase() + e.target.value.slice(1)
        : e.target.value;

    props.onInputChange(e.target.name, value, 0);
    setIsCorrectCity(true);
    setIsCorrectPlace(true);
  }

  function inputClick(e) {
    if (e.target.name === "city") {
      props.onInputChange("place", "", 0);
    }
    props.onInputChange(e.target.name, "", 0);
  }

  function cityItemClick(value) {
    props.onInputChange("city", value, 0);
    setCityShow(false);
    setIsCorrectCity(true);
    if (value === props.city) return;
    fetchData(value);
  }

  function placeItemClick(value) {
    props.onInputChange("place", value, 0);
    setPlaceShow(false);
    setIsCorrectPlace(true);
    console.log("itemClick");
  }

  function onInputCityKeyDown(e) {
    if (e.key === "Enter") {
      if (!isCorrectCity) return;
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
          className={
            !isCorrectCity
              ? "form-section__input form-section__input--border"
              : "form-section__input"
          }
          type="text"
          value={props.city}
          onChange={inputChange}
          name="city"
          placeholder="Начните вводить город выдачи"
          autoComplete="off"
          onFocus={() => setCityShow(true)}
          onKeyDown={(e) => onInputCityKeyDown(e)}
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
        {cityShow && isCorrectCity && (
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
        {!isCorrectCity && (
          <p className="form-section__error">
            Город введен неверно. Проверьте правильность ввода или выберите
            город из предложенного списка.
          </p>
        )}
      </div>

      <div className="form-section__group">
        <label className="form-section__label">Пункт выдачи</label>
        <input
          className={
            !isCorrectPlace
              ? "form-section__input form-section__input--border"
              : "form-section__input"
          }
          type="text"
          value={props.place}
          onChange={inputChange}
          name="place"
          placeholder="Начните вводить пункт выдачи"
          autoComplete="off"
          onFocus={() => setPlaceShow(true)}
        />
        {props.place && (
          <img
            src={deleteIcon}
            className="form-section__delete"
            onClick={inputClick}
            name="place"
          />
        )}
        {placeShow && isCorrectPlace && (
          <ul className="form-section__list">
            {placies.map((item) => {
              const valueFix = item.descr.toLowerCase();
              if (valueFix.includes(props.place.toLowerCase())) {
                return (
                  <li
                    className="form-section__item"
                    key={item.id}
                    onClick={() => placeItemClick(item.descr)}
                  >
                    {item.descr}
                  </li>
                );
              }
            })}
          </ul>
        )}
        {!isCorrectPlace && (
          <p className="form-section__error">
            Пункт выдачи введен неверно. Проверьте правильность ввода или
            выберите пункт из предложенного списка.
          </p>
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
