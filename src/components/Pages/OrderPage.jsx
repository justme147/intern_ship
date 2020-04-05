import React from "react";

import Navbar from "../Navbar/Navbar.jsx";
import Header from "../Header/Header.jsx";
import NavigationList from "../Navigation/NavigationList.jsx";
import Order from "../Order/Order.jsx";
import Modal from "../Modal/Modal.jsx";

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
