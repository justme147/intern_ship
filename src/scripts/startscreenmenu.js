import * as $ from "jquery";

$(document).ready(function() {
  $(".burger").on("click", () => {
    $(".sidebar").toggleClass("sidebar-menu");
    $(".sidebar__inner").toggleClass("sidebar__inner-menu");
    $(".sidebar__inner .burger").toggleClass("burger-active");
    $(".menu").toggleClass("menu-display");
    $(".sidebar-lang-switch").toggleClass("sidebar-lang-switch__display");
    $(".body").toggleClass("body-menu");
    $(".body-header-burger").toggleClass("body-header-burger__display");
    $(".slider").toggleClass("slider-menu");
  });
});
