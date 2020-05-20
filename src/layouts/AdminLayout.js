import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import Navbar from "../components/Navbar/Admin";
import Header from "../components/Header/Admin";
// import AdminCarSetting from "../pages/AdminCarSetting";
// import AdminCarList from "../pages/AdminCarList";
// import AdminOrderList from "../pages/AdminOrderList";
import Footer from "../components/Footer/Admin";
import { fetchData } from "../assets/scripts/fetchdata";

function AdminLayout(props) {
  const [notif, setNotif] = useState(null);

  useEffect(() => {
    async function fetchNotif() {
      const orders = await fetchData(
        "order",
        JSON.parse(localStorage.getItem("api_token")),
        `?orderStatusId[id]=5e26a191099b810b946c5d89`
      );

      setNotif(orders.count);
    }

    fetchNotif();
  });
  function BodyMain(error) {
    return error ? (
      <>
        <Header />
        {props.children}
      </>
    ) : (
      <div className="body-top">
        <Header exitClick={props.handleExitClick} notif={notif} />
        {props.children}
      </div>
    );
  }

  return (
    <div className="wrapper">
      <div className="container">
        <div className="container__content container__content--gray">
          <Navbar />

          <section className="body">
            <div className="body__container">
              {BodyMain(props.error)}
              <Footer />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

AdminLayout.propTypes = {
  children: PropTypes.node,
  error: PropTypes.bool,
  handleExitClick: PropTypes.func,
};

export default AdminLayout;
