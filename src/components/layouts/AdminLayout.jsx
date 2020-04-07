import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import Navbar from "../Navbar/Admin/Navbar.jsx";
import Header from "../Header/Admin/Header.jsx";
import AdminCarSetting from "../Pages/AdminCarSetting.jsx";
import AdminCarList from "../Pages/AdminCarList.jsx";
import AdminOrderList from "../Pages/AdminOrderList.jsx";
import Footer from "../Footer/Admin/Footer.jsx";

export default function AdminLayout(props) {
  return (
    // <BrowserRouter>
    <div className="wrapper">
      <div className="container">
        <div className="container__content container__content--gray">
          <Navbar />

          <section className="body">
            <div className="body__container">
              <div className="body-top">
                <Header />
                <Switch>
                  <Route
                    path="/admin/car-setting"
                    component={AdminCarSetting}
                  />

                  <Route path="/admin/car-list" component={AdminCarList} />
                  <Route path="/admin/order-list" component={AdminOrderList} />
                </Switch>
              </div>
              <Footer />
            </div>
          </section>
        </div>
      </div>
    </div>
    // </BrowserRouter>
  );
}
