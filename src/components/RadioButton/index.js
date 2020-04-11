import React from "react";
import PropTypes from "prop-types";

function RadioButton(props) {
  const labelClasses = ["radio-section__container"];

  if (props.labelClass) {
    labelClasses.push(props.labelClass);
  }

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

RadioButton.propTypes = {
  labelClass: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  inputChange: PropTypes.func,
  title: PropTypes.string,
};

export default RadioButton;
