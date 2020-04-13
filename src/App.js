import React from "react";
import { BrowserRouter, Switch, Route, useRouteMatch } from "react-router-dom";

import Location from "./components/Location";
import Model from "./components/Model";
import Options from "./components/Options";
import Total from "./components/Total";
import MainPage from "./pages/MainPage";
import OrderLayout from "./layouts/OrderLayout";
import AdminPanel from "./pages/AdminPanel";
// import AdminAuth from "./pages/AdminAuth";
// import AdminLayout from "./layouts/AdminLayout";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
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
              image: "",
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
        },
      ],
      isActive: 1,
      isModal: false,
      orderId: `RU${Date.now()}`,
      colorsCar: [],
      // order: [
      //   {
      //     city: "",
      //     place: "",
      //     title: "Пункт выдачи",
      //   },
      //   {
      //     name: "",
      //     number: "",
      //     value: "",
      //     fuel: "",
      //     title: "Модель",
      //   },
      //   {
      //     value: "",
      //     title: "Цвет",
      //   },
      //   {
      //     value: "",
      //     title: "Длительность аренды",
      //     since: new Date().toLocaleString().slice(0, -3).replace(",", ""),
      //     by: "",
      //   },
      //   {
      //     value: "",
      //     title: "Тариф",
      //   },
      //   {
      //     value: false,
      //     title: "Полный бак",
      //   },
      //   {
      //     value: false,
      //     title: "Детское кресло",
      //   },
      //   {
      //     value: false,
      //     title: "Правый руль",
      //   },
      // ],
    };

    // this.handleMenuClick = this.handleMenuClick.bind(this);
    // this.handleButtonClick = this.handleButtonClick.bind(this);
    // this.handleOrderChange = this.handleOrderChange.bind(this);
    // this.handleDateInputChange = this.handleDateInputChange.bind(this);
    // this.handleButtonDeclineClick = this.handleButtonDeclineClick.bind(this);
    // this.handleModelClick = this.handleModelClick.bind(this);
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
    const history = this.state.history;
    const current = history[history.length - 1];
    const order = current.order;

    this.setState({
      isActive: this.state.isActive < 4 ? this.state.isActive + 1 : 4,
      isModal: this.state.isActive === 4 ? true : false,
      history: this.state.history.concat({ order }),
    });
  };

  handleOrderChange = (name, value, index) => {
    const history = this.state.history;
    const current = history[history.length - 1];
    const newOrder = current.order.slice();
    // const newOrder = this.state.order.slice();

    newOrder[index][name] = value;
    history[history.length - 1].order = newOrder;

    // console.log(history);

    this.setState({ history });
  };

  handleModelClick = (value) => {
    this.setState({ colorsCar: value });
  };

  handleDateInputChange = (e, index) => {
    this.handleOrderChange(e.target.name, e.target.value, index);

    const history = this.state.history;
    const current = history[history.length - 1];
    const order = current.order;

    // const since = this.state.order[index].since;
    // const by = this.state.order[index].by;
    const since = order[index].since;
    const by = order[index].by;

    const from = new Date(since.replace(/(\d+).(\d+).(\d+)/, `$3.$2.$1`));
    const to = new Date(by.replace(/(\d+).(\d+).(\d+)/, `$3.$2.$1`));

    const time = new Date(to - from);

    const datetime = [];

    const month = time.getMonth();
    const day = time.getDate() - 1;
    let hours = time.getHours() + time.getTimezoneOffset() / 60;
    hours = hours < 0 ? 24 + hours : hours;
    const minutes = time.getMinutes();

    if (month) {
      datetime.push(month + "м");
    }

    if (day) {
      datetime.push(day + "д");
    }

    if (hours) {
      datetime.push(hours + "ч");
    }

    if (minutes) {
      datetime.push(minutes + "мин");
    }

    this.handleOrderChange("value", datetime.join(" "), index);
  };

  render() {
    const isActive = this.state.isActive;
    const history = this.state.history;
    const current = history[history.length - 1];
    const order = current.order;

    let renderStep;

    switch (this.state.isActive) {
      case 1:
        renderStep = (
          <Location
            city={order[0].city}
            place={order[0].place}
            // city={this.state.order[0].city}
            // place={this.state.order[0].place}
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
            since={order[3].since}
            by={order[3].by}
            // since={this.state.order[3].since}
            // by={this.state.order[3].by}
            onOrderChange={this.handleOrderChange}
            onInputDateChange={this.handleDateInputChange}
            colors={this.state.colorsCar}
          />
        );
        break;
      case 4:
        renderStep = (
          <Total
            since={order[3].since}
            name={order[1].name}
            model={order[1].value}
            number={order[1].number}
            fuel={order[1].fuel}
            isFull={order[5].value}
            image={order[1].image}
            // since={this.state.order[3].since}
            // name={this.state.order[1].name}
            // model={this.state.order[1].value}
            // number={this.state.order[1].number}
            // fuel={this.state.order[1].fuel}
            // isFull={this.state.order[5].value}
          />
        );
        break;
    }

    return (
      <BrowserRouter>
        <Switch>
          <Route path="/internship/build/" exact component={MainPage} />
          <Route path="/internship/build/order">
            <OrderLayout
              isActive={isActive}
              handleMenuClick={this.handleMenuClick}
              renderStep={renderStep}
              // order={this.state.order}
              order={order}
              handleButtonClick={this.handleButtonClick}
              isModal={this.state.isModal}
              handleButtonDeclineClick={this.handleButtonDeclineClick}
              orderId={this.state.orderId}
            />
          </Route>
          <Route path="/internship/build/admin" component={AdminPanel} />
          {/* <Route path="/admin" exact component={AdminLayout} /> */}
          {/* <Route path="/admin/login" component={AdminAuth} /> */}
        </Switch>
      </BrowserRouter>
    );
  }
}
