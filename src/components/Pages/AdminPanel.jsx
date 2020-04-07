import React from "react";
import { Switch, Route } from "react-router-dom";

import AdminAuth from "./AdminAuth.jsx";
import AdminLayout from "../layouts/AdminLayout.jsx";

export default function AdminPanel() {
  return (
    <div className="wrapper">
      <div className="container">
        <Switch>
          <Route path="/admin" exact component={AdminLayout} />
          <Route path="/admin/login" component={AdminAuth} />
        </Switch>
      </div>
    </div>
  );
}
