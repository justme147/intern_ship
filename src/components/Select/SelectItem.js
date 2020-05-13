import React, { useState } from "react";
import PropTypes from "prop-types";

function SelectItem({ item }) {
  return (
    <option value={item.id} disabled={item.disable}>
      {item.title}
    </option>
  );
}

SelectItem.propTypes = {
  item: PropTypes.object,
  disable: PropTypes.bool,
};

export default SelectItem;
