import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link, useHistory } from "react-router-dom";

// import EmptyAdminLayout from "../layouts/EmptyAdminLayout.jsx";
import logo from "../assets/images/adminpanel/logo.svg";

function AdminAuth(props) {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState({ login: false, pass: false });

  async function handleLoginClick() {
    // setError({ login: false, pass: false });
    let errors = false;
    if (email === "") {
      setError({ ...error, login: true });
      errors = true;
    }
    if (pass === "") {
      setError({ ...error, pass: true });
      errors = true;
    }

    if (errors) return;

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
                <label className="auth__label">
                  Почта
                  <input
                    type="email"
                    className="auth__input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {error.login && (
                    <span className="auth__error">
                      Поле не может быть пустым
                    </span>
                  )}
                </label>

                <label className="auth__label">
                  Пароль
                  <input
                    type="password"
                    className="auth__input"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                  />
                  {error.pass && (
                    <span className="auth__error">
                      Поле не может быть пустым
                    </span>
                  )}
                </label>

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
