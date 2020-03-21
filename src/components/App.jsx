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
      // ПОМЕНЯТЬ ОРДЕР И ВСЕ ЧТО ОТ НЕГО ИДЕТ
      order: [
        {
          city:
            document.querySelector(".body-header__text").textContent || null,
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
      ]
      // ПОМЕНЯТЬ ОРДЕР И ВСЕ ЧТО ОТ НЕГО ИДЕТ
    };

    this.handleMenuClick = this.handleMenuClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputClick = this.handleInputClick.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleModelItemClick = this.handleModelItemClick.bind(this);
    this.handleMenuColorChange = this.handleMenuColorChange.bind(this);
    this.handleInputDateChange = this.handleInputDateChange.bind(this);
    this.handleMenuTariffChange = this.handleMenuTariffChange.bind(this);
    this.handleMenuServicesChange = this.handleMenuServicesChange.bind(this);
  }

  handleMenuClick = id => {
    if (id >= this.state.isActive) return;

    this.setState({
      isActive: id
    });
  };

  handleInputChange = e => {
    e.persist();

    const newOrder = this.state.order.map((item, i) => {
      if (i === 0) {
        return { ...item, [e.target.name]: e.target.value };
      } else {
        return { ...item };
      }
    });

    this.setState(prev => ({
      ...prev,
      ...{
        [e.target.name]: e.target.value
      },
      order: newOrder
    }));
  };

  handleInputClick = e => {
    e.persist();

    const newOrder = this.state.order.map((item, i) => {
      if (i === 0) {
        return { ...item, [e.target.name]: "" };
      } else {
        return { ...item };
      }
    });

    this.setState(prev => ({
      ...prev,
      ...{
        [e.target.name]: ""
      },
      order: newOrder
    }));
  };

  handleButtonClick = () => {
    this.setState({
      isActive: this.state.isActive < 4 ? this.state.isActive + 1 : 4
    });
  };

  handleModelItemClick = model => {
    const newOrder = this.state.order.map((item, i) => {
      if (i === 1) {
        return { ...item, value: model };
      } else {
        return { ...item };
      }
    });

    this.setState({ order: newOrder });
  };

  handleMenuColorChange = color => {
    const newOrder = this.state.order.map((item, i) => {
      if (i === 2) {
        return { ...item, value: color };
      } else {
        return { ...item };
      }
    });

    this.setState({ order: newOrder });
  };

  handleInputDateChange = (since, by) => {
    const from = new Date(since.replace(/(\d+).(\d+).(\d+)/, `$3.$2.$1`));
    const to = new Date(by.replace(/(\d+).(\d+).(\d+)/, `$3.$2.$1`));

    const time = new Date(to - from);

    const day = time.getDate() === 1 ? 1 : time.getDate() - 1;
    const hours = time.getHours() + time.getTimezoneOffset() / 60;

    const datetime = [];

    day ? datetime.push(day + "д") : null;
    hours ? datetime.push(hours + "ч") : null;

    const newOrder = this.state.order.map((item, i) => {
      if (i === 3) {
        return { ...item, value: datetime.join(" ") };
      } else {
        return { ...item };
      }
    });

    this.setState({ order: newOrder });
  };

  handleMenuTariffChange = tariff => {
    const newOrder = this.state.order.map((item, i) => {
      if (i === 4) {
        return { ...item, value: tariff };
      } else {
        return { ...item };
      }
    });

    this.setState({ order: newOrder });
  };

  handleMenuServicesChange = (name, value) => {
    const newOrder = this.state.order.map((item, i) => {
      if (
        (i === 5 && name === "fuel") ||
        (i === 6 && name === "chair") ||
        (i === 7 && name === "wheel")
      ) {
        return { ...item, value };
      } else {
        return { ...item };
      }
    });

    this.setState({ order: newOrder });
  };

  render() {
    const city = this.state.city;
    const place = this.state.place;
    const isActive = this.state.isActive;

    let renderStep;

    switch (this.state.isActive) {
      case 1:
        renderStep = (
          <Location
            city={city}
            place={place}
            onInputChange={this.handleInputChange}
            onInputClick={this.handleInputClick}
          />
        );
        break;
      case 2:
        renderStep = <Model onMenuItemClick={this.handleModelItemClick} />;
        break;
      case 3:
        renderStep = (
          <Options
            onMenuColorChange={this.handleMenuColorChange}
            onInputDateChange={this.handleInputDateChange}
            onMenuTarifChange={this.handleMenuTariffChange}
            onMenuServicesChange={this.handleMenuServicesChange}
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
