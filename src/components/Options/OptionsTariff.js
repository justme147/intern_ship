import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import RadioButton from "../RadioButton";
import { fetchData } from "../../assets/scripts/fetchdata";

function OptionsTariff(props) {
  const [value, setValue] = useState([]);
  const [price, setPrice] = useState(props.price);

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
            price: item.price,
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
    e.persist();
    const from = new Date(
      props.since.replace(/(\d+).(\d+).(\d+)/, `$3.$2.$1`)
    ).getTime();
    const to = new Date(
      props.by.replace(/(\d+).(\d+).(\d+)/, `$3.$2.$1`)
    ).getTime();
    const time = (to / 1000 - from / 1000) / 60;

    if (e.target.value === "Поминутно") {
      const newPrice = time * +e.target.attributes.price.value;
      props.priceChange(price + newPrice);
    }

    if (e.target.value === "На сутки") {
      const pricePerMinute = +e.target.attributes.price.value / 1440;
      const newPrice = time * pricePerMinute;
      props.priceChange(Math.ceil(price + newPrice));
    }

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
            price={item.price}
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
  priceChange: PropTypes.func,
  since: PropTypes.string,
  by: PropTypes.string,
};

export default OptionsTariff;
