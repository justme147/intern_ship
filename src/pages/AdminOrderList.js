import React, { useState, useEffect } from "react";

import Loader from "../components/Loader";
import Select from "../components/Select";
import AdminBodyLayout from "../layouts/AdminBodyLayout";
import AdminCheckbox from "../components/Checkbox/AdminCheckbox";
import OrderList from "../components/OrderList";
import { fetchData, putData } from "../assets/scripts/fetchdata";

export default function AdminOrderList() {
  const [loading, setLoading] = useState(true);
  const [alert, setAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState({
    title: "",
    correct: true,
  });
  const [pagination, setPagination] = useState({
    pageSize: 5,
    pageCount: 0,
    currentPage: 1,
  });

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

  const [statList, setStatList] = useState([
    { id: 1, title: "Статус", disable: true },
  ]);
  const [valueStat, setValueStat] = useState("1");

  const [orderList, setOrderList] = useState([]);

  const [query, setQuery] = useState("");

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

      const status = await fetchData(
        "orderStatus",
        JSON.parse(localStorage.getItem("api_token"))
      );

      const newStatus = status.map((item) => ({
        id: item.id,
        title: item.name,
      }));

      const orders = await fetchData(
        "order",
        JSON.parse(localStorage.getItem("api_token")),
        `?sort[createdAt]=-1&page=${pagination.currentPage - 1}&limit=${
          pagination.pageSize
        }`
      );
      const pageCount = Math.ceil(orders.count / pagination.pageSize);
      setPagination({ ...pagination, pageCount });

      setCitiesList(citiesList.concat(newCitiesList));
      setCarsList(carsList.concat(newCarsList));
      setStatList(statList.concat(newStatus));
      setOrderList(orders.data);
      setLoading(false);
    }
    fetchOptions();
  }, []);

  async function handleClickResetButton() {
    setValueTime("1");
    setValueCars("1");
    setValueCities("1");
    setValueStatus("1");
    setValueStat("1");

    const orders = await fetchData(
      "order",
      JSON.parse(localStorage.getItem("api_token")),
      "?sort[createdAt]=-1&page=0&limit=5"
    );

    const pageCount = Math.ceil(orders.count / pagination.pageSize);

    setOrderList(orders.data);
    setPagination({ ...pagination, currentPage: 1, pageCount });
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

    const query = `${
      valueTime !== "1"
        ? `&createdAt[$gt]=${dateFrom.getTime()}&createdAt[$lt]=${dateNow.getTime()}`
        : ""
    }${valueCars !== "1" ? `&carId[id]=${valueCars}` : ""}${
      valueCities !== "1" ? `&cityId[id]=${valueCities}` : ""
    }${queryStatus}${
      valueStat !== "1" ? `&orderStatusId[id]=${valueStat}` : ""
    }`;

    const orders = await fetchData(
      "order",
      JSON.parse(localStorage.getItem("api_token")),
      `?sort[createdAt]=-1${query}&page=0&limit=5`
    );

    const pageCount = Math.ceil(orders.count / pagination.pageSize);

    setQuery(query);
    setOrderList(orders.data);
    setPagination({ ...pagination, currentPage: 1, pageCount });
  }

  function paginatePages() {
    const pages = [];
    for (let i = 1; i <= pagination.pageCount; i++) {
      if (i < pagination.currentPage - 1 || i > pagination.currentPage + 1) {
        continue;
      }
      pages.push(i);
    }

    if (!pagination.pageCount) {
      pages.push(1);
    }

    if (pages[0] > 2) {
      pages.unshift("...");
      pages.unshift(1);
    } else if (pages[0] === 2) {
      pages.unshift(1);
    }

    if (pages[pages.length - 1] < pagination.pageCount - 1) {
      pages.push("...");
      pages.push(pagination.pageCount);
    } else if (pages[pages.length - 1] === pagination.pageCount - 1) {
      pages.push(pagination.pageCount);
    }

    return (
      <>
        <span onClick={() => pageChangeHandler(pagination.currentPage - 1)}>
          &#171;
        </span>
        {pages.map((item, idx) => (
          <span
            key={item + idx}
            onClick={item !== "..." ? () => pageChangeHandler(item) : null}
            className={item === pagination.currentPage ? "active" : ""}
          >
            {item}
          </span>
        ))}
        <span onClick={() => pageChangeHandler(pagination.currentPage + 1)}>
          &#187;
        </span>
      </>
    );
  }

  async function pageChangeHandler(page) {
    if (
      +page < 1 ||
      +page > pagination.pageCount ||
      +page === pagination.currentPage
    )
      return;
    setPagination({ ...pagination, currentPage: +page });

    const orders = await fetchData(
      "order",
      JSON.parse(localStorage.getItem("api_token")),
      `?sort[createdAt]=-1${query}&page=${+page - 1}&limit=${
        pagination.pageSize
      }`
    );

    setOrderList(orders.data);
  }

  async function handleAlertChange(id, status, currentStatus) {
    setAlert(true);
    if (status === currentStatus.name) {
      setAlertMessage({
        title:
          "Неудача! Текущий статус совпадает с тем на который вы хотите изменить",
        correct: false,
      });
      return;
    } else {
      setAlertMessage({ title: "Успех! Статус заказа изменен", correct: true });
    }

    const orderStatus = await fetchData(
      "orderStatus",
      JSON.parse(localStorage.getItem("api_token")),
      `?name=${status}`
    );

    const updateOrder = {
      orderStatusId: orderStatus.data[0],
    };

    const putOrderStatus = await putData(
      "order",
      JSON.parse(localStorage.getItem("api_token")),
      id,
      updateOrder
    );

    const updateOrderList = orderList.map((item) => {
      if (item.id === putOrderStatus.id) {
        return putOrderStatus;
      }
      return item;
    });

    setOrderList(updateOrderList);
  }

  return (
    <AdminBodyLayout
      title="Заказы"
      alert={alertMessage.title}
      isCorrect={alertMessage.correct}
      isShow={alert}
      closeHandler={() => setAlert(false)}
    >
      {loading && <Loader />}
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

              <Select
                list={statList}
                value={valueStat}
                handleChangeValue={(e) => setValueStat(e.target.value)}
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
            <OrderList orders={orderList} changeAlert={handleAlertChange} />
          ) : (
            <p className="body-main__empty">
              Записей по указанным фильтрам не найдено. Сбросьте фильтры и
              повторите попытку.
            </p>
          )}

          <div className="body-main__footer body-main__footer--border">
            {paginatePages()}
          </div>
        </div>
      )}
    </AdminBodyLayout>
  );
}
