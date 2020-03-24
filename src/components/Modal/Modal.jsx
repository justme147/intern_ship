import React from "react";

export default function Modal(props) {
  return (
    <div className="modal">
      <div className="modal__inner">
        <div className="modal__content">
          <h2 className="modal__title">Подтвердить заказ</h2>
          <button className="button button__accept">Подтвердить</button>
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
