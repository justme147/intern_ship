import React from "react";
import { Route, HashRouter } from "react-router-dom";

import Location from "./components/Location";
import Model from "./components/Model";
import Options from "./components/Options";
import Total from "./components/Total";
import MainPage from "./pages/MainPage";
import OrderLayout from "./layouts/OrderLayout";
import AdminPanel from "./pages/AdminPanel";

import { fetchData, authLogin, deleteData } from "./assets/scripts/fetchdata";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
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
      orderPrice: 0,
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
        (place) => place.cityId?.id === item?.id
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

    console.log(newCity);

    const cityId = city.filter(
      (item) => item.name === localStorage.getItem("city")
    );

    this.setState((prev) => ({
      ...prev,
      cities: newCity,
      order: [
        {
          ...prev.order[0],
          cityId: cityId[0]?.id,
        },
        ...prev.order.slice(1),
      ],
    }));
  };

  handleMenuClick = (id) => {
    if (id >= this.state.isActive) return;

    this.setState({
      isActive: id,
    });
  };

  handleButtonDeclineClick = (flag = "") => {
    this.setState({ isModal: false, isActive: flag === "reject" ? 4 : 5 });
  };

  handleButtonClick = () => {
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
    });
  };

  handleOrderChange = (name, value, index) => {
    const newOrder = this.state.order.slice();

    newOrder[index][name] = value;

    this.setState({ order: newOrder });
  };

  handlePriceChange = (value) => {
    this.setState({ orderPrice: value });
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

    let renderStep;

    switch (isActive) {
      case 1:
        renderStep = (
          <Location
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
            onPriceChange={this.handlePriceChange}
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
            onPriceChange={this.handlePriceChange}
            price={this.state.orderPrice}
          />
        );
        break;
      case 4:
        renderStep = <Total order={this.state.order} />;
        break;
      case 5:
        renderStep = <Total order={this.state.order} />;
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
            loading={this.state.loading}
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
            price={this.state.orderPrice}
          />
        </Route>
        <Route path="/admin" component={AdminPanel} />
        {/* </Switch> */}
      </HashRouter>
    );
  }
}
