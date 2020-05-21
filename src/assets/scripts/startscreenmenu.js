import * as $ from "jquery";

export default function toggleMenu() {
  $(".burger").on("click", () => {
    $(".container__menu").fadeToggle(200);
  });
  $(window).on("keydown", (e) => {
    if (e.key === "Escape") {
      $(".container__menu").fadeOut(200);
    }
  });
}
