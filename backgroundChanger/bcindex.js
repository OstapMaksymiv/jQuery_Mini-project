$(document).ready(function(){
    $("#color-range").on("input change", function () {
        $("body").css("background-color", $(this).val());
        if($("#color-range").val() <= "#2424242"){
            $("h1").css("color", "#fff")
        }
        else{
            $("h1").css("color", "#000")
        }
    })
})