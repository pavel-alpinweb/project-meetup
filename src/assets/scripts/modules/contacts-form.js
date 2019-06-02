import sendData from "./adminAjax";
import failMessage from "./fail-message";

$('[data-role="send-contact-mail"]').click(function (e) { 
    e.preventDefault();
    var mailObject = {};
    var form = $('[data-role="contact-form"]');
    mailObject.email = form.find('[name="email"]').val();
    mailObject.message = form.find('[name="message"]').val();
    if(mailObject.email == "" || mailObject.message == ""){
        failMessage("Fileds: email, message is required");
    } else {
        sendData("/textMail", mailObject);
    }
});