import React from "react";
import PropTypes from "prop-types";

import closeIcon from "../assets/images/adminpanel/close_icon.svg";
import checkIcon from "../assets/images/adminpanel/check_icon.svg";

function AdminBodyLayout(props) {
  const alertClasses = ["body-main__alert"];

  if (!props.isCorrect) {
    alertClasses.push("body-main__alert--red");
  }

  return (
    <main className="body-main">
      <div className="body-main__container">
        {props.isShow && (
          <div className={alertClasses.join(" ")}>
            <div>
              {props.isCorrect && (
                <img
                  src={checkIcon}
                  alt="check_icon"
                  className="body-main__check"
                />
              )}
              {props.alert}
            </div>
            <img
              src={closeIcon}
              alt="close_icon"
              className="body-main__close"
              onClick={props.closeHandler}
            />
          </div>
        )}

        <h1 className="body-main__title">{props.title}</h1>
        {props.children}
      </div>
    </main>
  );
}

AdminBodyLayout.propTypes = {
  title: PropTypes.string,
  isCorrect: PropTypes.bool,
  children: PropTypes.array,
  alert: PropTypes.string,
  isShow: PropTypes.bool,
  closeHandler: PropTypes.func,
};

export default AdminBodyLayout;
