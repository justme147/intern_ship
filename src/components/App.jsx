import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Location from "./Location/Location.jsx";
import Model from "./Model/Model.jsx";
import Options from "./Options/Options.jsx";
import Total from "./Total/Total.jsx";
import MainPage from "./Pages/MainPage.jsx";
import OrderLayout from "./layouts/OrderLayout.jsx";
import AdminPanel from "./Pages/AdminPanel.jsx";
import AdminAuth from "./Pages/AdminAuth.jsx";
import AdminLayout from "./layouts/AdminLayout.jsx";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [],
      isActive: 1,
      isModal: false,
      orderId: `RU${Date.now()}`,
      colorsCar: [],
      order: [
        {
          city: "",
          place: "",
          title: "Пункт выдачи",
        },
        {
          name: "",
          number: "",
          value: "",
          fuel: "",
          title: "Модель",
        },
        {
          value: "",
          title: "Цвет",
        },
        {
          value: "",
          title: "Длительность аренды",
          since: new Date().toLocaleString().slice(0, -3).replace(",", ""),
          by: "",
        },
        {
          value: "",
          title: "Тариф",
        },
        {
          value: false,
          title: "Полный бак",
        },
        {
          value: false,
          title: "Детское кресло",
        },
        {
          value: false,
          title: "Правый руль",
        },
      ],
    };

    this.handleMenuClick = this.handleMenuClick.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleOrderChange = this.handleOrderChange.bind(this);
    this.handleDateInputChange = this.handleDateInputChange.bind(this);
    this.handleButtonDeclineClick = this.handleButtonDeclineClick.bind(this);
    this.handleModelClick = this.handleModelClick.bind(this);
  }

  handleMenuClick = (id) => {
    if (id >= this.state.isActive) return;

    this.setState({
      isActive: id,
    });
  };

  handleButtonDeclineClick = () => {
    this.setState({ isModal: false });
  };

  handleButtonClick = () => {
    // const order = this.state.order;

    this.setState({
      isActive: this.state.isActive < 4 ? this.state.isActive + 1 : 4,
      isModal: this.state.isActive === 4 ? true : false,
      // history: this.state.history.concat({ order }),
    });
  };

  handleOrderChange = (name, value, index) => {
    const newOrder = this.state.order.slice();

    newOrder[index][name] = value;

    this.setState({ order: newOrder });
  };

  handleModelClick = (value) => {
    this.setState({ colorsCar: value });
  };

  handleDateInputChange = (e, index) => {
    this.handleOrderChange(e.target.name, e.target.value, index);

    const since = this.state.order[index].since;
    const by = this.state.order[index].by;

    const from = new Date(since.replace(/(\d+).(\d+).(\d+)/, `$3.$2.$1`));
    const to = new Date(by.replace(/(\d+).(\d+).(\d+)/, `$3.$2.$1`));

    const time = new Date(to - from);

    const month = time.getMonth();
    const day = time.getDate() - 1;
    let hours = time.getHours() + time.getTimezoneOffset() / 60;
    hours = hours < 0 ? 24 + hours : hours;
    const minutes = time.getMinutes();

    const datetime = [];

    month ? datetime.push(month + "м") : null;
    day ? datetime.push(day + "д") : null;
    hours ? datetime.push(hours + "ч") : null;
    minutes ? datetime.push(minutes + "мин") : null;

    this.handleOrderChange("value", datetime.join(" "), index);
  };

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
          />
        );
        break;
      case 2:
        renderStep = (
          <Model
            onMenuItemClick={this.handleOrderChange}
            onModelClick={this.handleModelClick}
          />
        );
        break;
      case 3:
        renderStep = (
          <Options
            since={this.state.order[3].since}
            by={this.state.order[3].by}
            onOrderChange={this.handleOrderChange}
            onInputDateChange={this.handleDateInputChange}
            colors={this.state.colorsCar}
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
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/order">
            <OrderLayout
              isActive={isActive}
              handleMenuClick={this.handleMenuClick}
              renderStep={renderStep}
              order={this.state.order}
              handleButtonClick={this.handleButtonClick}
              isModal={this.state.isModal}
              handleButtonDeclineClick={this.handleButtonDeclineClick}
              orderId={this.state.orderId}
            />
          </Route>
          <Route path="/admin" exact component={AdminLayout} />
          <Route path="/admin/login" component={AdminAuth} />
        </Switch>
      </BrowserRouter>
    );
  }
}
