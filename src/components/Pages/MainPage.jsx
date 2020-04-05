import React from "react";
import { Link } from "react-router-dom";

import Navbar from "../Navbar/Navbar.jsx";
import LangSwitch from "../Navbar/LangSwitch.jsx";
import Header from "../Header/Header.jsx";
import BurgerMenu from "../Navbar/BurgerMenu.jsx";
import Slider from "../Slider/Slider.jsx";
import MenuList from "../Navbar/MenuList.jsx";

export default function MainPage() {
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

                  <Header />
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

        {/* <!-- End menu section --> */}
      </div>
    </div>
  );
}
