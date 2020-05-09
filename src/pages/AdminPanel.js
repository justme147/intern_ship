import React, { useState } from "react";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";

import AdminAuth from "./AdminAuth";
import AdminLayout from "../layouts/AdminLayout";
import AdminCarSetting from "../pages/AdminCarSetting";
import AdminCarList from "../pages/AdminCarList";
import AdminOrderList from "../pages/AdminOrderList";
import AdminError from "../pages/AdminError";

export default function AdminPanel() {
  const [logged, setLogged] = useState({ login: "123123" });
  return (
    // <div className="wrapper">
    //   <div className="container">
    //     <Switch>
    //       <Route path="/admin" exact component={AdminAuth} />
    //       <Route path="/admin/panel" component={AdminLayout} />
    //     </Switch>
    //   </div>
    // </div>
    <Switch>
      {/* <Route path="/admin" exact component={AdminLayout} /> */}
      <Route path="/admin" exact>
        {logged.login ? <AdminLayout /> : <Redirect to="/admin/login" />}
      </Route>
      <Route path="/admin/car-setting">
        {logged.login ? (
          <AdminLayout>
            <AdminCarSetting />
          </AdminLayout>
        ) : (
          <Redirect to="/admin/login" />
        )}
      </Route>
      <Route path="/admin/car-list">
        {logged.login ? (
          <AdminLayout>
            <AdminCarList />
          </AdminLayout>
        ) : (
          <Redirect to="/admin/login" />
        )}
      </Route>
      <Route path="/admin/order-list">
        {logged.login ? (
          <AdminLayout>
            <AdminOrderList />
          </AdminLayout>
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
