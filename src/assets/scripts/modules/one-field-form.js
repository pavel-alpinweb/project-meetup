import sendData from './adminAjax';
import "./jquery.maskedinput.js";

var headerSettings = {};
$('[data-role="timer-input"]').mask("9999, 99, 99",{placeholder:" "});

$('[data-role="save-header"]').click(function (e) { 
    e.preventDefault();

    var timerData;
    if($('[data-role="timer-input"]').val() == ''){
        timerData = $('[data-role="timer-input"]').attr('placeholder');
    } else {
        timerData = $('[data-role="timer-input"]').val();
    }
    var timerArray = timerData.split(', ');

    headerSettings.mainBackgorund = $('[data-role="main-bg-input"]').val();
    headerSettings.timerYear = +timerArray[0];
    headerSettings.timerMounth = +timerArray[1];
    headerSettings.timerDays = +timerArray[2];
    headerSettings.emailForRegistration = $('[data-role="email-reg-input"]').val();

    console.log(headerSettings);
    sendData("/headerSettings", headerSettings, "Настройки главного экрана обновленны!");
});