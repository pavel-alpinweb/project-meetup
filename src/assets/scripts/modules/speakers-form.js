import sendData from './adminAjax';

var tableRow = $('[data-role="speakers-form"] [data-role="form-row"]:last-child');

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

$('[data-role="save-table-speakers"]').click(function (e) { 
    e.preventDefault();
    var speakersArray = [];
    var speakers = $('[data-role="speakers-form"] [data-role="form-row"]');
    speakers.each(function(){
        var speakerObject = {};

        speakerObject.name = $(this).find('[data-input="name"]').val();
        speakerObject.description = $(this).find('[data-input="description"]').val();
        speakerObject.photo = $(this).find('[data-input="photo"]').val();

        
        var speakersSocialList = [];
        var speakerSocialElement = $(this).find('[data-role="social-input"]');
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

        speakersArray.push(speakerObject);
    });
    console.log(speakersArray);
    sendData("/speakersList", speakersArray, "Список спикеров обновлен!");
});