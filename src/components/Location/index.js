import React from "react";
import PropTypes from "prop-types";

import LocationForm from "./LocationForm";

function Location(props) {
  return (
    <div className="body-main-location__inner">
      <div className="body-main-location">
        <LocationForm
          city={props.city}
          place={props.place}
          onInputChange={props.onInputChange}
          cities={props.cities}
          // onInputClick={props.onInputClick}
        />
        <div className="body-main-location__map">
          <h5 className="body-main-location__subtitle">Выбрать на карте:</h5>
          <div className="body-main-location__chart"></div>
        </div>
      </div>
    </div>
  );
}

Location.propTypes = {
  city: PropTypes.string,
  place: PropTypes.string,
  onInputChange: PropTypes.func,
  cities: PropTypes.arrayOf(PropTypes.object),
};

export default Location;
