import React from "react";
import PropTypes from "prop-types";
import { Route, Switch } from "react-router-dom";

import Navbar from "../components/Navbar";
import Header from "../components/Header";
import OrderPage from "../pages/OrderPage";
import WatchPage from "../pages/WatchPage";

function OrderLayout(props) {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="container__content container__content--order">
          <Navbar fixed />
          <section className="body--order">
            <header className="body-header">
              <Header padding city={props.headerCity} />
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
                />
              </Route>
              <Route path={`/order/:id`}>
                <WatchPage
                  order={props.order}
                  handleButtonClick={props.handleButtonClick}
                  isActive={props.isActive}
                />
              </Route>
            </Switch>
          </section>
        </div>
      </div>
    </div>
  );
}

OrderLayout.propTypes = {
  isActive: PropTypes.number,
  handleMenuClick: PropTypes.func,
  renderStep: PropTypes.object,
  order: PropTypes.arrayOf(PropTypes.object),
  handleButtonClick: PropTypes.func,
  isModal: PropTypes.bool,
  handleButtonDeclineClick: PropTypes.func,
  headerCity: PropTypes.string,
};

export default OrderLayout;
