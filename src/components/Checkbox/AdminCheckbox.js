import React from "react";
import PropTypes from "prop-types";

function AdminCheckbox(props) {
  const spanClasses = ["checkbox-section__checkmark"];

  if (props.blue) {
    spanClasses.push("checkbox-section__checkmark--blue");
  }

  if (props.border) {
    spanClasses.push("checkbox-section__checkmark--border");
  }

  return (
    <label className="checkbox-section__container checkbox-section__container--color">
      {props.changeHandler ? (
        <input
          name={props.text}
          type="checkbox"
          className="checkbox-section__input"
          checked={props.checked}
          onChange={(e) => props.changeHandler(e.target.name)}
        />
      ) : (
        <input
          type="checkbox"
          className="checkbox-section__input"
          checked={props.checked}
          readOnly={props.readOnly}
        />
      )}

      <span className={spanClasses.join(" ")}></span>
      {props.text}
    </label>
  );
}

AdminCheckbox.propTypes = {
  blue: PropTypes.bool,
  border: PropTypes.bool,
  text: PropTypes.string,
  checked: PropTypes.bool,
  readOnly: PropTypes.bool,
  changeHandler: PropTypes.func,
};

AdminCheckbox.defaultProps = {
  checked: false,
};

export default AdminCheckbox;
