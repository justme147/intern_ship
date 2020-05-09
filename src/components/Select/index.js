import React, { useState } from "react";
import PropTypes from "prop-types";

import SelectItem from "./SelectItem";

function Select(props) {
  const [value, setValue] = useState("");

  return (
    <div className="body-main__select-wrapper">
      <div className="body-main__arrows"></div>
      <select
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="body-main__select"
      >
        {props.list.map((item) => {
          return <SelectItem item={item} key={item.id} />;
        })}
      </select>
    </div>
  );
}

Select.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
};

export default Select;
