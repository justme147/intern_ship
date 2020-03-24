import React, { useState } from "react";
import InputMask from "react-input-mask";

export default function OptionsDate(props) {
  return (
    <form className="form-section__container form-section__container--margin">
      <div className="form-section__group">
        <label className="form-section__label">С</label>
        <InputMask
          className="form-section__input"
          type="text"
          value={props.since}
          onChange={e => props.inputDateChange(e, 3)}
          name="since"
          placeholder="Введите дату и время"
          mask="99.99.9999 99:99"
          maskChar="-"
        />
        {props.since && (
          <img
            src="./images/orderpage/form_icon_delete.svg"
            className="form-section__delete"
            onClick={e => props.inputDateClick(e, 3)}
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
          onChange={e => props.inputDateChange(e, 3)}
          name="by"
          placeholder="Введите дату и время"
          mask="99.99.9999 99:99"
          maskChar="-"
        />
        {props.by && (
          <img
            src="./images/orderpage/form_icon_delete.svg"
            className="form-section__delete"
            onClick={e => props.inputDateClick(e, 3)}
            name="by"
          />
        )}
      </div>
    </form>
  );
}
