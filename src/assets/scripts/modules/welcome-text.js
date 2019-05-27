import sendData from './adminAjax';
import editText from './edit-text';

$('[data-role="saveWelcomeText"]').click(function (e) { 
    e.preventDefault();
    var newText = editText('[data-role="welcomeText"]');
    sendData("/welcomeText", newText, "Приветственный текст обновлен!");
});