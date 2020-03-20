import React, { useState } from "react";

import ModelMenu from "./ModelMenu.jsx";
import ModelList from "./ModelList.jsx";

export default function Model() {
  const [car, setCar] = useState([
    { id: 1, model: "ELANTRA", price: "12 000 - 15 000 Р", class: "eco" },
    { id: 2, model: "i30 N", price: "10 000 - 32 000 Р", class: "premium" },
    { id: 3, model: "CRETA", price: "12 000 - 25 000 Р", class: "premium" },
    { id: 4, model: "SONATA", price: "10 000 - 32 000 Р", class: "eco" },
    { id: 5, model: "ELANTRA", price: "12 000 - 15 000 Р", class: "premium" },
    { id: 6, model: "i30 N", price: "10 000 - 32 000 Р", class: "premium" },
    { id: 7, model: "CRETA", price: "12 000 - 25 000 Р", class: "eco" },
    { id: 8, model: "SONATA", price: "10 000 - 32 000 Р", class: "eco" }
  ]);

  const [filter, setFilter] = useState("all");

  function handleMenuClick(name) {
    setFilter(name);
  }

  return (
    <div className="body-main-model__inner">
      <div className="body-main-model">
        <ModelMenu filter={filter} onMenuClick={handleMenuClick} />
        <ModelList cars={car} filter={filter} />
      </div>
    </div>
  );
}
