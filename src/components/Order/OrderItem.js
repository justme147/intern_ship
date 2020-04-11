import React from "react";
import PropTypes from "prop-types";

function OrderValue(props) {
  const item = props.item;

  if (item.hasOwnProperty("city") || item.hasOwnProperty("place")) {
    return (
      <div className="body-main-order__loc">
        <p className="body-main-order__text">{item.city}</p>
        <p className="body-main-order__text">{item.place}</p>
      </div>
    );
  }

  return (
    <p className="body-main-order__text">
      {item.value === true ? "Да" : item.value}
    </p>
  );
}

function OrderItem(props) {
  return (
    <div className="body-main-order__item">
      <p className="body-main-order__subtitle">{props.items.title}</p>

      <OrderValue item={props.items} />
    </div>
  );
}

OrderItem.propTypes = {
  items: PropTypes.object,
};

OrderValue.propTypes = {
  item: PropTypes.object,
};

export default OrderItem;
