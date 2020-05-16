import React, { useEffect } from "react";
import PropTypes from "prop-types";

import AdminBodyLayout from "../layouts/AdminBodyLayout";
import CarCard from "../components/CarCard";
import CarSetting from "../components/CarSetting";
import { Link } from "react-router-dom";

function AdminCarSetting(props) {
  return (
    <AdminBodyLayout title="Карточка автомобиля">
      {props.car && (
        <div className="body-main__wrap">
          <CarCard car={props.car} />
          <CarSetting car={props.car} />
        </div>
      )}
      {!props.car && (
        <p>
          Машина не выбранна, нажмите <Link to="/admin/car-list">здесь</Link>{" "}
          для выбора
        </p>
      )}
    </AdminBodyLayout>
  );
}

AdminCarSetting.propTypes = {
  car: PropTypes.object,
};

export default AdminCarSetting;
