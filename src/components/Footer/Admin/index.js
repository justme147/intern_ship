import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const [menuItem, setMenuItem] = useState([
    { id: 1, title: "Главная страница", url: "/internship/build/" },
    { id: 2, title: "Ссылка", url: "/internship/build/admin" },
  ]);
  return (
    <footer className="body-footer body-footer--flex">
      <ul className="body-footer__ul">
        {menuItem.map((item) => {
          return (
            <li key={item.id} className="body-footer__li">
              <Link to={item.url}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
      <p className="body-footer__copyright">Copyright © 2020 Simbirsoft</p>
    </footer>
  );
}
