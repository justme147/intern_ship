import React from "react";

export default class LocationForm extends React.Component {
  constructor(props) {
    super(props);

    this.inputChange = this.inputChange.bind(this);
    this.inputClick = this.inputClick.bind(this);
  }

  inputChange(e) {
    this.props.onInputChange(e);
  }

  inputClick(e) {
    this.props.onInputClick(e);
  }

  render() {
    return (
      <form className="form-section__container">
        <div className="form-section__group">
          <label className="form-section__label">Город</label>
          <input
            className="form-section__input"
            type="text"
            value={this.props.city}
            onChange={this.inputChange}
            name="city"
          />
          {this.props.city && (
            <img
              src="./images/orderpage/form_icon_delete.svg"
              className="form-section__delete"
              onClick={this.inputClick}
              name="city"
            />
          )}
        </div>

        <div className="form-section__group">
          <label className="form-section__label">Пункт выдачи</label>
          <input
            className="form-section__input"
            type="text"
            value={this.props.place}
            onChange={this.inputChange}
            name="place"
            placeholder="Начните вводить пункт выдачи"
          />
          {this.props.place && (
            <img
              src="./images/orderpage/form_icon_delete.svg"
              className="form-section__delete"
              onClick={this.inputClick}
              name="place"
            />
          )}
        </div>
      </form>
    );
  }
}
