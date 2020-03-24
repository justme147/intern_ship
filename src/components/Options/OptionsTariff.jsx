import React from "react";

export default function OptionsTariff(props) {
  function handleInputChange(e) {
    props.menuTariffChange("value", e.target.value, 4);
  }

  return (
    <div className="body-main-options__group body-main-options__group--display">
      <label className="radio-section__container radio-section__container--margin">
        <input
          type="radio"
          name="tariff"
          value="Поминутно"
          onChange={handleInputChange}
          className="radio-section__input"
        />
        <span className="radio-section__checkmark"></span>
        Поминутно, 7₽/мин
      </label>
      <label className="radio-section__container radio-section__container--margin">
        <input
          type="radio"
          name="tariff"
          value="На сутки"
          onChange={handleInputChange}
          className="radio-section__input"
        />
        <span className="radio-section__checkmark"></span>
        На сутки, 1999 ₽/сутки
      </label>
    </div>
  );
}
