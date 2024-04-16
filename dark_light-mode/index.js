$(document).ready(function(){
    $("#toggle-btn").click(function(){
        $("body").toggleClass("change-background")
        $(this).css("border", "1px solid #f5f5f5")
        $("span").text($("span").text() === "Dark Mode" ? "White Mode" : "Dark Mode" )
    })
    $("#toggle-btn").click(function () {
        $(this).find("i").toggleClass("fa-moon fa-sun");
      });
})