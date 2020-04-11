import React from "react";
import InputMask from "react-input-mask";

import deleteIcon from "../../assets/images/orderpage/form_icon_delete.svg";

export default function OptionsDate(props) {
  function inputClick(e, index) {
    props.inputDateClick(e.target.name, "", index);
    props.inputDateClick("value", "", index);
  }
  return (
    <form className="form-section__container form-section__container--margin">
      <div className="form-section__group">
        <label className="form-section__label">С</label>
        <InputMask
          className="form-section__input"
          type="text"
          value={props.since}
          onChange={(e) => props.inputDateChange(e, 3)}
          name="since"
          placeholder="Введите дату и время"
          mask="99.99.9999 99:99"
          maskChar="-"
        />
        {props.since && (
          <img
            src={deleteIcon}
            className="form-section__delete"
            onClick={(e) => inputClick(e, 3)}
            name="since"
          />
        )}
      </div>

      <div className="form-section__group">
        <label className="form-section__label">По</label>
        <InputMask
          className="form-section__input"
          type="text"
          value={props.by}
          onChange={(e) => props.inputDateChange(e, 3)}
          name="by"
          placeholder="Введите дату и время"
          mask="99.99.9999 99:99"
          maskChar="-"
        />
        {props.by && (
          <img
            src={deleteIcon}
            className="form-section__delete"
            onClick={(e) => inputClick(e, 3)}
            name="by"
          />
        )}
      </div>
    </form>
  );
}
