import React from "react";
import PropTypes from "prop-types";

import OrderListItem from "./OrderListItem";
import approveIcon from "../../assets/images/adminpanel/approve_icon.svg";
import rejectIcon from "../../assets/images/adminpanel/reject_icon.svg";
import editIcon from "../../assets/images/adminpanel/edit_icon.svg";

function OrderList(props) {
  console.log(props.orders);
  return (
    <div className="body-main__list">
      {props.orders.map((item) => {
        return (
          <OrderListItem
            order={item}
            key={item.id}
            approveIcon={approveIcon}
            rejectIcon={rejectIcon}
            editIcon={editIcon}
            changeAlert={props.changeAlert}
          />
        );
      })}
    </div>
  );
}

OrderList.propTypes = {
  orders: PropTypes.arrayOf(PropTypes.object),
  changeAlert: PropTypes.func,
};

export default OrderList;
