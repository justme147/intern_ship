import React, { useState } from "react";
import InputMask from "react-input-mask";

export default function OptionsDate(props) {
  const [since, setSince] = useState(new Date().toLocaleString("ru"));
  const [by, setBy] = useState("");

  function handleFormChange(e) {
    e.target.name === "since"
      ? setSince(e.target.value)
      : setBy(e.target.value);
    props.inputDateChange(since, by);
  }

  return (
    <form className="form-section__container form-section__container--margin">
      <div className="form-section__group">
        <label className="form-section__label">С</label>
        <InputMask
          className="form-section__input"
          type="text"
          value={since}
          onChange={handleFormChange}
          name="since"
          placeholder="Введите дату и время"
          mask="99.99.9999 99:99"
          maskChar="-"
        />
        {since && (
          <img
            src="./images/orderpage/form_icon_delete.svg"
            className="form-section__delete"
            onClick={() => setSince("")}
            name="city"
          />
        )}
      </div>

      <div className="form-section__group">
        <label className="form-section__label">По</label>
        <InputMask
          className="form-section__input"
          type="text"
          value={by}
          onChange={handleFormChange}
          name="by"
          placeholder="Введите дату и время"
          mask="99.99.9999 99:99"
          maskChar="-"
        />
        {by && (
          <img
            src="./images/orderpage/form_icon_delete.svg"
            className="form-section__delete"
            onClick={() => setBy("")}
            name="place"
          />
        )}
      </div>
    </form>
  );
}
