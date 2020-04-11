import * as $ from "jquery";
import "slick-carousel/slick/slick.min.js";

import rightArrow from "../images/startscreen/slider_right_arrow.svg";
import leftArrow from "../images/startscreen/slider_left_arrow.svg";

export default function slick() {
  $(".slider").slick({
    dots: true,
    speed: 1000,
    easing: "ease",
    autoplay: true,
    autoplaySpeed: 4000,
    touchThreshold: 10,
  });

  $(".slick-arrow.slick-prev").append(
    `<img src=${leftArrow} class="slick-arrow-img" />`
  );

  $(".slick-arrow.slick-next").append(
    `<img src=${rightArrow} class="slick-arrow-img" />`
  );
}
