import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import ModelMenu from "./ModelMenu";
import ModelList from "./ModelList";

import { fetchData } from "../../assets/scripts/fetchdata";

function Model(props) {
  const [car, setCar] = useState([]);
  const [menu, setMenu] = useState([
    { id: "1", name: "Все модели", title: "Все модели" },
  ]);
  const [select, setSelect] = useState(null);
  const [filter, setFilter] = useState("1");

  useEffect(() => {
    async function fetchMenuItems() {
      try {
        const response = await fetchData(
          "category",
          localStorage.getItem("api_token")
        );
        setMenu([...menu, ...response]);
        // console.log(response);
      } catch (e) {
        console.log(e);
      }
    }
    fetchMenuItems();
    fetchCarsByFilter(filter);
  }, []);

  useEffect(() => {
    fetchCarsByFilter(filter);
  }, [filter]);

  async function fetchCarsByFilter(id) {
    try {
      const query = id === "1" ? "" : `categoryId[id]=${id}`;
      const response = await fetchData(
        "car",
        localStorage.getItem("api_token"),
        `?${query}&page=0&limit=6`
      );
      setCar(response);
    } catch (e) {
      console.log(e);
    }
  }

  function handleMenuClick(name) {
    setFilter(name);
  }

  function handleItemClick(car) {
    const color = ["Любой"];
    const srcImg = `http://api-factory.simbirsoft1.com${car.thumbnail.path}`;
    setSelect(car.id);
    props.onMenuItemClick("carId", car.id, 1);
    props.onMenuItemClick("value", car.name.split(", ")[1], 1);
    props.onMenuItemClick("name", car.name.split(", ")[0], 1);
    props.onMenuItemClick("number", "В 123 АБВ", 1);
    props.onMenuItemClick("fuel", "35%", 1);
    props.onModelClick(color.concat(car.colors));
    props.onMenuItemClick("image", srcImg, 1);
  }

  return (
    <div className="body-main-model__inner">
      <div className="body-main-model">
        <ModelMenu
          filter={filter}
          onMenuClick={handleMenuClick}
          menu={menu}
          // bearer={props.bearer}
        />
        <ModelList
          cars={car}
          filter={filter}
          onMenuItemClick={handleItemClick}
          selectItem={select}
        />
      </div>
    </div>
  );
}

Model.propTypes = {
  onMenuItemClick: PropTypes.func,
  onModelClick: PropTypes.func,
};

export default Model;
