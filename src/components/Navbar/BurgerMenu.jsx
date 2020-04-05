import React from "react";

export default function BurgerMenu(props) {
  const burgerClasses = ["burger"];
  const innerClasses = ["burger__inner"];
  const itemClasses = ["burger__item"];

  if (props.burger) {
    burgerClasses.push("body-header-burger");
  }

  if (props.padding) {
    innerClasses.push("burger__inner--padding_t");
  }

  if (props.border) {
    itemClasses.push("burger__item--border_bcg");
  }

  if (props.close) {
    itemClasses.push("burger__item--close");
  }

  return (
    <div className={burgerClasses.join(" ")}>
      <div className={innerClasses.join(" ")}>
        <span className={itemClasses.join(" ")}></span>
      </div>
    </div>
  );
}
