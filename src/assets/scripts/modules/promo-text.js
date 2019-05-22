import sendData from './adminAjax';

var newText = {};
var promoTextForm = $('[data-role="promoText"]');

$('[data-role="savePromoText"]').click(function (e) { 
    e.preventDefault();
    newText.title = promoTextForm.find('[data-input="title"]').val();
    newText.text = promoTextForm.find('[data-input="text"]').val();
    newText.link = promoTextForm.find('[data-input="link"]').val();
    console.log(newText); 

    sendData("/saveWelcomeText", newText, "Промо текст обновлен!");
});