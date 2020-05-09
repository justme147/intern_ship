import React from "react";
import PropTypes from "prop-types";

import OptionColor from "./OptionsColor";
import OptionDate from "./OptionsDate";
import OptionTariff from "./OptionsTariff";
import OptionServices from "./OptionsServices";

function Options(props) {
  return (
    <div className="body-main-options__inner">
      <div className="body-main-options">
        <h4 className="body-main-options__subtitle">Цвет</h4>
        <OptionColor
          menuColorChange={props.onOrderChange}
          colors={props.colors}
        />

        <h4 className="body-main-options__subtitle">Дата аренды</h4>
        <OptionDate
          inputDateChange={props.onInputDateChange}
          inputDateClick={props.onOrderChange}
          since={props.since}
          by={props.by}
        />

        <h4 className="body-main-options__subtitle">Тариф</h4>
        <OptionTariff menuTariffChange={props.onOrderChange} />

        <h4 className="body-main-options__subtitle">Доп услуги</h4>
        <OptionServices menuServicesChange={props.onOrderChange} />
      </div>
    </div>
  );
}

Options.propTypes = {
  since: PropTypes.string,
  by: PropTypes.string,
  onOrderChange: PropTypes.func,
  onInputDateChange: PropTypes.func,
  colors: PropTypes.array,
};

export default Options;
