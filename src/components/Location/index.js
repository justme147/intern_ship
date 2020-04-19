import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ReactMapGl, { Marker, Popup, GeolocateControl } from "react-map-gl";

import LocationForm from "./LocationForm";

const geolocateStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  margin: 10,
};

// const markers = [
//   {
//     id: 1,
//     car: "Марка, Модель",
//     descr: "Место стоянки",
//     coordinate: [54.305701651193445, 48.36058638039551],
//   },
//   {
//     id: 2,
//     car: "Марка, Модель",
//     descr: "Место стоянки",
//     coordinate: [54.31627297776601, 48.40030989590599],
//   },
//   {
//     id: 3,
//     car: "Марка, Модель",
//     descr: "Место стоянки",
//     coordinate: [54.329322665236624, 48.401871252190574],
//   },
//   {
//     id: 4,
//     car: "Марка, Модель",
//     descr: "Место стоянки",
//     coordinate: [54.263121947985184, 48.34543218410452],
//   },
//   {
//     id: 5,
//     car: "Марка, Модель",
//     descr: "Место стоянки",
//     coordinate: [54.28951809547812, 48.313453618174265],
//   },
//   {
//     id: 6,
//     car: "Марка, Модель",
//     descr: "Место стоянки",
//     coordinate: [54.29804648106295, 48.36577815163679],
//   },
// ];

function Location(props) {
  const [viewport, setViewport] = useState({
    latitude: JSON.parse(localStorage.getItem("position")).latitude,
    longitude: JSON.parse(localStorage.getItem("position")).longitude,
    zoom: 11,
    width: "100%",
    height: "100%",
  });

  const [markers, setMarkers] = useState([]);
  const [selectCar, setSelectCar] = useState(null);

  function ViewportChange(value) {
    setViewport({
      ...viewport,
      latitude: value.latitude,
      longitude: value.longitude,
    });
  }

  useEffect(() => {
    for (let item of props.cities) {
      if (item.value === props.city) {
        setMarkers(item.placies);
      }
    }
  }, [props.city]);

  useEffect(() => {
    const listener = (e) => {
      if (e.key === "Escape") {
        setSelectCar(null);
      }
    };

    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

  return (
    <div className="body-main-location__inner">
      <div className="body-main-location">
        <LocationForm
          city={props.city}
          place={props.place}
          onInputChange={props.onInputChange}
          cities={props.cities}
          onViewportChange={ViewportChange}
          // onInputClick={props.onInputClick}
        />
        <div className="body-main-location__map">
          <h5 className="body-main-location__subtitle">Выбрать на карте:</h5>
          <div className="body-main-location__chart">
            <ReactMapGl
              {...viewport}
              mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
              onViewportChange={(viewport) => setViewport(viewport)}
              onClick={() => setSelectCar(null)}
            >
              <GeolocateControl
                style={geolocateStyle}
                positionOptions={{ enableHighAccuracy: true }}
                trackUserLocation={true}
              />
              {markers.map((item) => (
                <Marker
                  key={item.id}
                  latitude={item.coordinate[0]}
                  longitude={item.coordinate[1]}
                >
                  <button
                    className="body-main-location__marker"
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectCar(item);
                      props.onInputChange("place", item.descr, 0);
                    }}
                  ></button>
                </Marker>
              ))}

              {selectCar ? (
                <Popup
                  latitude={selectCar.coordinate[0]}
                  longitude={selectCar.coordinate[1]}
                  onClose={() => setSelectCar(null)}
                >
                  <div className="mapboxgl-popup-content__description">
                    <h2 className="mapboxgl-popup-content__title">
                      {selectCar.car}
                    </h2>
                    <p className="mapboxgl-popup-content__text">
                      {selectCar.descr}
                    </p>
                  </div>
                </Popup>
              ) : null}
            </ReactMapGl>
          </div>
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
