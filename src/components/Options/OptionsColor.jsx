import React from "react";
import RadioButton from "../RadioButton/RadioButton.jsx";

export default function OptionsColor(props) {
  function handleInputChange(e) {
    props.menuColorChange("value", e.target.value, 2);
  }

  return (
    <div className="body-main-options__group">
      {props.colors.map(item => {
        return (
          <RadioButton
            name="color"
            value={item}
            inputChange={handleInputChange}
            key={item}
          />
        );
      })}
    </div>
  );
}
