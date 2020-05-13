import React, { useState, useEffect } from "react";

import NavbarMenuItem from "./NavbarMenuItem";
import menuIcon1 from "../../../assets/images/adminpanel/menu_item_1.svg";
import menuIcon2 from "../../../assets/images/adminpanel/menu_item_2.svg";
import menuIcon3 from "../../../assets/images/adminpanel/menu_item_3.svg";
import menuIcon4 from "../../../assets/images/adminpanel/menu_item_4.svg";
import menuIcon5 from "../../../assets/images/adminpanel/menu_item_5.svg";
import menuIcon6 from "../../../assets/images/adminpanel/menu_item_6.svg";
import menuIcon7 from "../../../assets/images/adminpanel/menu_item_7.svg";
import imgToSvg from "../../../assets/scripts/svgHover";
import { useHistory } from "react-router-dom";

export default function NavbarMenu() {
  const history = useHistory();
  const [menuItem, setMenuItem] = useState([
    {
      id: 1,
      title: "Карточка автомобиля",
      url: "/car-setting",
      img: menuIcon1,
    },
    { id: 2, title: "Список авто", url: "/car-list", img: menuIcon2 },
    { id: 3, title: "Заказы", url: "/order-list", img: menuIcon3 },
    { id: 4, title: "Menu 4", url: "", img: menuIcon4 },
    { id: 5, title: "Menu 5", url: "", img: menuIcon5 },
    { id: 6, title: "Menu 6", url: "", img: menuIcon6 },
    { id: 7, title: "Menu 7", url: "", img: menuIcon7 },
  ]);

  useEffect(() => {
    imgToSvg(".sidebar__icon");
    console.log(history);
    menuItem.map((item) => {
      if (
        history.location.pathname.indexOf(item.url) !== -1 &&
        item.url !== ""
      ) {
        setActive(item.id);
      }
    });
  }, []);

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
