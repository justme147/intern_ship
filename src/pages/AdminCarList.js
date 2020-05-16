import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import _ from "lodash";

import Loader from "../components/Loader";
import Select from "../components/Select";
import AdminBodyLayout from "../layouts/AdminBodyLayout";
import { fetchData } from "../assets/scripts/fetchdata";

function AdminCarList(props) {
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({
    pageSize: 7,
    pageCount: 0,
    currentPage: 1,
  });

  const [markList, setMarkList] = useState([
    { id: 1, title: "Марка", disable: true },
  ]);
  const [valueMark, setValueMark] = useState("1");

  const [modelList, setModelList] = useState([
    { id: 1, title: "Модель", disable: true },
  ]);
  const [valueModel, setValueModel] = useState("1");

  const [categoryList, setCategoryList] = useState([
    { id: 1, title: "Категория", disable: true },
  ]);
  const [valueCategory, setValueCategory] = useState("1");

  const [carList, setCarList] = useState([]);

  const [filter, setFilter] = useState({ isIncrease: true, category: "name" });

  const [query, setQuery] = useState("");

  useEffect(() => {
    // console.log(history);
    async function fetchCars() {
      const car = await fetchData(
        "car",
        JSON.parse(localStorage.getItem("api_token")),
        "?sort[name]=1"
      );

      // console.log(car);

      const marks = Array.from(
        new Set(car.data.map((item) => item.name.split(", ")[0]))
      );
      const newMarks = marks.map((item, idx) => ({ id: idx + 2, title: item }));

      const models = Array.from(
        new Set(
          car.data.map((item) => ({
            id: item.id,
            title: item.name.split(", ")[1],
          }))
        )
      );

      const categories = await fetchData(
        "category",
        localStorage.getItem("api_token")
      );

      const newCategories = categories.map((item) => ({
        id: item.id,
        title: item.name,
      }));

      const pageCount = Math.ceil(car.count / pagination.pageSize);
      setPagination({ ...pagination, pageCount });

      setMarkList(markList.concat(newMarks));
      setModelList(modelList.concat(models));
      setCategoryList(categoryList.concat(newCategories));
      setLoading(false);
      // setCarList(car);
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
    // console.log(car);
  }

  useEffect(() => {
    async function sortCar() {
      const car = await fetchData(
        "car",
        JSON.parse(localStorage.getItem("api_token")),
        `?sort[${filter.category}]=${
          filter.isIncrease ? "1" : "-1"
        }${query}&page=${pagination.currentPage - 1}&limit=${
          pagination.pageSize
        }`
      );
      setCarList(car.data);
    }
    sortCar();
  }, [filter]);

  async function handleClickResetButton() {
    setValueMark("1");
    setValueModel("1");
    setValueCategory("1");
    // setValueStatus("1");

    const car = await fetchData(
      "car",
      JSON.parse(localStorage.getItem("api_token")),
      "?sort[name]=1&page=0&limit=7"
    );

    const pageCount = Math.ceil(car.count / pagination.pageSize);

    setQuery("");
    setCarList(car.data);
    setPagination({ ...pagination, currentPage: 1, pageCount });
    setFilter({ isIncrease: true, category: "name" });
  }

  async function handleClickApplyButton() {
    const markItem = markList.filter((item) => item.id === +valueMark);
    const modelItem = modelList.filter((item) => item.id === valueModel);
    const name = `${valueMark !== "1" ? `${markItem[0].title}, ` : ""}${
      valueModel !== "1" ? `${modelItem[0].title}` : ""
    }`;

    const query = `${name !== "" ? `&name=${name}` : ""}${
      valueCategory !== "1" ? `&categoryId[id]=${valueCategory}` : ""
    }`;

    const car = await fetchData(
      "car",
      JSON.parse(localStorage.getItem("api_token")),
      `?sort[name]=1${query}&page=0&limit=7`
    );

    // console.log(car);
    const pageCount = Math.ceil(car.count / pagination.pageSize);

    setCarList(car.data);
    setPagination({ ...pagination, currentPage: 1, pageCount });
    setQuery(query);
  }

  function paginatePages() {
    const pages = [];
    for (let i = 1; i <= pagination.pageCount; i++) {
      if (i < pagination.currentPage - 1 || i > pagination.currentPage + 1) {
        continue;
      }
      pages.push(i);
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

    const car = await fetchData(
      "car",
      JSON.parse(localStorage.getItem("api_token")),
      `?sort[${filter.category}]=${
        filter.isIncrease ? "1" : "-1"
      }${query}&page=${+page - 1}&limit=7`
    );
    console.log(car);
    setCarList(car.data);
  }

  return (
    <AdminBodyLayout title="Список авто">
      {loading && <Loader />}
      {!loading && (
        <div className="body-main__order">
          <div className="body-main__header">
            <div className="body-main__options">
              <Select
                list={markList}
                value={valueMark}
                handleChangeValue={(e) => setValueMark(e.target.value)}
              />
              <Select
                list={modelList}
                value={valueModel}
                handleChangeValue={(e) => setValueModel(e.target.value)}
              />
              <Select
                list={categoryList}
                value={valueCategory}
                handleChangeValue={(e) => setValueCategory(e.target.value)}
              />
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
                </tr>
              </thead>
              <tbody>
                {carList.length ? (
                  carList.map((item) => {
                    return (
                      <tr key={item.id} onClick={() => handleItemClick(item)}>
                        <td>{item.name.split(", ")[0]}</td>
                        <td>{item.name.split(", ")[1]}</td>
                        <td>{item.categoryId.name}</td>
                        <td>{item.priceMin}</td>
                        <td>{item.priceMax}</td>
                      </tr>
                    );
                  })
                ) : (
                  <tr className="body-main__empty">
                    <td colSpan="5">
                      Записей по указанным фильтрам не найдено. Сбросьте фильтры
                      и повторите попытку.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div className="body-main__footer">{paginatePages()}</div>
        </div>
      )}
    </AdminBodyLayout>
  );
}

AdminCarList.propTypes = {
  handleCarClick: PropTypes.func,
};

export default AdminCarList;
