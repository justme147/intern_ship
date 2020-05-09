import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import deleteIcon from "../../assets/images/orderpage/form_icon_delete.svg";
import OrderItem from "../Order/OrderItem";
import LocationFormInput from "./LocationFormInput";

function LocationForm(props) {
  const [cityShow, setCityShow] = useState(false);
  const [isCorrectCity, setIsCorrectCity] = useState(true);

  const [placies, setPlacies] = useState([]);
  const [placeShow, setPlaceShow] = useState(false);
  const [isCorrectPlace, setIsCorrectPlace] = useState(true);

  useEffect(() => {
    for (let item of props.cities) {
      if (item.name === props.city) {
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
      if (item.address === props.place) {
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
      props.onInputChange("placeId", "", 0);
    }
    props.onInputChange(e.target.name, "", 0);
    props.onInputChange(e.target.name + "Id", "", 0);
  }

  function cityItemClick(value, id) {
    props.onInputChange("city", value, 0);
    props.onInputChange("cityId", id, 0);
    setCityShow(false);
    setIsCorrectCity(true);
    if (value === props.city) return;
    fetchData(value);
  }

  function placeItemClick(value, id) {
    props.onInputChange("place", value, 0);
    props.onInputChange("placeId", id, 0);
    setPlaceShow(false);
    setIsCorrectPlace(true);
    // console.log("itemClick");
  }

  function onInputKeyDown(e) {
    console.log(e.target.name);
    if (e.target.name === "city" && e.key === "Enter") {
      if (!isCorrectCity) return;
      fetchData(props.city);
      const cityId = props.cities.filter(
        (item) => item.name === e.target.value
      );
      if (cityId.length) {
        props.onInputChange("cityId", cityId[0].id, 0);
      }
      e.target.blur();
      setCityShow(false);
    } else if (e.target.name === "place" && e.key === "Enter") {
      if (!isCorrectPlace) return;
      const placeId = placies.filter((item) => item.address === e.target.value);
      if (placeId.length) {
        props.onInputChange("placeId", placeId[0].id, 0);
      }
      e.target.blur();
      setPlaceShow(false);
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
        <LocationFormInput
          isCorrect={isCorrectCity}
          value={props.city}
          inputChange={inputChange}
          name={"city"}
          placeholder={"Начните вводить город выдачи"}
          handleInputFocus={() => setCityShow(true)}
          handleInputKeyDown={(e) => onInputKeyDown(e)}
          iconSrc={deleteIcon}
          handleIconClick={inputClick}
          menuShow={cityShow}
          arrayData={props.cities}
          handleMenuItemClick={cityItemClick}
        />
      </div>

      <div className="form-section__group">
        <label className="form-section__label">Пункт выдачи</label>
        <LocationFormInput
          isCorrect={isCorrectPlace}
          value={props.place}
          inputChange={inputChange}
          name={"place"}
          placeholder={"Начните вводить пункт выдачи"}
          handleInputFocus={() => setPlaceShow(true)}
          handleInputKeyDown={(e) => onInputKeyDown(e)}
          iconSrc={deleteIcon}
          handleIconClick={inputClick}
          menuShow={placeShow}
          arrayData={placies}
          handleMenuItemClick={placeItemClick}
        />
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
