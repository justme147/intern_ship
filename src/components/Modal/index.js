import React from "react";
import PropTypes from "prop-types";
import { Link, useHistory } from "react-router-dom";

import {
  fetchData,
  fetchDataById,
  postData,
} from "../../assets/scripts/fetchdata";

function Modal(props) {
  const history = useHistory();

  async function onButtonAcceptClick() {
    const statusId = await fetchData(
      "orderStatus",
      JSON.parse(localStorage.getItem("api_token")),
      "?name=new"
    );

    const cityId = await fetchDataById(
      "city",
      JSON.parse(localStorage.getItem("api_token")),
      props.order[0].cityId
    );

    const newCityId = {
      id: cityId.id,
      name: cityId.name,
    };

    const placeId = await fetchDataById(
      "point",
      JSON.parse(localStorage.getItem("api_token")),
      props.order[0].placeId
    );

    const newPlaceId = {
      id: placeId.id,
      name: placeId.name,
      address: placeId.address,
    };

    const carId = await fetchDataById(
      "car",
      JSON.parse(localStorage.getItem("api_token")),
      props.order[1].carId
    );

    const newCarId = {
      categoryId: carId.categoryId,
      description: carId.description,
      id: carId.id,
      name: carId.name,
      priceMax: carId.priceMax,
      priceMin: carId.priceMin,
      thumbnail: carId.thumbnail,
    };

    const dateFrom = Date.parse(
      props.order[3].since.replace(/(\d+).(\d+).(\d+)/, `$3.$2.$1`)
    );

    const dateTo = Date.parse(
      props.order[3].by.replace(/(\d+).(\d+).(\d+)/, `$3.$2.$1`)
    );

    const rateId = await fetchDataById(
      "rate",
      JSON.parse(localStorage.getItem("api_token")),
      props.order[4].rateId
    );

    const newRateId = {
      id: rateId.id,
      price: rateId.price,
      rateTypeId: rateId.rateTypeId,
    };

    const orderData = {
      orderStatusId: statusId.data[0],
      cityId: newCityId,
      pointId: newPlaceId,
      carId: newCarId,
      color: props.order[2].value,
      dateFrom,
      dateTo,
      rateId: newRateId,
      price: props.price,
      isFullTank: props.order[5].value,
      isNeedChildChair: props.order[6].value,
      isRightWheel: props.order[7].value,
    };

    console.log(orderData);

    const postOrder = await postData(
      "order",
      JSON.parse(localStorage.getItem("api_token")),
      orderData
    );

    history.push(`/order/${postOrder.id}`);
    props.onButtonDeclineClick();
  }

  return (
    <div className="modal">
      <div className="modal__inner">
        <div className="modal__content">
          <h2 className="modal__title">Подтвердить заказ</h2>
          <button
            className="button button__accept"
            onClick={() => onButtonAcceptClick()}
          >
            Подтвердить
          </button>
          <button
            className="button button__decline"
            onClick={() => props.onButtonDeclineClick("reject")}
          >
            Вернуться
          </button>
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  onButtonClick: PropTypes.func,
  onButtonDeclineClick: PropTypes.func,
  order: PropTypes.arrayOf(PropTypes.object),
  price: PropTypes.number,
};

export default Modal;
