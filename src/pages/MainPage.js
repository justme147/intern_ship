import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import LangSwitch from "../components/Navbar/LangSwitch";
import Header from "../components/Header";
import BurgerMenu from "../components/Navbar/BurgerMenu";
import Slider from "../components/Slider";
import MenuList from "../components/Navbar/MenuList";

import closeIcon from "../assets/images/startscreen/icon_close.svg";
import imgToSvg from "../assets/scripts/svgHover";

function MainPage(props) {
  const [isCity, setIsCity] = useState(false);
  const [chooseCity, setChooseCity] = useState(false);
  const [city, setCity] = useState("");

  useEffect(() => {
    imgToSvg(".list__image");
    imgToSvg(".body-header__icon");
    if (localStorage.getItem("isShowed") === "false") {
      setIsCity(true);
      localStorage.setItem("isShowed", true);
    }
  }, []);

  useEffect(() => {
    imgToSvg(".location__icon");

    const listener = (e) => {
      if (e.key === "Escape") {
        setChooseCity(false);
      }
    };

    const element = document.querySelector(".container__location");

    if (element) {
      window.addEventListener("keydown", listener);
    }

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, [chooseCity]);

  async function handleItemClick(value) {
    localStorage.setItem("city", value);
    props.onListItemClick("city", value, 0);
    props.onHeaderCityChange(value);
    setCity("");
    setChooseCity(false);
    setIsCity(false);

    const token = process.env.REACT_APP_MAPBOX_TOKEN;

    value = value === "Волгоград" ? "город-герой" : value;

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
                <Link to="/internship/build/order">
                  <button className="button body-content__button">
                    Забронировать
                  </button>
                </Link>
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
          <div className="container__location">
            <section className="location">
              <div className="location__inner">
                <div className="location__close">
                  <div
                    className="location__icon--padding"
                    onClick={() => setChooseCity(false)}
                  >
                    <img
                      src={closeIcon}
                      className="location__icon"
                      alt="close_icon"
                    />
                  </div>
                </div>
                <label className="location__title">Укажите Ваш город</label>
                <input
                  type="text"
                  className="location__input"
                  placeholder="Введите город"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
                {city && (
                  <ul className="location__list">
                    {props.cities.map((item) => {
                      const valueFix = item.value.toLowerCase();
                      if (valueFix.includes(city.toLowerCase())) {
                        return (
                          <li
                            key={item.id}
                            className="location__item"
                            onClick={() => handleItemClick(item.value)}
                          >
                            {item.value}
                          </li>
                        );
                      }
                    })}
                  </ul>
                )}
              </div>
            </section>
          </div>
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
