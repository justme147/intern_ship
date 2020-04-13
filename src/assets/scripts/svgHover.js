import * as $ from "jquery";

export default function imgToSvg(icons) {
  const iconClass = `img${icons}`;
  $(iconClass).each(function () {
    var $img = $(this);
    var imgID = $img.attr("id");
    var imgClass = $img.attr("class");
    var imgURL = $img.attr("src");

    $.get(
      imgURL,
      function (data) {
        var $svg = $(data).find("svg");
        if (typeof imgID !== "undefined") {
          $svg = $svg.attr("id", imgID);
        }
        if (typeof imgClass !== "undefined") {
          $svg = $svg.attr("class", imgClass + " replaced-svg");
        }
        $svg = $svg.removeAttr("xmlns:a");

        $img.replaceWith($svg);
      },
      "xml"
    );
  });
}
// $(document).ready(function () {
//   $("img.list__image").each(function () {
//     var $img = $(this);
//     var imgID = $img.attr("id");
//     var imgClass = $img.attr("class");
//     var imgURL = $img.attr("src");

//     $.get(
//       imgURL,
//       function (data) {
//         var $svg = $(data).find("svg");
//         if (typeof imgID !== "undefined") {
//           $svg = $svg.attr("id", imgID);
//         }
//         if (typeof imgClass !== "undefined") {
//           $svg = $svg.attr("class", imgClass + " replaced-svg");
//         }
//         $svg = $svg.removeAttr("xmlns:a");

//         $img.replaceWith($svg);
//       },
//       "xml"
//     );
//   });
//   $("img.sidebar__icon").each(function () {
//     var $img = $(this);
//     var imgID = $img.attr("id");
//     var imgClass = $img.attr("class");
//     var imgURL = $img.attr("src");

//     $.get(
//       imgURL,
//       function (data) {
//         var $svg = $(data).find("svg");
//         if (typeof imgID !== "undefined") {
//           $svg = $svg.attr("id", imgID);
//         }
//         if (typeof imgClass !== "undefined") {
//           $svg = $svg.attr("class", imgClass + " replaced-svg");
//         }
//         $svg = $svg.removeAttr("xmlns:a");

//         $img.replaceWith($svg);
//       },
//       "xml"
//     );
//   });
//   $("img.location__icon").each(function () {
//     var $img = $(this);
//     var imgID = $img.attr("id");
//     var imgClass = $img.attr("class");
//     var imgURL = $img.attr("src");

//     $.get(
//       imgURL,
//       function (data) {
//         var $svg = $(data).find("svg");
//         if (typeof imgID !== "undefined") {
//           $svg = $svg.attr("id", imgID);
//         }
//         if (typeof imgClass !== "undefined") {
//           $svg = $svg.attr("class", imgClass + " replaced-svg");
//         }
//         $svg = $svg.removeAttr("xmlns:a");

//         $img.replaceWith($svg);
//       },
//       "xml"
//     );
//   });
// });
