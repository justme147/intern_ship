import React from "react";

import NavigationList from "./Navigation/NavigationList.jsx";
import Location from "./Location/Location.jsx";
import Order from "./Order/Order.jsx";
import Model from "./Model/Model.jsx";
import Options from "./Options/Options.jsx";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: 1,
      city: document.querySelector(".body-header__text").textContent || "",
      place: "",
      since: new Date().toLocaleString(),
      by: "",
      order: [
        {
          city: document.querySelector(".body-header__text").textContent || "",
          place: null,
          title: "Пункт выдачи"
        },
        {
          value: null,
          title: "Модель"
        },
        {
          value: null,
          title: "Цвет"
        },
        {
          value: null,
          title: "Длительность аренды"
        },
        {
          value: null,
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
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputClick = this.handleInputClick.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleOrderChange = this.handleOrderChange.bind(this);
    this.handleLocationInputChange = this.handleLocationInputChange.bind(this);
    this.handleLocationInputClick = this.handleLocationInputClick.bind(this);
    this.handleDateInputChange = this.handleDateInputChange.bind(this);
    this.handleDateInputClick = this.handleDateInputClick.bind(this);
  }

  handleMenuClick = id => {
    if (id >= this.state.isActive) return;

    this.setState({
      isActive: id
    });
  };

  handleButtonClick = () => {
    // const history = this.state.history;
    // const current = history[history.length - 1];
    // const newOrder = this.state.order;

    this.setState({
      isActive: this.state.isActive < 4 ? this.state.isActive + 1 : 4
      // history: this.state.history.concat({ order: newOrder })
    });
  };

  handleOrderChange = (name, value, index) => {
    const newOrder = this.state.order.slice();

    newOrder[index][name] = value;

    this.setState({ order: newOrder });
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleInputClick = e => {
    this.setState({ [e.target.name]: "" });
  };

  handleLocationInputChange = (e, index) => {
    this.handleInputChange(e);
    this.handleOrderChange(e.target.name, e.target.value, index);
  };

  handleLocationInputClick = (e, index) => {
    this.handleInputClick(e);
    this.handleOrderChange(e.target.name, "", index);
  };

  handleDateInputChange = (e, index) => {
    this.handleInputChange(e);

    const since = this.state.since;
    const by = this.state.by;
    // console.log("since", since);
    // console.log("by", by);

    const from = new Date(since.replace(/(\d+).(\d+).(\d+)/, `$3.$2.$1`));
    const to = new Date(by.replace(/(\d+).(\d+).(\d+)/, `$3.$2.$1`));
    // console.log("from", from);
    // console.log("to", to);
    const time = new Date(to - from);
    // console.log("time", time);
    const day = time.getDate() === 0 ? 0 : time.getDate() - 1;
    const hours = time.getHours() + time.getTimezoneOffset() / 60;
    // console.log("day", day);
    // console.log("hours", hours);
    const datetime = [];

    day ? datetime.push(day + "д") : null;
    hours ? datetime.push(hours + "ч") : null;
    // console.log("datetime", datetime);

    this.handleOrderChange("value", datetime.join(" "), index);
  };

  handleDateInputClick = (e, index) => {
    this.handleInputClick(e);
    this.handleOrderChange("value", "", index);
  };

  render() {
    const isActive = this.state.isActive;
    // const history = this.state.history;
    // const current = history[isActive - 1];

    let renderStep;

    switch (this.state.isActive) {
      case 1:
        renderStep = (
          <Location
            city={this.state.city}
            place={this.state.place}
            onInputChange={this.handleLocationInputChange}
            onInputClick={this.handleInputClick}
          />
        );
        break;
      case 2:
        renderStep = <Model onMenuItemClick={this.handleOrderChange} />;
        break;
      case 3:
        renderStep = (
          <Options
            since={this.state.since}
            by={this.state.by}
            onOrderChange={this.handleOrderChange}
            onInputDateChange={this.handleDateInputChange}
            onInputDateClick={this.handleDateInputClick}
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
          />
        </div>
      </div>
    );
  }
}
