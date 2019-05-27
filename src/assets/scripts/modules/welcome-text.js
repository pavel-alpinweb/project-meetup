import sendData from './adminAjax';
import editText from './edit-text';

$('[data-role="saveWelcomeText"]').click(function (e) { 
    e.preventDefault();
    var newText = editText('[data-role="welcomeText"]');
    sendData("/saveWelcomeText", newText, "Приветственный текст обновлен!");
});