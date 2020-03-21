import React from "react";

export default function RadioInput(props) {
  return (
    <label>
      <input
        type="radio"
        name={props.name}
        value={props.value}
        onChange={() => props.onInputChange(e.target.name, e.target.value)}
      />
      {props.value}
    </label>
  );
}
