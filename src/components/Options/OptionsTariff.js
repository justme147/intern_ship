import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import RadioButton from "../RadioButton";
import { fetchData } from "../../assets/scripts/fetchdata";

function OptionsTariff(props) {
  const [value, setValue] = useState([]);

  const [tariffs, setTariffs] = useState([]);
  useEffect(() => {
    async function fetchRate() {
      try {
        const rate = await fetchData(
          "rate",
          JSON.parse(localStorage.getItem("api_token"))
        );
        // console.log(rate);
        // setTariffs(data);
        const rateArr = rate.map((item) => {
          const result = {
            id: item.id,
            value: item.rateTypeId.name,
            title: `${item.rateTypeId.name}, ${item.price} ₽/${item.rateTypeId.unit}`,
          };
          return result;
          // setValue([...value, {...result}]);
        });
        // console.log(rateArr);
        setValue(rateArr);
      } catch (e) {
        console.log(e);
      }
    }
    fetchRate();
  }, []);

  function handleInputChange(e) {
    props.menuTariffChange("value", e.target.value, 4);
    const rateId = value.filter((item) => item.value === e.target.value);
    if (rateId.length) {
      props.menuTariffChange("rateId", rateId[0].id, 4);
    }
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

OptionsTariff.propTypes = {
  menuTariffChange: PropTypes.func,
};

export default OptionsTariff;
