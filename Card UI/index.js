$(document).ready(function(){
    $(".card").mouseenter(function(){
        $(this).addClass("selected").siblings().removeClass("selected");
    })
})