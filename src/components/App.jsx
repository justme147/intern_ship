import React from "react";

import NavigationList from "./Navigation/NavigationList.jsx";
import Location from "./Location/Location.jsx";
import Order from "./Order/Order.jsx";
import Model from "./Model/Model.jsx";
import Options from "./Options/Options.jsx";
import Total from "./Total/Total.jsx";
import Modal from "./Modal/Modal.jsx";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: 1,
      isModal: false,
      order: [
        {
          city: document.querySelector(".body-header__text").textContent || "",
          place: "",
          title: "Пункт выдачи"
        },
        {
          name: "",
          number: "",
          value: "",
          fuel: "",
          title: "Модель"
        },
        {
          value: "",
          title: "Цвет"
        },
        {
          value: "",
          title: "Длительность аренды",
          since: new Date()
            .toLocaleString()
            .slice(0, -3)
            .replace(",", ""),
          by: ""
        },
        {
          value: "",
          title: "Тариф"
        },
        {
          value: false,
          title: "Полный бак"
        },
        {
          value: false,
          title: "Детское кресло"
        },
        {
          value: false,
          title: "Правый руль"
        }
      ],
      history: []
    };

    this.handleMenuClick = this.handleMenuClick.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleOrderChange = this.handleOrderChange.bind(this);
    this.handleDateInputChange = this.handleDateInputChange.bind(this);
    this.handleButtonDeclineClick = this.handleButtonDeclineClick.bind(this);

    // this.handleInputChange = this.handleInputChange.bind(this);
    // this.handleInputClick = this.handleInputClick.bind(this);
    // this.handleLocationInputChange = this.handleLocationInputChange.bind(this);
    // this.handleLocationInputClick = this.handleLocationInputClick.bind(this);
    // this.handleDateInputClick = this.handleDateInputClick.bind(this);
  }

  handleMenuClick = id => {
    if (id >= this.state.isActive) return;

    this.setState({
      isActive: id
    });
  };

  handleButtonDeclineClick = () => {
    this.setState({ isModal: false });
  };

  handleButtonClick = () => {
    // const history = this.state.history;
    // const current = history[history.length - 1];
    // const newOrder = this.state.order;

    this.setState({
      isActive: this.state.isActive < 4 ? this.state.isActive + 1 : 4,
      isModal: this.state.isActive === 4 ? true : false
      // history: this.state.history.concat({ order: newOrder })
    });
  };

  handleOrderChange = (name, value, index) => {
    const newOrder = this.state.order.slice();

    newOrder[index][name] = value;

    this.setState({ order: newOrder });
  };

  // handleInputChange = e => {
  //   this.setState({ [e.target.name]: e.target.value });
  // };

  // handleInputClick = e => {
  //   this.setState({ [e.target.name]: "" });
  // };

  // handleLocationInputChange = (e, index) => {
  //   // this.handleInputChange(e);
  //   this.handleOrderChange(e.target.name, e.target.value, index);
  // };

  // handleLocationInputClick = (e, index) => {
  //   // this.handleInputClick(e);
  //   this.handleOrderChange(e.target.name, "", index);
  // };

  handleDateInputChange = (e, index) => {
    // this.handleInputChange(e);
    this.handleOrderChange(e.target.name, e.target.value, index);

    const since = this.state.order[index].since;
    const by = this.state.order[index].by;

    const from = new Date(since.replace(/(\d+).(\d+).(\d+)/, `$3.$2.$1`));
    const to = new Date(by.replace(/(\d+).(\d+).(\d+)/, `$3.$2.$1`));

    const time = new Date(to - from);

    const day = time.getDate() === 0 ? 0 : time.getDate() - 1;
    const hours = time.getHours() + time.getTimezoneOffset() / 60;

    const datetime = [];

    day ? datetime.push(day + "д") : null;
    hours ? datetime.push(hours + "ч") : null;

    this.handleOrderChange("value", datetime.join(" "), index);
  };

  // handleDateInputClick = (e, index) => {
  //   // this.handleInputClick(e);
  //   this.handleOrderChange(e.target.name, "", index);
  //   this.handleOrderChange("value", "", index);
  // };

  render() {
    const isActive = this.state.isActive;

    let renderStep;

    switch (this.state.isActive) {
      case 1:
        renderStep = (
          <Location
            city={this.state.order[0].city}
            place={this.state.order[0].place}
            onInputChange={this.handleOrderChange}
            // onInputChange={this.handleLocationInputChange}
            // onInputClick={this.handleLocationInputClick}
          />
        );
        break;
      case 2:
        renderStep = <Model onMenuItemClick={this.handleOrderChange} />;
        break;
      case 3:
        renderStep = (
          <Options
            since={this.state.order[3].since}
            by={this.state.order[3].by}
            onOrderChange={this.handleOrderChange}
            onInputDateChange={this.handleDateInputChange}
            // onInputDateClick={this.handleDateInputClick}
          />
        );
        break;
      case 4:
        renderStep = (
          <Total
            since={this.state.order[3].since}
            name={this.state.order[1].name}
            model={this.state.order[1].value}
            number={this.state.order[1].number}
            fuel={this.state.order[1].fuel}
            isFull={this.state.order[5].value}
          />
        );
        break;
    }

    return (
      <div className="body-main__inner">
        <NavigationList active={isActive} menuClick={this.handleMenuClick} />

        <div className="body-main__content">
          {renderStep}

          <Order
            order={this.state.order}
            onButtonClick={this.handleButtonClick}
            step={this.state.isActive}
          />
        </div>

        {this.state.isModal ? (
          <Modal onButtonDeclineClick={this.handleButtonDeclineClick} />
        ) : (
          ""
        )}
      </div>
    );
  }
}
