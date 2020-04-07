import React from "react";

import AdminBodyLayout from "../layouts/AdminBodyLayout.jsx";
import CarCard from "../CarCard/CarCard.jsx";
import CarSetting from "../CarCard/CarSetting.jsx";

export default function AdminCarSetting() {
  return (
    <AdminBodyLayout title="Карточка автомобиля">
      <div className="body-main__wrap">
        <CarCard />
        <CarSetting />
      </div>
    </AdminBodyLayout>
  );
}
