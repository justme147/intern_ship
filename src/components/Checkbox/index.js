import React from "react";
import PropTypes from "prop-types";

function OrderCheckbox(props) {
  return (
    <label className="checkbox-section__container">
      <input
        type="checkbox"
        name={props.name}
        checked={props.checked}
        onChange={(e) => props.changeHandler(e, props.id)}
        className="checkbox-section__input"
      />
      <span className="checkbox-section__checkmark"></span>
      {`${props.title}, ${props.price}₽`}
    </label>
  );
}

OrderCheckbox.propTypes = {
  name: PropTypes.string,
  checked: PropTypes.bool,
  changeHandler: PropTypes.func,
  title: PropTypes.string,
  price: PropTypes.number,
};

export default OrderCheckbox;
