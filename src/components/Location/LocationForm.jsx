import React from "react";

export default function LocationForm(props) {
  function inputChange(e) {
    props.onInputChange(e.target.name, e.target.value, 0);
  }

  function inputClick(e) {
    props.onInputChange(e.target.name, "", 0);
  }

  return (
    <form className="form-section__container">
      <div className="form-section__group">
        <label className="form-section__label">Город</label>
        <input
          className="form-section__input"
          type="text"
          value={props.city}
          onChange={inputChange}
          name="city"
        />
        {props.city && (
          <img
            src="./images/orderpage/form_icon_delete.svg"
            className="form-section__delete"
            onClick={inputClick}
            name="city"
          />
        )}
      </div>

      <div className="form-section__group">
        <label className="form-section__label">Пункт выдачи</label>
        <input
          className="form-section__input"
          type="text"
          value={props.place}
          onChange={inputChange}
          name="place"
          placeholder="Начните вводить пункт выдачи"
        />
        {props.place && (
          <img
            src="./images/orderpage/form_icon_delete.svg"
            className="form-section__delete"
            onClick={inputClick}
            name="place"
          />
        )}
      </div>
    </form>
  );
}
