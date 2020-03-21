import React, { useState } from "react";

export default function OptionsColor(props) {
  function handleInputChange(e) {
    props.menuColorChange(e.target.value);
  }

  return (
    <div className="body-main-options__group">
      <label className="radio-section__container">
        <input
          type="radio"
          name="color"
          value="Любой"
          onChange={handleInputChange}
          className="radio-section__input"
        />
        <span className="radio-section__checkmark"></span>
        Любой
      </label>
      <label className="radio-section__container">
        <input
          type="radio"
          name="color"
          value="Красный"
          onChange={handleInputChange}
          className="radio-section__input"
        />
        <span className="radio-section__checkmark"></span>
        Красный
      </label>
      <label className="radio-section__container">
        <input
          type="radio"
          name="color"
          value="Голубой"
          onChange={handleInputChange}
          className="radio-section__input"
        />
        <span className="radio-section__checkmark"></span>
        Голубой
      </label>
    </div>
  );
}
