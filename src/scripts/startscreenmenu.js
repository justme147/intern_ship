import * as $ from "jquery";

// $(document).ready(function() {
export default function toggleMenu() {
  $(".burger").on("click", () => {
    $(".container__menu").fadeToggle(200);
  });
}

// });
