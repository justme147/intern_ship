import React from "react";
import { Switch, Route } from "react-router-dom";

export default function EmptyAdminLayout(props) {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="container__content container__content--gray">
          <section className="sidebar">
            <div className="sidebar__container">
              <nav className="sidebar__menu">
                <header className="sidebar__header">
                  <img
                    src="./images/adminpanel/logo.svg"
                    alt=""
                    className="sidebar__image"
                  />
                  <h2 className="sidebar__title">Need for drive</h2>
                </header>
                <ul className="sidebar__list">
                  <li className="sidebar__item">
                    <img
                      src="./images/adminpanel/menu_item_1.svg"
                      alt=""
                      className="sidebar__icon"
                    />
                    Карточка автомобиля
                  </li>
                  <li className="sidebar__item">
                    <img
                      src="./images/adminpanel/menu_item_2.svg"
                      alt=""
                      className="sidebar__icon"
                    />
                    Список авто
                  </li>
                  <li className="sidebar__item">
                    <img
                      src="./images/adminpanel/menu_item_3.svg"
                      alt=""
                      className="sidebar__icon"
                    />
                    Заказы
                  </li>
                  <li className="sidebar__item">
                    <img
                      src="./images/adminpanel/menu_item_4.svg"
                      alt=""
                      className="sidebar__icon"
                    />
                    Menu 4
                  </li>
                  <li className="sidebar__item">
                    <img
                      src="./images/adminpanel/menu_item_5.svg"
                      alt=""
                      className="sidebar__icon"
                    />
                    Menu 5
                  </li>
                  <li className="sidebar__item">
                    <img
                      src="./images/adminpanel/menu_item_6.svg"
                      alt=""
                      className="sidebar__icon"
                    />
                    Menu 6
                  </li>
                  <li className="sidebar__item">
                    <img
                      src="./images/adminpanel/menu_item_7.svg"
                      alt=""
                      className="sidebar__icon"
                    />
                    Menu 7
                  </li>
                </ul>
              </nav>
            </div>
          </section>

          <section className="body">
            <div className="body__container">
              <div className="body-top">
                <header className="body-header body-header--flex">
                  <div className="body-header__search">
                    <label className="body-header__label">
                      <img
                        src="./images/adminpanel/search_icon.svg"
                        alt=""
                        className="body-header_icon"
                      />
                      <input
                        type="text"
                        className="body-header__input"
                        placeholder="Поиск ..."
                      />
                    </label>
                  </div>
                  <div className="body-header__wrap">
                    <div className="body-header__notification">
                      <img
                        src="./images/adminpanel/notifications_icon.svg"
                        alt=""
                        className="body-header__icon body-header__icon--width"
                      />
                      <span className="body-header__count">2</span>
                    </div>
                    <div className="body-header__user">
                      <img
                        src="./images/adminpanel/avatar.jpg"
                        alt=""
                        className="body-header__avatar"
                      />
                      <p className="body-header__name">Admin</p>
                      &#9660;
                    </div>
                  </div>
                </header>
                <Switch>
                  <Route path="/admin/car_setting"></Route>
                </Switch>
              </div>
              <footer className="body-footer body-footer--flex">
                <ul className="body-footer__ul">
                  <li className="body-footer__li">Главная страница</li>
                  <li className="body-footer__li">Ссылка</li>
                </ul>
                <p className="body-footer__copyright">
                  Copyright © 2020 Simbirsoft
                </p>
              </footer>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
