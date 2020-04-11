import React from "react";

function OrderLocation(props) {
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

export default function OrderItem(props) {
  return (
    <div className="body-main-order__item">
      <p className="body-main-order__subtitle">{props.items.title}</p>

      <OrderLocation item={props.items} />
    </div>
  );
}
