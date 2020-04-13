import React from "react";
import { Link, useHistory } from "react-router-dom";

// import EmptyAdminLayout from "../layouts/EmptyAdminLayout.jsx";
import logo from "../assets/images/adminpanel/logo.svg";

export default function AdminAuth() {
  const history = useHistory();
  return (
    // <EmptyAdminLayout>
    <div className="wrapper">
      <div className="container">
        <div className="container__content container__content--gray container__content--center">
          <section className="auth">
            <div
              className="auth__row auth__row--pointer"
              onClick={() => history.push("/")}
            >
              <img src={logo} alt="logo" className="auth__logo" />
              <h1 className="auth__title">Need for drive</h1>
            </div>

            <div className="auth__content">
              <h2 className="auth__subtitle">Вход</h2>
              <form className="auth__form">
                <label className="auth__label">Почта</label>
                <input type="email" className="auth__input" />
                <label className="auth__label">Пароль</label>
                <input type="password" className="auth__input" />
                <div className="auth__row auth__row--between">
                  <p className="auth__link">Запросить доступ</p>
                  <Link to="/admin">
                    <button className="button auth__button">Войти</button>
                  </Link>
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
    </div>
    // </EmptyAdminLayout>
  );
}
