import React, { useState } from "react";
import PropTypes from "prop-types";

import AdminCheckbox from "../../components/AdminCheckbox";

function OrderListItem(props) {
  const [options, setOptions] = useState([
    { id: 1, text: "Полный бак", checked: props.order.isFullTank },
    { id: 2, text: "Детское кресло", checked: props.order.isNeedChildChair },
    { id: 3, text: "Правый руль", checked: props.order.isRightWheel },
  ]);

  const itemClasses = ["body-main__item"];

  if (props.order.orderStatusId.name === "new") {
    itemClasses.push("body-main__item--blue");
  } else if (props.order.orderStatusId.name === "cancelled") {
    itemClasses.push("body-main__item--red");
  } else if (props.order.orderStatusId.name === "confirmed") {
    itemClasses.push("body-main__item--green");
  }
  return (
    <div className={itemClasses.join(" ")}>
      <div className="body-main__car">
        <img
          src={`http://api-factory.simbirsoft1.com${props.order.carId.thumbnail.path}`}
          alt=""
          className="body-main__image body-main__image--width"
        />
        <div className="body-main__descr">
          <p className="body-main__text body-main__text--light">
            <font>{props.order.carId.name.split(", ")[1]}</font> в
            <font>{" " + props.order.cityId.name}</font>,{" "}
            {props.order.pointId.address}
          </p>
          <p className="body-main__text body-main__text--light">
            {new Date(props.order.dateFrom)
              .toLocaleString()
              .replace(",", "")
              .slice(0, -3) +
              " - " +
              new Date(props.order.dateTo)
                .toLocaleString()
                .replace(",", "")
                .slice(0, -3)}
          </p>
          <p className="body-main__text body-main__text--light">
            Цвет: <font>{props.order.color}</font>
          </p>
        </div>
      </div>
      <div className="body-main__checkbox-group">
        {options.map((item) => {
          return (
            <AdminCheckbox
              text={item.text}
              key={item.id}
              border
              checked={item.checked}
              readOnly
            />
          );
        })}
      </div>
      <div className="body-main__price">{props.order.price} ₽</div>
      <div className="body-main__btn-group">
        <button
          className="body-main__action body-main__action--accept"
          onClick={props.changeAlert}
        >
          <img src={props.approveIcon} alt="accept_icon" />
          Готово
        </button>
        <button
          className="body-main__action body-main__action--decline"
          onClick={props.changeAlert}
        >
          <img src={props.rejectIcon} alt="decline_icon" />
          Отмена
        </button>
        <button className="body-main__action body-main__action--change">
          <img src={props.editIcon} alt="edit_icon" />
          Изменить
        </button>
      </div>
    </div>
  );
}

OrderListItem.propTypes = {
  order: PropTypes.object,
  approveIcon: PropTypes.string,
  rejectIcon: PropTypes.string,
  editIcon: PropTypes.string,
  changeAlert: PropTypes.func,
};

export default OrderListItem;
