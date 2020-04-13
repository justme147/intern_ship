import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Modal(props) {
  function onButtonAcceptClick() {
    props.onButtonDeclineClick();
  }

  return (
    <div className="modal">
      <div className="modal__inner">
        <div className="modal__content">
          <h2 className="modal__title">Подтвердить заказ</h2>
          <Link to={`/internship/build/order/${props.orderId}`}>
            <button
              className="button button__accept"
              onClick={() => onButtonAcceptClick()}
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

Modal.propTypes = {
  onButtonDeclineClick: PropTypes.func,
  orderId: PropTypes.string,
};

export default Modal;
