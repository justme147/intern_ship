import React from "react";
import PropTypes from "prop-types";

import RadioButton from "../RadioButton";

function OptionsColor(props) {
  function handleInputChange(e) {
    props.menuColorChange("value", e.target.value, 2);
  }

  return (
    <div className="body-main-options__group">
      {props.colors.map((item) => {
        return (
          <RadioButton
            name="color"
            value={item[0].toUpperCase() + item.slice(1)}
            inputChange={handleInputChange}
            key={item}
          />
        );
      })}
    </div>
  );
}

OptionsColor.propTypes = {
  menuColorChange: PropTypes.func,
  colors: PropTypes.array,
};

export default OptionsColor;
