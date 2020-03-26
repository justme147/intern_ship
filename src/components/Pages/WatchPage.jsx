import React from "react";

import NavigationList from "../Navigation/NavigationList.jsx";
import Order from "../Order/Order.jsx";
import Total from "../Total/Total.jsx";

export default function OrderPage(props) {
  return (
    <div className="body-main">
      <div className="body-main__inner">
        <div className="body-list__inner">Заказ номер RU58491823</div>

        <div className="body-main__content">
          <Total
            since={props.since}
            name={props.name}
            model={props.model}
            number={props.number}
            fuel={props.fuel}
            isFull={props.isFull}
          />

          <Order
            order={props.order}
            onButtonClick={props.handleButtonClick}
            step={props.isActive}
          />
        </div>
      </div>
    </div>
  );
}
