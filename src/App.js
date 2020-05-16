import React from "react";
import { BrowserRouter, Switch, Route, HashRouter } from "react-router-dom";

import Location from "./components/Location";
import Model from "./components/Model";
import Options from "./components/Options";
import Total from "./components/Total";
import MainPage from "./pages/MainPage";
import OrderLayout from "./layouts/OrderLayout";
import AdminPanel from "./pages/AdminPanel";
// import AdminAuth from "./pages/AdminAuth";
// import AdminLayout from "./layouts/AdminLayout";

import { fetchData, authLogin, deleteData } from "./assets/scripts/fetchdata";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: 1,
      isModal: false,
      colorsCar: [],
      cityHeader: localStorage.getItem("city"),
      cities: [],
      order: [
        {
          cityId: "",
          city: localStorage.getItem("city"),
          placeId: "",
          place: "",
          title: "Пункт выдачи",
        },
        {
          carId: "",
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
          rateId: "",
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
  }

  success = async (pos) => {
    try {
      const { longitude, latitude } = pos.coords;
      const token = process.env.REACT_APP_MAPBOX_TOKEN;
      const response = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?access_token=${token}&types=place&language=ru`
      );
      const json = await response.json();
      const { features } = json;

      // console.log(features[0]);

      const position = {
        latitude: features[0].center[1],
        longitude: features[0].center[0],
      };

      localStorage.setItem("city", features[0].text_ru);

      localStorage.setItem("position", JSON.stringify(position));

      this.setState((prev) => ({
        ...prev,
        cityHeader: localStorage.getItem("city"),
        order: [
          {
            ...prev.order[0],
            city: localStorage.getItem("city"),
          },
          ...prev.order.slice(1),
        ],
      }));
    } catch (e) {
      console.log(e);
    }
  };

  componentDidMount = async () => {
    if (!localStorage.getItem("city")) {
      navigator.geolocation.getCurrentPosition(this.success);
      localStorage.setItem("isShowed", false);
    }

    const bearer = await authLogin();

    localStorage.setItem("api_token", JSON.stringify(bearer));

    const city = await fetchData(
      "city",
      JSON.parse(localStorage.getItem("api_token"))
    );
    const placies = await fetchData(
      "point",
      JSON.parse(localStorage.getItem("api_token"))
    );

    const newCity = city.map((item) => {
      const filterPlacies = placies.filter(
        (place) => place.cityId.id === item.id
      );

      const placiesCoords = [];

      filterPlacies.map(async (place) => {
        const address = `${place.cityId.name}, ${place.address}`;
        const coords = await fetch(
          `http://search.maps.sputnik.ru/search?q=${address}`
        );

        const json = await coords.json();
        const data = {
          id: place.id,
          address: place.address,
          name: place.name,
          coordinate: [
            json.result[0].position.lat,
            json.result[0].position.lon,
          ],
        };

        placiesCoords.push(data);
      });

      return { ...item, placies: placiesCoords };
    });

    const cityId = city.filter(
      (item) => item.name === localStorage.getItem("city")
    );

    this.setState((prev) => ({
      ...prev,
      cities: newCity,
      order: [
        {
          ...prev.order[0],
          cityId: cityId[0].id,
        },
        ...prev.order.slice(1),
      ],
    }));
    // this.setState({ cities: newCity });
  };

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
    // const history = this.state.history;
    // const current = history[history.length - 1];
    // const order = current.order;
    let active;

    if (this.state.isActive < 5) {
      active = this.state.isActive + 1;
    } else if (this.state.isActive === 5) {
      active = 4;
    } else {
      active = 5;
    }

    this.setState({
      isActive: active,
      isModal: this.state.isActive === 4 ? true : false,
      // history: this.state.history.concat({ order }),
    });
  };

  handleOrderChange = (name, value, index) => {
    // const history = this.state.history;
    // const current = history[history.length - 1];
    // const newOrder = current.order.slice();
    const newOrder = this.state.order.slice();

    newOrder[index][name] = value;
    // history[history.length - 1].order = newOrder;

    this.setState({ order: newOrder });
  };

  handleModelClick = (value) => {
    this.setState({ colorsCar: value });
  };

  handleDateInputChange = (e, index) => {
    this.handleOrderChange(e.target.name, e.target.value, index);

    // const history = this.state.history;
    // const current = history[history.length - 1];
    // const order = current.order;

    const since = this.state.order[index].since;
    const by = this.state.order[index].by;
    // const since = order[index].since;
    // const by = order[index].by;

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
    // const history = this.state.history;
    // const current = history[history.length - 1];
    // const order = current.order;

    let renderStep;

    switch (this.state.isActive) {
      case 1:
        renderStep = (
          <Location
            // city={order[0].city}
            // place={order[0].place}
            city={this.state.order[0].city}
            cities={this.state.cities}
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
            // since={order[3].since}
            // by={order[3].by}
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
            // since={order[3].since}
            // name={order[1].name}
            // model={order[1].value}
            // number={order[1].number}
            // fuel={order[1].fuel}
            // isFull={order[5].value}
            // image={order[1].image}
            since={this.state.order[3].since}
            name={this.state.order[1].name}
            model={this.state.order[1].value}
            number={this.state.order[1].number}
            fuel={this.state.order[1].fuel}
            isFull={this.state.order[5].value}
            image={this.state.order[1].image}
          />
        );
        break;
      case 5:
        renderStep = (
          <Total
            // since={order[3].since}
            // name={order[1].name}
            // model={order[1].value}
            // number={order[1].number}
            // fuel={order[1].fuel}
            // isFull={order[5].value}
            // image={order[1].image}
            since={this.state.order[3].since}
            name={this.state.order[1].name}
            model={this.state.order[1].value}
            number={this.state.order[1].number}
            fuel={this.state.order[1].fuel}
            isFull={this.state.order[5].value}
            image={this.state.order[1].image}
          />
        );
        break;
    }

    return (
      <HashRouter basename="/">
        {/* <Switch> */}
        <Route path="/" exact>
          <MainPage
            city={this.state.cityHeader}
            cities={this.state.cities}
            onListItemClick={this.handleOrderChange}
            onHeaderCityChange={(value) => this.setState({ cityHeader: value })}
          />
        </Route>
        <Route path="/order">
          <OrderLayout
            isActive={isActive}
            handleMenuClick={this.handleMenuClick}
            renderStep={renderStep}
            order={this.state.order}
            headerCity={this.state.cityHeader}
            // order={order}
            handleButtonClick={this.handleButtonClick}
            isModal={this.state.isModal}
            handleButtonDeclineClick={this.handleButtonDeclineClick}
          />
        </Route>
        <Route path="/admin" component={AdminPanel} />
        {/* </Switch> */}
      </HashRouter>
    );
  }
}
