import React, { useState } from "react";
import PropTypes from "prop-types";

import SelectItem from "./SelectItem";

function Select(props) {
  const [value, setValue] = useState(1);

  return (
    <div className="body-main__select-wrapper">
      <div className="body-main__arrows"></div>
      <select
        value={props.value}
        onChange={props.handleChangeValue}
        className="body-main__select"
      >
        {props.list.map((item) => {
          return (
            <SelectItem item={item} key={item.id} disable={item.disable} />
          );
        })}
      </select>
    </div>
  );
}

Select.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
  value: PropTypes.string,
  handleChangeValue: PropTypes.func,
};

export default Select;
