import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "../components/Navbar";
import Header from "../components/Header";
import OrderPage from "../pages/OrderPage";
import WatchPage from "../pages/WatchPage";

export default function OrderLayout(props) {
  return (
    // <BrowserRouter>
    <div className="wrapper">
      <div className="container">
        <div className="container__content container__content--order">
          <Navbar fixed />
          <section className="body--order">
            <header className="body-header">
              <Header padding />
            </header>

            <Switch>
              <Route path="/order" exact>
                <OrderPage
                  isActive={props.isActive}
                  handleMenuClick={props.handleMenuClick}
                  renderStep={props.renderStep}
                  order={props.order}
                  handleButtonClick={props.handleButtonClick}
                  isModal={props.isModal}
                  handleButtonDeclineClick={props.handleButtonDeclineClick}
                  orderId={props.orderId}
                />
              </Route>
              <Route path={`/order/${props.orderId}`}>
                <WatchPage
                  order={props.order}
                  handleButtonClick={props.handleButtonClick}
                  isActive={props.isActive}
                  orderId={props.orderId}
                />
              </Route>
            </Switch>
          </section>
        </div>
      </div>
    </div>
    // </BrowserRouter>
  );
}
