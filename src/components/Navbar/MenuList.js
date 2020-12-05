import React, { useState } from "react";

import MenuItem from "./MenuItem";

import telegramIcon from "../../assets/images/startscreen/icon_telegram.svg";
import facebookIcon from "../../assets/images/startscreen/icon_facebook.svg";
import instagramIcon from "../../assets/images/startscreen/icon_instagram.svg";

export default function MenuList() {
  const [list, setList] = useState([
    { id: 1, text: "Парковка" },
    { id: 2, text: "Страховка" },
    { id: 3, text: "Бензин" },
    { id: 4, text: "Обслуживание" },
  ]);
  const [social, setSocial] = useState([
    { id: 1, icon: telegramIcon },
    { id: 2, icon: facebookIcon },
    { id: 3, icon: instagramIcon },
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
