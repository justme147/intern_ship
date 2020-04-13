import React from "react";
import PropTypes from "prop-types";

import Navbar from "../components/Navbar/Admin";
import Header from "../components/Header/Admin";
// import AdminCarSetting from "../pages/AdminCarSetting";
// import AdminCarList from "../pages/AdminCarList";
// import AdminOrderList from "../pages/AdminOrderList";
import Footer from "../components/Footer/Admin";

function AdminLayout(props) {
  function BodyMain(error) {
    return error ? (
      <>
        <Header />
        {props.children}
      </>
    ) : (
      <div className="body-top">
        <Header />
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
};

export default AdminLayout;
