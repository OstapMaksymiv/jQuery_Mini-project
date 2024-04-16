$(document).ready(function(){
    function showTime(){
        var date = new Date();

        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();

        var session = "AM"

        // if(hours === 0){
        //     hours= 12
        // }
        if(hours >= 12){
            session = "PM";
        }
        // if(hours > 12){
        //     hours -= 12
        // }
        hours = 10 > hours ? "0" + hours : hours;
        minutes = 10 >minutes ? "0" + minutes : minutes;
        seconds = 10 >seconds ? "0" + seconds : seconds;
        $('#hours').text(hours)
        $('#min').text(minutes)
        $('#sec').text(seconds)
        $('#period').text(session)
        setTimeout(showTime, 1000)
    }
    showTime();
})