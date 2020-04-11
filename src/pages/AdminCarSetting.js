import React from "react";

import AdminBodyLayout from "../layouts/AdminBodyLayout";
import CarCard from "../components/CarCard";
import CarSetting from "../components/CarSetting";

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
