import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "../Navbar/Navbar.jsx";
import Header from "../Header/Header.jsx";
import OrderPage from "../Pages/OrderPage.jsx";
import WatchPage from "../Pages/WatchPage.jsx";

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
                  since={props.order[3].since}
                  name={props.order[1].name}
                  model={props.order[1].value}
                  number={props.order[1].number}
                  fuel={props.order[1].fuel}
                  isFull={props.order[5].value}
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
