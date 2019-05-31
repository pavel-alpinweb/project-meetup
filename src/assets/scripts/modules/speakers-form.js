import sendData from './adminAjax';

var tableRow = $('[data-role="speakers-form"] [data-role="form-row"]:last-child');

function sendSpeakerData(speakerForm){
    var speakerObject = {};
    speakerObject.name = speakerForm.find('[data-input="name"]').val();
    speakerObject.description = speakerForm.find('[data-input="description"]').val();
    speakerObject.photo = speakerForm.find('[data-input="photo"]').val();
    speakerObject.id = Date.now();
    
    speakerForm.attr('id', speakerObject.id);

    var speakersSocialList = [];
    var speakerSocialElement = speakerForm.find('[data-role="social-input"]');
    speakerSocialElement.each(function(){
        var socialObject = {};
        socialObject.name = $(this).attr('data-name');
        socialObject.link = $(this).val();
        if($(this).parents('[data-role="social-input-container"]').hasClass('is-active')){
            socialObject.empty = false;
        } else {
            socialObject.empty = true;
        }
        speakersSocialList.push(socialObject);
    });

    speakerObject.social = speakersSocialList;

    console.log(speakerObject);
    sendData("/speakersList", speakerObject);
}

$('body').on('click', '[data-role="remove-table-row-speakers"]', function (e) {
    e.preventDefault();
    $(this).parents('[data-role="speakers-form-row"]').remove();
});

$('body').on('click', '[data-role="soc-flag"]', function () {
    if($(this).next().val() != ''){
        $(this).parent().toggleClass('is-active');
    }
});

$('body').on('click', '[data-role="social-input"]', function () {
    $(this).parent().addClass('is-active');
});

$('body').on('focusout', '[data-role="social-input"]', function () {
    if($(this).val() == ''){
        $(this).parent().removeClass('is-active');
    }
});

$('[data-role="add-table-row-speakers"]').click(function (e) { 
    e.preventDefault();
    tableRow.clone().appendTo('[data-role="speakers-form"]  [data-role="form-body"]');
});

$('[data-role="save-new-speaker"]').click(function (e) { 
    var speaker = $('[data-role="speakers-form"] [data-role="form-row"]:last-child');
    e.preventDefault();
    sendSpeakerData(speaker);
});

$('[data-role="save-speaker"]').click(function (e) { 
    e.preventDefault();
});