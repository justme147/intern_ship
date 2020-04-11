import React from "react";

export default function AdminCheckbox(props) {
  const spanClasses = ["checkbox-section__checkmark"];

  if (props.blue) {
    spanClasses.push("checkbox-section__checkmark--blue");
  }

  if (props.border) {
    spanClasses.push("checkbox-section__checkmark--border");
  }

  return (
    <label className="checkbox-section__container checkbox-section__container--color">
      <input type="checkbox" className="checkbox-section__input" />
      <span className={spanClasses.join(" ")}></span>
      {props.text}
    </label>
  );
}
