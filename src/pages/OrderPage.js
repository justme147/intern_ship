import React from "react";
import PropTypes from "prop-types";

import NavigationList from "../components/Navigation/NavigationList";
import Order from "../components/Order";
import Modal from "../components/Modal";

function OrderPage(props) {
  return (
    <div className="body-main">
      <div className="body-main__inner">
        <NavigationList
          active={props.isActive}
          menuClick={props.handleMenuClick}
        />

        <div className="body-main__content">
          {props.renderStep}

          <Order
            order={props.order}
            onButtonClick={props.handleButtonClick}
            step={props.isActive}
          />
        </div>

        {props.isModal ? (
          <Modal
            onButtonClick={props.handleButtonClick}
            onButtonDeclineClick={props.handleButtonDeclineClick}
            orderId={props.orderId}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

OrderPage.propTypes = {
  isActive: PropTypes.number,
  handleMenuClick: PropTypes.func,
  renderStep: PropTypes.object,
  order: PropTypes.arrayOf(PropTypes.object),
  handleButtonClick: PropTypes.func,
  isModal: PropTypes.bool,
  handleButtonDeclineClick: PropTypes.func,
  orderId: PropTypes.string,
};

export default OrderPage;
