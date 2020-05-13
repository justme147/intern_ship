import React, { useState, useEffect } from "react";

import Select from "../components/Select";
import AdminBodyLayout from "../layouts/AdminBodyLayout";
import AdminCheckbox from "../components/AdminCheckbox";
import OrderList from "../components/OrderList";
import { fetchData } from "../assets/scripts/fetchdata";

export default function AdminOrderList() {
  const [loading, setLoading] = useState(true);

  const [timeList, setTimeList] = useState([
    { id: 1, title: "Период", disable: true },
    { id: 2, title: "За год" },
    { id: 3, title: "За месяц" },
    { id: 4, title: "За неделю" },
    { id: 5, title: "За день" },
  ]);
  const [valueTime, setValueTime] = useState("1");

  const [citiesList, setCitiesList] = useState([
    { id: 1, title: "Город", disable: true },
  ]);
  const [valueCities, setValueCities] = useState("1");

  const [carsList, setCarsList] = useState([
    { id: 1, title: "Модель", disable: true },
  ]);
  const [valueCars, setValueCars] = useState("1");

  const [statusList, setStatusList] = useState([
    { id: 1, title: "Статус заказа", disable: true },
    { id: 2, title: "В процессе" },
    { id: 3, title: "Не начато" },
    { id: 4, title: "Завершено" },
  ]);
  const [valueStatus, setValueStatus] = useState("1");

  const [orderList, setOrderList] = useState([]);

  useEffect(() => {
    async function fetchOptions() {
      const cities = await fetchData(
        "city",
        JSON.parse(localStorage.getItem("api_token"))
      );
      const newCitiesList = cities.map((item) => ({
        id: item.id,
        title: item.name,
      }));

      const cars = await fetchData(
        "car",
        JSON.parse(localStorage.getItem("api_token"))
      );

      const newCarsList = cars.map((item) => ({
        id: item.id,
        title: item.name.split(", ")[1],
      }));

      const orders = await fetchData(
        "order",
        JSON.parse(localStorage.getItem("api_token")),
        "?sort[createdAt]=-1&page=0&limit=5"
      );
      // const some = await fetchData(
      //   "orderStatus",
      //   JSON.parse(localStorage.getItem("api_token"))
      // );
      console.log(orders);
      // console.log(some);

      setCitiesList(citiesList.concat(newCitiesList));
      setCarsList(carsList.concat(newCarsList));
      setOrderList(orders);
      setLoading(false);
    }
    fetchOptions();
  }, []);

  async function handleClickResetButton() {
    setValueTime("1");
    setValueCars("1");
    setValueCities("1");
    setValueStatus("1");

    const orders = await fetchData(
      "order",
      JSON.parse(localStorage.getItem("api_token")),
      "?sort[createdAt]=-1&page=0&limit=5"
    );

    setOrderList(orders);
  }

  async function handleClickApplyButton() {
    let dateNow = new Date();
    let dateFrom = new Date();

    if (valueTime === "2") {
      dateFrom.setFullYear(dateFrom.getFullYear() - 1);
    }

    if (valueTime === "3") {
      dateFrom.setMonth(dateFrom.getMonth() - 1);
    }
    if (valueTime === "4") {
      dateFrom.setDate(dateFrom.getDate() - 7);
      // console.log(dateFrom.getDate());
    }
    if (valueTime === "5") {
      dateFrom.setDate(dateFrom.getDate() - 1);
    }
    dateFrom.setHours(0);
    dateFrom.setMinutes(0);
    dateFrom.setSeconds(0);

    let queryStatus = "";

    if (valueStatus === "2") {
      queryStatus = `&dateFrom[$lt]=${dateNow.getTime()}&dateTo[$gt]=${dateNow.getTime()}`;
    } else if (valueStatus === "3") {
      queryStatus = `&dateFrom[$gt]=${dateNow.getTime()}`;
    } else if (valueStatus === "4") {
      queryStatus = `&dateTo[$lt]=${dateNow.getTime()}`;
    }

    const orders = await fetchData(
      "order",
      JSON.parse(localStorage.getItem("api_token")),
      `?sort[createdAt]=-1${
        valueTime !== "1"
          ? `&createdAt[$gt]=${dateFrom.getTime()}&createdAt[$lt]=${dateNow.getTime()}`
          : ""
      }${valueCars !== "1" ? `&carId[id]=${valueCars}` : ""}${
        valueCities !== "1" ? `&cityId[id]=${valueCities}` : ""
      }${queryStatus}&page=0&limit=5`
    );

    // console.log(orders);
    setOrderList(orders);
  }

  return (
    <AdminBodyLayout title="Заказы">
      {loading && <p>Загрузка...</p>}
      {!loading && (
        <div className="body-main__order">
          <div className="body-main__header body-main__header--border">
            <div className="body-main__options">
              <Select
                list={timeList}
                value={valueTime}
                handleChangeValue={(e) => setValueTime(e.target.value)}
              />

              <Select
                list={carsList}
                value={valueCars}
                handleChangeValue={(e) => setValueCars(e.target.value)}
              />

              <Select
                list={citiesList}
                value={valueCities}
                handleChangeValue={(e) => setValueCities(e.target.value)}
              />

              <Select
                list={statusList}
                value={valueStatus}
                handleChangeValue={(e) => setValueStatus(e.target.value)}
              />
            </div>
            <div className="body-main__options">
              <button
                className="body-main__button body-main__button--red body-main__button--width"
                onClick={() => handleClickResetButton()}
              >
                Сбросить
              </button>
              <button
                className="body-main__button body-main__button--blue body-main__button--width body-main__button--marginL"
                onClick={() => handleClickApplyButton()}
              >
                Применить
              </button>
            </div>
          </div>
          {orderList.length ? (
            <OrderList orders={orderList} />
          ) : (
            <p className="body-main__empty">
              Записей по указанным фильтрам не найдено. Сбросьте фильтры и
              повторите попытку.
            </p>
          )}

          <div className="body-main__footer body-main__footer--border"></div>
        </div>
      )}
    </AdminBodyLayout>
  );
}
