import sendData from './adminAjax';

var newText = {};
var welcomeTextForm = $('[data-role="welcomeText"]');

$('[data-role="saveWelcomeText"]').click(function (e) { 
    e.preventDefault();
    var title = welcomeTextForm.find('[data-input="title"]').val();
    var text = welcomeTextForm.find('[data-input="text"]').val();
    newText.title = title;
    newText.text = text;
    console.log(newText); 

    sendData("/saveWelcomeText", newText, "Приветственный текст обновлен!");
});