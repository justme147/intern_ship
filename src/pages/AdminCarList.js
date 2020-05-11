import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";

import AdminBodyLayout from "../layouts/AdminBodyLayout";
import { fetchData } from "../assets/scripts/fetchdata";

function AdminCarList(props) {
  const history = useHistory();
  const [carList, setCarList] = useState([]);
  const [filter, setFilter] = useState({ isIncrease: true, category: "name" });

  useEffect(() => {
    async function fetchCars() {
      const car = await fetchData(
        "car",
        JSON.parse(localStorage.getItem("api_token")),
        "?sort[name]=1&page=0&limit=7"
      );
      console.log(car);
      setCarList(car);
    }
    fetchCars();
  }, []);

  function filterTable(e) {
    e.persist();
    if (filter.category === e.target.dataset.filter) {
      setFilter({ ...filter, isIncrease: !filter.isIncrease });
    } else {
      setFilter({ isIncrease: true, category: e.target.dataset.filter });
    }
  }

  function handleItemClick(car) {
    props.handleCarClick(car);
    history.push("/admin/car-setting");
    console.log(car);
  }

  useEffect(() => {
    async function sortCar() {
      const car = await fetchData(
        "car",
        JSON.parse(localStorage.getItem("api_token")),
        `?sort[${filter.category}]=${
          filter.isIncrease ? "1" : "-1"
        }&page=0&limit=7`
      );
      setCarList(car);
    }
    sortCar();
  }, [filter]);
  return (
    <AdminBodyLayout title="Список авто">
      <div className="body-main__order">
        <div className="body-main__header">
          <div className="body-main__options">
            <div className="body-main__select-wrapper">
              <div className="body-main__arrows"></div>
              <select name="" id="" className="body-main__select">
                <option value="">Field</option>
                <option value="">Field</option>
                <option value="">Field</option>
                <option value="">Field</option>
              </select>
            </div>
            <div className="body-main__select-wrapper">
              <div className="body-main__arrows"></div>
              <select name="" id="" className="body-main__select">
                <option value="">Field</option>
                <option value="">Field</option>
                <option value="">Field</option>
                <option value="">Field</option>
              </select>
            </div>
            <div className="body-main__select-wrapper">
              <div className="body-main__arrows"></div>
              <select name="" id="" className="body-main__select">
                <option value="">Field</option>
                <option value="">Field</option>
                <option value="">Field</option>
                <option value="">Field</option>
              </select>
            </div>
            <div className="body-main__select-wrapper">
              <div className="body-main__arrows"></div>
              <select name="" id="" className="body-main__select">
                <option value="">Field</option>
                <option value="">Field</option>
                <option value="">Field</option>
                <option value="">Field</option>
              </select>
            </div>
          </div>
          <div className="body-main__options">
            <button className="body-main__button body-main__button--red body-main__button--width">
              Reset
            </button>
            <button className="body-main__button body-main__button--blue body-main__button--width body-main__button--marginL">
              Apply
            </button>
          </div>
        </div>
        <div className="body-main__list body-main__list--padding">
          <table className="body-main__table">
            <thead>
              <tr>
                <th onClick={(e) => filterTable(e)} data-filter="name">
                  Марка
                </th>
                <th onClick={(e) => filterTable(e)} data-filter="name">
                  Модель
                </th>
                <th onClick={(e) => filterTable(e)} data-filter="categoryId">
                  Категория
                </th>
                <th onClick={(e) => filterTable(e)} data-filter="priceMin">
                  Цена от
                </th>
                <th onClick={(e) => filterTable(e)} data-filter="priceMax">
                  Цена до
                </th>
                {/* <th>Header</th> */}
                {/* <th>Header</th> */}
              </tr>
            </thead>
            <tbody>
              {carList.map((item) => {
                return (
                  <tr key={item.id} onClick={() => handleItemClick(item)}>
                    <td>{item.name.split(", ")[0]}</td>
                    <td>{item.name.split(", ")[1]}</td>
                    <td>{item.categoryId.name}</td>
                    <td>{item.priceMin}</td>
                    <td>{item.priceMax}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="body-main__footer"></div>
      </div>
    </AdminBodyLayout>
  );
}

AdminCarList.propTypes = {
  handleCarClick: PropTypes.func,
};

export default AdminCarList;
