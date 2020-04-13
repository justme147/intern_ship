import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import LangSwitch from "../components/Navbar/LangSwitch";
import Header from "../components/Header";
import BurgerMenu from "../components/Navbar/BurgerMenu";
import Slider from "../components/Slider";
import MenuList from "../components/Navbar/MenuList";

import closeIcon from "../assets/images/startscreen/icon_close.svg";

export default function MainPage() {
  const [isCity, setIsCity] = useState(false);
  const [chooseCity, setChooseCity] = useState(false);

  useEffect(() => {
    setIsCity(true);
  }, []);
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
                    modalShow={isCity}
                    onButtonAcceptClick={() => setIsCity(false)}
                    onButtonDeclineClick={() => setChooseCity(true)}
                  />
                </div>
              </header>
              <div className="body-content">
                <div className="body-content__inner">
                  <h1 className="body-content__title">Каршеринг</h1>
                  <h2 className="body-content__subtitle">Need for drive</h2>
                  <p className="body-content__text">
                    Поминутная аренда авто твоего города
                  </p>
                </div>
                <Link to="/order">
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
                <div
                  className="location__close"
                  onClick={() => setChooseCity(false)}
                >
                  <img src={closeIcon} className="location__icon" />
                </div>
                <h2 className="location__title">Укажите Ваш город</h2>
                <input
                  type="text"
                  className="location__input"
                  placeholder="Введите город"
                />
              </div>
            </section>
          </div>
        )}

        {/* <!-- End menu section --> */}
      </div>
    </div>
  );
}
