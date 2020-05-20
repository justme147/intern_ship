import React, { useState } from "react";
import PropTypes from "prop-types";

import notification from "../../../assets/images/adminpanel/notifications_icon.svg";

function HeaderNotification(props) {
  const [isMenu, setIsMenu] = useState(false);
  return (
    <div className="body-header__notif">
      <div
        className="body-header__notification"
        // onClick={() => setIsMenu(!isMenu)}
        onMouseEnter={() => setIsMenu(true)}
        onMouseLeave={() => setIsMenu(false)}
      >
        <img
          src={notification}
          alt=""
          className="body-header__icon body-header__icon--width"
        />
        <span className="body-header__count">{props.count}</span>
      </div>
      {isMenu && (
        <ul className="body-header__dropmenu body-header__dropmenu--notif">
          <li className="body-header__dropitem">
            Новых заказов: {props.count}
          </li>
        </ul>
      )}
    </div>
  );
}

HeaderNotification.propTypes = {
  exitClick: PropTypes.func,
  notif: PropTypes.number,
};

export default HeaderNotification;
