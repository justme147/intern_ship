import React, { useState } from "react";

export default function OptionsServices(props) {
  const [fuel, setFuel] = useState(false);
  const [chair, setChair] = useState(false);
  const [wheel, setWheel] = useState(false);

  function handleInputChange(e, index) {
    if (e.target.name === "fuel") {
      setFuel(e.target.checked);
    } else if (e.target.name === "chair") {
      setChair(e.target.checked);
    } else {
      setWheel(e.target.checked);
    }

    props.menuServicesChange("value", e.target.checked, index);
  }

  return (
    <div className="body-main-options__group body-main-options__group--display">
      <label className="checkbox-section__container">
        <input
          type="checkbox"
          name="fuel"
          checked={fuel}
          onChange={e => handleInputChange(e, 5)}
          className="checkbox-section__input"
        />
        <span className="checkbox-section__checkmark"></span>
        Полный бак, 500р
      </label>
      <label className="checkbox-section__container">
        <input
          type="checkbox"
          name="chair"
          checked={chair}
          onChange={e => handleInputChange(e, 6)}
          className="checkbox-section__input"
        />
        <span className="checkbox-section__checkmark"></span>
        Детское кресло, 200р
      </label>
      <label className="checkbox-section__container">
        <input
          type="checkbox"
          name="wheel"
          checked={wheel}
          onChange={e => handleInputChange(e, 7)}
          className="checkbox-section__input"
        />
        <span className="checkbox-section__checkmark"></span>
        Правый руль, 1600р
      </label>
    </div>
  );
}
