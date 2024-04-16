$(document).ready(function () {
    $("#range").on("input change", function () {
      $(".text").css("font-size", $(this).val() + "px");
      //change span value
      $(".value").text($(this).val() + "px");
    });
  });