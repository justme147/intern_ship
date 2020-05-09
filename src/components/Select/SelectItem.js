import React, { useState } from "react";
import PropTypes from "prop-types";

function SelectItem({ item }) {
  return (
    <option value={item.value ? item.value : item.id}>{item.title}</option>
  );
}

SelectItem.propTypes = {
  item: PropTypes.object,
};

export default SelectItem;
