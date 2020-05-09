import React, { useState, useEffect } from "react";

import Select from "../components/Select";
import AdminBodyLayout from "../layouts/AdminBodyLayout";
import AdminCheckbox from "../components/AdminCheckbox";
import OrderList from "../components/OrderList";
import { fetchData } from "../assets/scripts/fetchdata";

export default function AdminOrderList() {
  const [options, setOptions] = useState([
    { id: 1, text: "Полный бак" },
    { id: 2, text: "Детское кресло" },
    { id: 3, text: "Правый руль" },
  ]);

  const [timeList, setTimeList] = useState([
    { id: 1, value: "year", title: "За год" },
    { id: 2, value: "month", title: "За месяц" },
    { id: 3, value: "week", title: "За неделю" },
    { id: 4, value: "day", title: "За день" },
  ]);

  const [citiesList, setCitiesList] = useState([]);
  const [carsList, setCarsList] = useState([]);
  const [orderList, setOrderList] = useState([]);

  useEffect(() => {
    async function fetchOptions() {
      const cities = await fetchData(
        "city",
        JSON.parse(localStorage.getItem("api_token"))
      );
      const citiesList = cities.map((item) => ({
        id: item.id,
        title: item.name,
      }));

      const cars = await fetchData(
        "car",
        JSON.parse(localStorage.getItem("api_token"))
      );

      const carsList = cars.map((item) => ({
        id: item.id,
        title: item.name.split(", ")[1],
        value: item.name,
      }));

      const orders = await fetchData(
        "order",
        JSON.parse(localStorage.getItem("api_token")),
        "?page=2&limit=5"
      );
      console.log(orders);

      setCitiesList(citiesList);
      setCarsList(carsList);
      setOrderList(orders);
    }
    fetchOptions();
  }, []);
  return (
    <AdminBodyLayout title="Заказы">
      <div className="body-main__order">
        <div className="body-main__header body-main__header--border">
          <div className="body-main__options">
            <Select list={timeList} />

            <Select list={carsList} />

            <Select list={citiesList} />

            <div className="body-main__select-wrapper">
              <div className="body-main__arrows"></div>
              <select name="" id="" className="body-main__select">
                <option value="">В процессе</option>
                <option value="">Не начато</option>
                <option value="">Завершено</option>
              </select>
            </div>
          </div>
          <button className="body-main__button body-main__button--blue body-main__button--width">
            Применить
          </button>
        </div>
        <OrderList orders={orderList} />
        <div className="body-main__footer body-main__footer--border"></div>
      </div>
    </AdminBodyLayout>
  );
}
