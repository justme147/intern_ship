import React from "react";
import { Link } from "react-router-dom";

export default function Modal(props) {
  return (
    <div className="modal">
      <div className="modal__inner">
        <div className="modal__content">
          <h2 className="modal__title">Подтвердить заказ</h2>
          <Link to={`/order/${props.orderId}`}>
            <button
              className="button button__accept"
              onClick={props.onButtonDeclineClick}
            >
              Подтвердить
            </button>
          </Link>
          <button
            className="button button__decline"
            onClick={props.onButtonDeclineClick}
          >
            Вернуться
          </button>
        </div>
      </div>
    </div>
  );
}
