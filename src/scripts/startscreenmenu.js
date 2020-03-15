import * as $ from "jquery";

$(document).ready(function() {
  $(".burger").on("click", () => {
    $(".container__menu").fadeToggle(200);
  });
});
