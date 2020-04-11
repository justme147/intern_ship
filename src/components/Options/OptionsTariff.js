import React, { useState } from "react";

import RadioButton from "../RadioButton";

export default function OptionsTariff(props) {
  const [value, setValue] = useState([
    {
      id: 1,
      value: "Поминутно",
      title: "Поминутно, 7₽/мин",
    },
    {
      id: 2,
      value: "На сутки",
      title: "На сутки, 1999 ₽/сутки",
    },
  ]);
  function handleInputChange(e) {
    props.menuTariffChange("value", e.target.value, 4);
  }

  return (
    <div className="body-main-options__group body-main-options__group--display">
      {value.map((item) => {
        return (
          <RadioButton
            name="tariff"
            value={item.value}
            title={item.title}
            inputChange={handleInputChange}
            key={item.id}
            labelClass="radio-section__container--margin"
          />
        );
      })}
    </div>
  );
}
