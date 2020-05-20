import React from "react";
import PropTypes from "prop-types";

import OrderItem from "./OrderItem";
import { useHistory, useParams } from "react-router-dom";
import { fetchDataById, putData } from "../../assets/scripts/fetchdata";

function Order(props) {
  const history = useHistory();
  const { id } = useParams();
  async function declineClick() {
    const orderStatus = await fetchDataById(
      "orderStatus",
      JSON.parse(localStorage.getItem("api_token")),
      "5e26a1f5099b810b946c5d8c"
    );

    const updateOrder = {
      orderStatusId: orderStatus,
    };

    const putOrderStatus = await putData(
      "order",
      JSON.parse(localStorage.getItem("api_token")),
      id,
      updateOrder
    );
    console.log(putOrderStatus);
    props.onButtonClick();
    history.push("/order");
  }

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
      default:
        button = (
          <button
            className="button body-main-order__button body-main-order__button--gradient"
            onClick={declineClick}
          >
            Отменить
          </button>
        );
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
          <span>Цена: </span>
          {props.price} ₽
        </p>
        <OrderButton />
      </div>
    </div>
  );
}

Order.propTypes = {
  order: PropTypes.arrayOf(PropTypes.object),
  onButtonClick: PropTypes.func,
  step: PropTypes.number,
  price: PropTypes.number,
};

export default Order;
