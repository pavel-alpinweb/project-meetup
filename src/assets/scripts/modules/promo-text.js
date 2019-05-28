import sendData from './adminAjax';
import editText from './edit-text';

$('[data-role="savePromoText"]').click(function (e) { 
    e.preventDefault();
    var newText = editText('[data-role="promoText"]');
    sendData("/promoText", newText);
});