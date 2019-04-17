var target_date = new Date().getTime() + (1000*3600*24*60); // установить дату обратного отсчета
var days, hours, minutes, seconds; // переменные для единиц времени
 
var daysView = document.getElementById("days");
var hoursView = document.getElementById("hours");
var minutesView = document.getElementById("minutes");
var secondsView = document.getElementById("seconds");


var countdown = document.getElementById("tiles"); // получить элемент тега
 
getCountdown();
 
setInterval(function () { getCountdown(); }, 1000);
 
function getCountdown(){
 
    var current_date = new Date().getTime();
    var seconds_left = (target_date - current_date) / 1000;
 
    days = pad( parseInt(seconds_left / 86400) );
    seconds_left = seconds_left % 86400;
          
    hours = pad( parseInt(seconds_left / 3600) );
    seconds_left = seconds_left % 3600;
           
    minutes = pad( parseInt(seconds_left / 60) );
    seconds = pad( parseInt( seconds_left % 60 ) );

    daysView.innerHTML = days;
    hoursView.innerHTML = hours;
    minutesView.innerHTML = minutes;
    secondsView.innerHTML = seconds;

}
 
function pad(n) {
    return (n < 10 ? '0' : '') + n;
}