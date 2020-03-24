import React from "react";

import OrderItem from "./OrderItem.jsx";

export default function Order(props) {
  function OrderButton() {
    let button;
    switch (props.step) {
      case 1:
        button = (
          <button
            className="button body-main-order__button"
            disabled={!props.order[0].city || !props.order[0].place}
            onClick={props.onButtonClick}
          >
            Выбрать модель
          </button>
        );
        break;
      case 2:
        button = (
          <button
            className="button body-main-order__button"
            disabled={!props.order[1].value}
            onClick={props.onButtonClick}
          >
            Дополнительно
          </button>
        );
        break;
      case 3:
        button = (
          <button
            className="button body-main-order__button"
            disabled={!props.order[3].value || !props.order[4].value}
            onClick={props.onButtonClick}
          >
            Итого
          </button>
        );
        break;
      case 4:
        button = (
          <button
            className="button body-main-order__button"
            onClick={props.onButtonClick}
          >
            Заказать
          </button>
        );
        break;
    }

    return button;
  }

  return (
    <div className="body-main-order__inner">
      <div className="body-main-order">
        <h4 className="body-main-order__title">Ваш заказ: </h4>

        {props.order.map((item, idx) => {
          if (idx !== 0 && !item.value) return;
          return <OrderItem items={item} key={item.title} />;
        })}

        <p className="body-main-order__price">
          <span>Цена: </span>от 8 000 до 12 000 ₽
        </p>
        <OrderButton />
      </div>
    </div>
  );
}
