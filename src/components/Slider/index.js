import React, { useState, useEffect } from "react";

import slick from "../../assets/scripts/slider";
import SliderItem from "./SliderItem";

export default function Slider() {
  const [sliderList, setSliderList] = useState([
    {
      id: 1,
      title: "Бесплатная парковка",
      text:
        "Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.",
    },
    {
      id: 2,
      title: "Страховка",
      text: "Полная страховка страховка автомобиля",
    },
    {
      id: 3,
      title: "Бензин",
      text: "Полный бак на любой заправке города за наш счёт",
    },
    {
      id: 4,
      title: "Обслуживание",
      text: "Автомобиль проходит еженедельное ТО",
    },
  ]);

  useEffect(() => {
    slick();
  });

  return (
    <section className="slider">
      {sliderList.map((item) => {
        return <SliderItem item={item} key={item.id} />;
      })}
    </section>
  );
}
