import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link, useHistory } from "react-router-dom";

import Navbar from "../components/Navbar";
import LangSwitch from "../components/Navbar/LangSwitch";
import Header from "../components/Header";
import BurgerMenu from "../components/Navbar/BurgerMenu";
import Slider from "../components/Slider";
import MenuList from "../components/Navbar/MenuList";
import ChooseCity from "../components/Modal/ChooseCity";

import closeIcon from "../assets/images/startscreen/icon_close.svg";
import imgToSvg from "../assets/scripts/svgHover";
import toggleMenu from "../assets/scripts/startscreenmenu";

function MainPage(props) {
  const history = useHistory();
  const [isCity, setIsCity] = useState(false);
  const [chooseCity, setChooseCity] = useState(false);
  const [city, setCity] = useState("");
  const [isCorrectCity, setIsCorrectCity] = useState(true);

  useEffect(() => {
    imgToSvg(".list__image");
    imgToSvg(".body-header__icon");
    toggleMenu();
    if (localStorage.getItem("isShowed") === "false") {
      setIsCity(true);
      localStorage.setItem("isShowed", true);
    }
  }, []);

  useEffect(() => {
    imgToSvg(".location__icon");

    const input = document.querySelector(".location__input");

    if (input) {
      input.focus();
    }

    const listener = (e) => {
      if (e.key === "Escape") {
        setChooseCity(false);
        setCity("");
      }
    };

    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, [chooseCity]);

  useEffect(() => {
    // setIsCorrectCity(true);
    const items = document.querySelectorAll(".location__item");
    // console.log(items);

    if (city === "") {
      setIsCorrectCity(true);
      return;
    }

    items.length === 0 ? setIsCorrectCity(false) : setIsCorrectCity(true);
  }, [city]);

  function handleInputChange(e) {
    const value =
      e.target.value.length !== 0
        ? e.target.value[0].toUpperCase() + e.target.value.slice(1)
        : e.target.value;
    setCity(value);
    setIsCorrectCity(true);
  }

  async function handleItemClick(value) {
    localStorage.setItem("city", value);
    props.onListItemClick("city", value, 0);
    props.onHeaderCityChange(value);
    setCity("");
    setChooseCity(false);
    setIsCity(false);

    try {
      const token = process.env.REACT_APP_MAPBOX_TOKEN;

      value = value === "Волгоград" ? "город-герой " + value : value;

      const response = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${value}.json?access_token=${token}&types=place`
      );
      const json = await response.json();
      const { features } = json;

      const position = {
        latitude: features[0].center[1],
        longitude: features[0].center[0],
      };

      localStorage.setItem("position", JSON.stringify(position));
    } catch (e) {
      console.log(e);
    }
  }

  function handleWindowClick(e) {
    const modal = document.querySelector(".location__inner");
    if (e.target === modal || modal.contains(e.target)) return;
    setChooseCity(false);
    setCity("");
  }

  return (
    <div className="wrapper">
      <div className="container">
        <div className="container__content">
          {/* Start sidebar section  */}

          <Navbar />

          {/* <!-- End sidebar section --> */}

          {/* <!-- Start body section --> */}

          <section className="body">
            <div className="body__inner">
              <header className="body-header">
                <div className="body-header__containerXS">
                  <BurgerMenu burger border />

                  <Header
                    city={props.city}
                    modalShow={isCity}
                    onButtonAcceptClick={() => setIsCity(false)}
                    onButtonDeclineClick={() => setChooseCity(true)}
                  />
                </div>
              </header>
              <div className="body-content">
                <div className="body-content__inner">
                  <h2 className="body-content__title">Каршеринг</h2>
                  <h1 className="body-content__subtitle">Need for drive</h1>
                  <p className="body-content__text">
                    Поминутная аренда авто твоего города
                  </p>
                </div>
                <button
                  className="button body-content__button"
                  onClick={() => history.push("/order")}
                >
                  Забронировать
                </button>
              </div>
              <footer className="body-footer">
                <div className="body-footer__inner">
                  <p className="body-footer__copy">
                    © 2016-2019 «Need for drive»
                  </p>
                  <a href="tel:84952342244" className="body-footer__phone">
                    8 (495) 234-22-44
                  </a>
                </div>
              </footer>
            </div>
          </section>

          {/* <!-- End body section --> */}

          {/* <!-- Start slider section --> */}

          <Slider />

          {/* <!-- End slider section --> */}
        </div>

        {/* <!-- Start menu section --> */}

        <div className="container__menu">
          <section className="menu">
            <div className="menu__inner">
              <BurgerMenu padding close />

              <MenuList />

              <LangSwitch display />
            </div>
          </section>
        </div>

        {chooseCity && (
          <ChooseCity
            handleWindowClick={(e) => handleWindowClick(e)}
            handleCloseClick={() => setChooseCity(false)}
            srcIcon={closeIcon}
            isCorrectCity={isCorrectCity}
            city={city}
            handleCityChange={(e) => handleInputChange(e)}
            cities={props.cities}
            handleItemClick={handleItemClick}
          />
        )}

        {/* <!-- End menu section --> */}
      </div>
    </div>
  );
}

MainPage.propTypes = {
  city: PropTypes.string,
  cities: PropTypes.arrayOf(PropTypes.object),
  onListItemClick: PropTypes.func,
  onHeaderCityChange: PropTypes.func,
};

export default MainPage;
