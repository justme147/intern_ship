import React from "react";

import Order from "../components/Order";
import Total from "../components/Total";

export default function OrderPage(props) {
  return (
    <div className="body-main">
      <div className="body-main__inner">
        <div className="body-list__inner">
          <p className="body-list__orderId">Заказ номер {props.orderId}</p>
        </div>

        <div className="body-main__content">
          <Total
            since={props.order[3].since}
            name={props.order[1].name}
            model={props.order[1].value}
            number={props.order[1].number}
            fuel={props.order[1].fuel}
            isFull={props.order[5].value}
            image={props.order[1].image}
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
