import "@/style/main.scss";

import "./svgHover.js";
import "./startscreenmenu.js";
import "./slider.js";

import React from "react";
import ReactDOM from "react-dom";

import App from "../components/App.jsx";
const orderPage = document.getElementById("app");
if (orderPage) {
  ReactDOM.render(<App />, orderPage);
}

const goToUrl = document.querySelector(".body-content__button");

if (goToUrl) {
  goToUrl.addEventListener("click", () => {
    location.href = "order_page.html";
  });
}
