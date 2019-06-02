import sendData from "./adminAjax";
import failMessage from "./fail-message";

$('[data-role="send-signUp-mail"]').click(function (e) { 
    e.preventDefault();
    var mailObject = {};
    var form = $('[data-role="signup-email-form"]');
    mailObject.name = form.find('[name="name"]').val();
    mailObject.email = form.find('[name="email"]').val();
    mailObject.phone = form.find('[name="phone"]').val();
    mailObject.username = form.find('[name="username"]').val();
    if(mailObject.username == ""){
        mailObject.username = "Не указан"; 
    }
    if(mailObject.name == "" || mailObject.email == "" || mailObject.phone == ""){
        failMessage("Fileds: name, phone and email is required");
    } else {
        sendData("/signupMail", mailObject);
    }
});