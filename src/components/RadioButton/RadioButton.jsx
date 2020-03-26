import React from "react";

export default function RadioButton(props) {
  const labelClasses = ["radio-section__container"];
  props.labelClass ? labelClasses.push(props.labelClass) : null;

  return (
    <label className={labelClasses.join(" ")}>
      <input
        type="radio"
        name={props.name}
        value={props.value}
        onChange={props.inputChange}
        className="radio-section__input"
      />
      <span className="radio-section__checkmark"></span>
      {props.title ? props.title : props.value}
    </label>
  );
}
