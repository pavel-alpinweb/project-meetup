import sendData from './adminAjax';

var newText = {};
var welcomeTextForm = $('[data-role="welcomeText"]');

$('[data-role="saveWelcomeText"]').click(function (e) { 
    e.preventDefault();
    newText.title = welcomeTextForm.find('[data-input="title"]').val();
    newText.text = welcomeTextForm.find('[data-input="text"]').val();
    console.log(newText); 

    sendData("/saveWelcomeText", newText, "Приветственный текст обновлен!");
});