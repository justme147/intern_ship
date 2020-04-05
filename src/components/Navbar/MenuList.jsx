import React, { useState } from "react";

import MenuItem from "./MenuItem.jsx";

export default function MenuList() {
  const [list, setList] = useState([
    { id: 1, text: "Парковка" },
    { id: 2, text: "Страховка" },
    { id: 3, text: "Бензин" },
    { id: 4, text: "Обслуживание" },
  ]);
  const [social, setSocial] = useState([
    { id: 1, icon: "telegram" },
    { id: 2, icon: "facebook" },
    { id: 3, icon: "instagram" },
  ]);
  return (
    <nav className="list__inner">
      <ul className="list">
        {list.map((item) => {
          return <MenuItem key={item.id} text={item.text} />;
        })}
      </ul>
      <ul className="list list--flex">
        {social.map((item) => {
          return <MenuItem key={item.id} icon={item.icon} social />;
        })}
      </ul>
    </nav>
  );
}
