import React, { useState } from "react";
import PropTypes from "prop-types";

import OrderCheckbox from "../Checkbox";

function OptionsServices(props) {
  // const [fuel, setFuel] = useState(false);
  // const [chair, setChair] = useState(false);
  // const [wheel, setWheel] = useState(false);
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

  // function handleInputChange(e, index) {
  //   if (e.target.name === "fuel") {
  //     setFuel(e.target.checked);
  //   } else if (e.target.name === "chair") {
  //     setChair(e.target.checked);
  //   } else {
  //     setWheel(e.target.checked);
  //   }

  //   props.menuServicesChange("value", e.target.checked, index);
  // }

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
          // <label className="checkbox-section__container">
          //   <input
          //     type="checkbox"
          //     name="fuel"
          //     checked={item.checked}
          //     onChange={(e) => handleInputChange(e, 5)}
          //     className="checkbox-section__input"
          //   />
          //   <span className="checkbox-section__checkmark"></span>
          //   {`${item.title}, ${item.price}₽`}
          // </label>
        );
      })}
      {/* <label className="checkbox-section__container">
        <input
          type="checkbox"
          name="fuel"
          checked={fuel}
          onChange={(e) => handleInputChange(e, 5)}
          className="checkbox-section__input"
        />
        <span className="checkbox-section__checkmark"></span>
        Полный бак, 500р
      </label>
      <label className="checkbox-section__container">
        <input
          type="checkbox"
          name="chair"
          checked={chair}
          onChange={(e) => handleInputChange(e, 6)}
          className="checkbox-section__input"
        />
        <span className="checkbox-section__checkmark"></span>
        Детское кресло, 200р
      </label>
      <label className="checkbox-section__container">
        <input
          type="checkbox"
          name="wheel"
          checked={wheel}
          onChange={(e) => handleInputChange(e, 7)}
          className="checkbox-section__input"
        />
        <span className="checkbox-section__checkmark"></span>
        Правый руль, 1600р
      </label> */}
    </div>
  );
}

OptionsServices.propTypes = {
  menuServicesChange: PropTypes.func,
  priceChange: PropTypes.func,
  price: PropTypes.number,
};

export default OptionsServices;
