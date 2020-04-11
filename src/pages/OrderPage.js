import React from "react";

import NavigationList from "../components/Navigation/NavigationList";
import Order from "../components/Order";
import Modal from "../components/Modal";

export default function OrderPage(props) {
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
