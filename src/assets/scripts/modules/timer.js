$(function () {
    var element = $('[data-role="timer"]');
    element.click(function(){
        var finalYear = $(this).attr('data-final-year');
        var finalMonth = $(this).attr('data-final-month');
        var finalDay = $(this).attr('data-final-day');

        var target_date = new Date(finalYear, finalMonth-1, finalDay).getTime(); // установить дату обратного отсчета
        var days, hours, minutes, seconds; // переменные для единиц времени
        
        var daysView = $(this).find('[data-days]');
        var hoursView =  $(this).find('[data-hours]');
        var minutesView = $(this).find('[data-minutes]');
        var secondsView = $(this).find('[data-seconds]');
        
        getCountdown();
        
        setInterval(function () { getCountdown(); }, 1000);
        
        function getCountdown(){
        
            var current_date = new Date().getTime();
            var seconds_left = (target_date - current_date) / 1000;
        
            days = pad( parseInt(+seconds_left / 86400) );
            seconds_left = seconds_left % 86400;

            console.log(+target_date);
                
            hours = pad( parseInt(seconds_left / 3600) );
            seconds_left = seconds_left % 3600;
                
            minutes = pad( parseInt(seconds_left / 60) );
            seconds = pad( parseInt( seconds_left % 60 ) );
    
            daysView.html(days);
            hoursView.html(hours);
            minutesView.html(minutes);
            secondsView.html(seconds);
    
        }
        
        function pad(n) {
            return (n < 10 ? '0' : '') + n;
        } 
    });   

    $(element).click(); 
});
