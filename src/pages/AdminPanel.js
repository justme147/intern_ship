import React, { useState, useEffect } from "react";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";

import AdminAuth from "./AdminAuth";
import AdminLayout from "../layouts/AdminLayout";
import AdminCarSetting from "../pages/AdminCarSetting";
import AdminCarList from "../pages/AdminCarList";
import AdminOrderList from "../pages/AdminOrderList";
import AdminError from "../pages/AdminError";

export default function AdminPanel() {
  const [logged, setLogged] = useState({});
  const [car, setCar] = useState(null);

  function Layout(el) {
    return (
      <AdminLayout handleExitClick={() => setLogged({})}>{el}</AdminLayout>
    );
  }
  return (
    <Switch>
      <Route path="/admin" exact>
        {logged.login ? (
          <AdminLayout handleExitClick={() => setLogged({})} />
        ) : (
          <Redirect to="/admin/login" />
        )}
      </Route>
      <Route path="/admin/car-setting">
        {logged.login ? (
          Layout(<AdminCarSetting car={car} />)
        ) : (
          <Redirect to="/admin/login" />
        )}
      </Route>
      <Route path="/admin/car-list">
        {logged.login ? (
          Layout(<AdminCarList handleCarClick={(item) => setCar(item)} />)
        ) : (
          <Redirect to="/admin/login" />
        )}
      </Route>
      <Route path="/admin/order-list">
        {logged.login ? (
          Layout(<AdminOrderList />)
        ) : (
          <Redirect to="/admin/login" />
        )}
      </Route>
      <Route path="/admin/login">
        <AdminAuth login={(data) => setLogged(data)} />
      </Route>
      <Route>
        <AdminLayout error>
          <AdminError />
        </AdminLayout>
      </Route>
    </Switch>
  );
}
