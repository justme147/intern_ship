import React, { useState } from "react";

import NavbarMenuItem from "./NavbarMenuItem.jsx";

export default function NavbarMenu() {
  const [menuItem, setMenuItem] = useState([
    { id: 1, title: "Карточка автомобиля", url: "/car-setting" },
    { id: 2, title: "Список авто", url: "/car-list" },
    { id: 3, title: "Заказы", url: "/order-list" },
    { id: 4, title: "Menu 4", url: "" },
    { id: 5, title: "Menu 5", url: "" },
    { id: 6, title: "Menu 6", url: "" },
    { id: 7, title: "Menu 7", url: "" },
  ]);

  const [active, setActive] = useState();

  return (
    <ul className="sidebar__list">
      {menuItem.map((item) => {
        return (
          <NavbarMenuItem
            key={item.id}
            item={item}
            active={active}
            onItemClick={() => setActive(item.id)}
          />
        );
      })}
    </ul>
  );
}
