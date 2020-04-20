import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import AdminAuth from "./AdminAuth";
import AdminLayout from "../layouts/AdminLayout";
import AdminCarSetting from "../pages/AdminCarSetting";
import AdminCarList from "../pages/AdminCarList";
import AdminOrderList from "../pages/AdminOrderList";
import AdminError from "../pages/AdminError";

export default function AdminPanel() {
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
      <Route path="/admin" exact component={AdminLayout} />
      <Route path="/admin/car-setting">
        <AdminLayout>
          <AdminCarSetting />
        </AdminLayout>
      </Route>
      <Route path="/admin/car-list">
        <AdminLayout>
          <AdminCarList />
        </AdminLayout>
      </Route>
      <Route path="/admin/order-list">
        <AdminLayout>
          <AdminOrderList />
        </AdminLayout>
      </Route>
      <Route path="/admin/login" component={AdminAuth} />
      <Route>
        <AdminLayout error>
          <AdminError />
        </AdminLayout>
      </Route>
    </Switch>
  );
}
