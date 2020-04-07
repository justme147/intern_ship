import React from "react";

export default function AdminCheckbox(props) {
  return (
    <label className="checkbox-section__container checkbox-section__container--color">
      <input type="checkbox" className="checkbox-section__input" />
      <span className="checkbox-section__checkmark checkbox-section__checkmark--blue"></span>
      {props.text}
    </label>
  );
}
