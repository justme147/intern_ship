import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import marker from "../../assets/images/startscreen/icon_map_marker.svg";

function Header(props) {
  const classes = ["body-header__inner"];

  if (props.padding) {
    classes.push("body-header__inner--padding");
  }
  return (
    <div className={classes.join(" ")}>
      <Link to="/" className="body-header__logo">
        Need for drive
      </Link>
      <div className="body-header__location">
        <div className="body-header__loc" onClick={props.onButtonDeclineClick}>
          <img src={marker} alt="map_marker" className="body-header__icon" />
          <p className="body-header__text">{props.city}</p>
        </div>

        {props.modalShow && (
          <div className="body-header__modal">
            <h3 className="body-header__city">Ваш город - {props.city}?</h3>
            <div className="body-header__btn-group">
              <button
                className="button body-header__accept"
                onClick={props.onButtonAcceptClick}
              >
                Да
              </button>
              <button
                className="button body-header__decline"
                onClick={props.onButtonDeclineClick}
              >
                Выбрать другой город
              </button>
            </div>
            <p className="body-header__depend">
              От выбранного города зависит ???
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

Header.propTypes = {
  city: PropTypes.string,
  padding: PropTypes.bool,
  modalShow: PropTypes.bool,
  onButtonAcceptClick: PropTypes.func,
  onButtonDeclineClick: PropTypes.func,
};

export default Header;
