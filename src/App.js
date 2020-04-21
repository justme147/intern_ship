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

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: 1,
      isModal: false,
      orderId: `RU${Date.now()}`,
      colorsCar: [],
      cityHeader: localStorage.getItem("city"),
      cities: [
        {
          id: 1,
          value: "Москва",
          placies: [
            {
              id: 1,
              car: "Марка, Модель",
              descr: "Большая Якиманка 35с1",
              coordinate: [55.73445880391168, 37.61356985776774],
            },
            {
              id: 2,
              car: "Марка, Модель",
              descr: "Сергея Макеева 9с14",
              coordinate: [55.760906139758134, 37.550691462786745],
            },
            {
              id: 3,
              car: "Марка, Модель",
              descr: "5-Я Магистральная 10с2",
              coordinate: [55.772891165711656, 37.527246433314986],
            },
            {
              id: 4,
              car: "Марка, Модель",
              descr: "Чистопрудный Бульвар 17с1",
              coordinate: [55.76181633857502, 37.6448876541308],
            },
          ],
        },
        {
          id: 2,
          value: "Казань",
          placies: [
            {
              id: 1,
              car: "Марка, Модель",
              descr: "Кремлевская, 9",
              coordinate: [55.794649182115904, 49.11367153374306],
            },
            {
              id: 2,
              car: "Марка, Модель",
              descr: "Чистопольская 13а",
              coordinate: [55.81972459114286, 49.1102370441331],
            },
          ],
        },
        {
          id: 3,
          value: "Самара",
          placies: [
            {
              id: 1,
              car: "Марка, Модель",
              descr: "Искровская 1",
              coordinate: [53.204299580647216, 50.13243197386191],
            },
            {
              id: 2,
              car: "Марка, Модель",
              descr: "Аэродромная 47а",
              coordinate: [53.19149308078397, 50.1891359816143],
            },
          ],
        },
        {
          id: 4,
          value: "Ульяновск",
          placies: [
            {
              id: 1,
              car: "Марка, Модель",
              descr: "Московское ш. 108",
              coordinate: [54.305853506446454, 48.35989261521411],
            },
            {
              id: 2,
              car: "Марка, Модель",
              descr: "Карла Маркса 2",
              coordinate: [54.31627297776601, 48.40030989590599],
            },
            {
              id: 3,
              car: "Марка, Модель",
              descr: "Радищева 63",
              coordinate: [54.329322665236624, 48.401871252190574],
            },
            {
              id: 4,
              car: "Марка, Модель",
              descr: "Хрустальная 34а",
              coordinate: [54.26091940228838, 48.3327532105194],
            },
            {
              id: 5,
              car: "Марка, Модель",
              descr: "Стасова 24",
              coordinate: [54.28951809547812, 48.313453618174265],
            },
            {
              id: 6,
              car: "Марка, Модель",
              descr: "Водопроводная 2",
              coordinate: [54.30166587043291, 48.36805873190667],
            },
          ],
        },
        {
          id: 5,
          value: "Саратов",
          placies: [
            {
              id: 1,
              car: "Марка, Модель",
              descr: "Кутякова 13а",
              coordinate: [51.536282476770594, 46.03231294339025],
            },
            {
              id: 2,
              car: "Марка, Модель",
              descr: "Рабочая 145А",
              coordinate: [51.5346390069607, 45.999251150226314],
            },
          ],
        },
        {
          id: 6,
          value: "Волгоград",
          placies: [
            {
              id: 1,
              car: "Марка, Модель",
              descr: "Советская 14А",
              coordinate: [48.70502239575757, 44.518359949871524],
            },
            {
              id: 2,
              car: "Марка, Модель",
              descr: "Новорядская 4",
              coordinate: [48.71740529619106, 44.49351683494706],
            },
          ],
        },
        {
          id: 7,
          value: "Киров",
          placies: [
            {
              id: 1,
              car: "Марка, Модель",
              descr: "Горького 5",
              coordinate: [58.599079638433835, 49.64727140368382],
            },
            {
              id: 2,
              car: "Марка, Модель",
              descr: "Комсомольская 37",
              coordinate: [58.58034450474878, 49.64762871681853],
            },
          ],
        },
      ],
      order: [
        {
          city: localStorage.getItem("city"),
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
    };
  }

  // componentDidMount = async () => {
  //   try {
  //     const res = await fetch(
  //       `https://api.ipfind.com/me?auth=${process.env.REACT_APP_IPFIND_TOKEN}&lang=ru`
  //     );
  //     const json = await res.json();
  //     console.log(json);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  success = async (pos) => {
    try {
      const { longitude, latitude } = pos.coords;
      // console.log(pos.coords);
      const token = process.env.REACT_APP_MAPBOX_TOKEN;
      const response = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?access_token=${token}&types=place&language=ru`
      );
      const json = await response.json();
      // console.log(json);
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

  componentDidMount = () => {
    if (!localStorage.getItem("city")) {
      navigator.geolocation.getCurrentPosition(this.success);
      localStorage.setItem("isShowed", false);
      return;
    }
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

    this.setState({
      isActive: this.state.isActive < 4 ? this.state.isActive + 1 : 4,
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
            orderId={this.state.orderId}
          />
        </Route>
        <Route path="/admin" component={AdminPanel} />
        {/* </Switch> */}
      </HashRouter>
    );
  }
}
