import React, { useState } from "react";
import PropTypes from "prop-types";

import OrderCheckbox from "../Checkbox";

function OptionsServices(props) {
  const [services, setServices] = useState([
    { id: 5, name: "fuel", title: "Полный бак", price: 500, checked: false },
    {
      id: 6,
      name: "chair",
      title: "Детское кресло",
      price: 200,
      checked: false,
    },
    { id: 7, name: "wheel", title: "Правый руль", price: 1600, checked: false },
  ]);

  function handleInputChange(e, id) {
    e.persist();
    const findItem = services.filter((item) => item.id === id);
    findItem[0].checked = !findItem[0].checked;
    const newServices = services.map((item) => {
      return item.id === findItem[0].id ? findItem[0] : item;
    });
    setServices(newServices);

    props.menuServicesChange("value", e.target.checked, id);
    props.priceChange(
      e.target.checked
        ? props.price + +findItem[0].price
        : props.price - +findItem[0].price
    );
  }

  return (
    <div className="body-main-options__group body-main-options__group--display">
      {services.map((item) => {
        return (
          <OrderCheckbox
            name={item.name}
            checked={item.checked}
            title={item.title}
            price={item.price}
            changeHandler={handleInputChange}
            key={item.id}
            id={item.id}
          />
        );
      })}
    </div>
  );
}

OptionsServices.propTypes = {
  menuServicesChange: PropTypes.func,
  priceChange: PropTypes.func,
  price: PropTypes.number,
};

export default OptionsServices;
