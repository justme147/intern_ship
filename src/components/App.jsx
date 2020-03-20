import React from "react";

import NavigationList from "./Navigation/NavigationList.jsx";
import Location from "./Location/Location.jsx";
import Order from "./Order/Order.jsx";
import Model from "./Model/Model.jsx";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: 2,
      city: document.querySelector(".body-header__text").textContent || "",
      place: "",
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
    };

    this.handleMenuClick = this.handleMenuClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputClick = this.handleInputClick.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
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
    this.setState(prev => ({
      ...prev,
      ...{
        [e.target.name]: ""
      }
    }));
  };

  handleButtonClick = () => {
    this.setState({ isActive: 2 });
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
        renderStep = <Model />;
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
