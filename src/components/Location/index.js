import React from "react";

import LocationForm from "./LocationForm";

export default function Location(props) {
  return (
    <div className="body-main-location__inner">
      <div className="body-main-location">
        <LocationForm
          city={props.city}
          place={props.place}
          onInputChange={props.onInputChange}
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
