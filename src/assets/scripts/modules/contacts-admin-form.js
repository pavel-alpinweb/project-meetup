import sendData from './adminAjax';

var contactsSetting = {};
var socialListArray = [];
var contactsForm = $('[data-role="contacts-admin-form"]');

$('[data-role="save-contacts"]').click(function (e) { 
    e.preventDefault();

    socialListArray = [];

    var socialList = contactsForm.find('[data-role="social-input"]');

    socialList.each(function(){
        var socialObject = {};
        socialObject.name = $(this).attr('data-name');
        socialObject.link = $(this).val();
        if($(this).parents('[data-role="social-input-container"]').hasClass('is-active')){
            socialObject.empty = false;
        } else {
            socialObject.empty = true;
        }
        socialListArray.push(socialObject);
    });

    contactsSetting.email = contactsForm.find('[data-input="email-post-input"]').val();
    contactsSetting.address = contactsForm.find('[data-input="address-input"]').val();
    contactsSetting.map = contactsForm.find('[data-input="map-code-input"]').val();
    contactsSetting.social = socialListArray;

    console.log(contactsSetting); 
    // sendData("/contacts", contactsSetting);
});