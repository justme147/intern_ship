import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "../components/Navbar/Admin";
import Header from "../components/Header/Admin";
import AdminCarSetting from "../pages/AdminCarSetting";
import AdminCarList from "../pages/AdminCarList";
import AdminOrderList from "../pages/AdminOrderList";
// import AdminError from "../pages/AdminError";
import Footer from "../components/Footer/Admin";

function AdminLayout() {
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

export default AdminLayout;
