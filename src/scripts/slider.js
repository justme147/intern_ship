import * as $ from "jquery";
import "slick-carousel/slick/slick.min.js";

$(document).ready(() => {
  $(".slider").slick({
    dots: true,
    speed: 1000,
    easing: "ease",
    autoplay: true,
    autoplaySpeed: 4000,
    touchThreshold: 10
  });

  $(".slick-arrow.slick-prev").append(
    '<img src="./images/startscreen/slider_left_arrow.svg" class="slick-arrow-img" />'
  );

  $(".slick-arrow.slick-next").append(
    '<img src="./images/startscreen/slider_right_arrow.svg" class="slick-arrow-img" />'
  );
});
