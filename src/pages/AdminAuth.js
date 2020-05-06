import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link, useHistory } from "react-router-dom";

// import EmptyAdminLayout from "../layouts/EmptyAdminLayout.jsx";
import logo from "../assets/images/adminpanel/logo.svg";

function AdminAuth(props) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const history = useHistory();

  function handleLoginClick() {
    const data = {
      login: email,
      password: pass,
    };
    props.login(data);
    history.push("/admin");
  }

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
                <input
                  type="email"
                  className="auth__input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label className="auth__label">Пароль</label>
                <input
                  type="password"
                  className="auth__input"
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                />
                <div className="auth__row auth__row--between">
                  <p className="auth__link">Запросить доступ</p>
                  {/* <Link to="/internship/build/admin"> */}
                  <button
                    className="button auth__button"
                    onClick={handleLoginClick}
                  >
                    Войти
                  </button>
                  {/* </Link> */}
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

AdminAuth.propTypes = {
  login: PropTypes.func,
};

export default AdminAuth;
