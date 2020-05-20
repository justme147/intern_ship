import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import Order from "../components/Order";
import Total from "../components/Total";
import { useParams } from "react-router-dom";
import { fetchData, fetchDataById } from "../assets/scripts/fetchdata";

function WatchPage(props) {
  const [orderById, setOrderById] = useState({});
  const { id } = useParams();

  useEffect(() => {
    async function showOrder() {
      const order = await fetchDataById(
        "order",
        JSON.parse(localStorage.getItem("api_token")),
        id
      );
      setOrderById(order);
      console.log(order);
    }

    showOrder();
  }, [id]);

  return (
    <div className="body-main">
      <div className="body-main__inner">
        <div className="body-main__nav">
          <div className="body-list__inner">
            <p className="body-list__orderId">Заказ номер {id}</p>
          </div>
        </div>

        <div className="body-main__content">
          <Total order={props.order} />

          <Order
            order={props.order}
            onButtonClick={props.handleButtonClick}
            step={props.isActive}
            price={props.price}
          />
        </div>
      </div>
    </div>
  );
}

WatchPage.propTypes = {
  order: PropTypes.arrayOf(PropTypes.object),
  handleButtonClick: PropTypes.func,
  isActive: PropTypes.number,
  price: PropTypes.number,
};

export default WatchPage;
