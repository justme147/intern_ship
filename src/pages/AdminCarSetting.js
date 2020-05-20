import React, { useState } from "react";
import PropTypes from "prop-types";

import AdminBodyLayout from "../layouts/AdminBodyLayout";
import CarCard from "../components/CarCard";
import CarSetting from "../components/CarSetting";
import { Link } from "react-router-dom";

function AdminCarSetting(props) {
  const [alert, setAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState({
    title: "",
    correct: true,
  });
  return (
    <AdminBodyLayout
      title="Карточка автомобиля"
      alert={alertMessage.title}
      isCorrect={alertMessage.correct}
      isShow={alert}
      closeHandler={() => setAlert(false)}
    >
      {props.car && (
        <div className="body-main__wrap">
          <CarCard car={props.car} />
          <CarSetting
            car={props.car}
            changeAlert={setAlert}
            changeAlertMessage={setAlertMessage}
          />
        </div>
      )}
      {!props.car && (
        <p className="body-main__subtitle--light">
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
