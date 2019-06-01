import sendData from './adminAjax';
import failMessage from './fail-message';
import sendFileWithCallback from './ajaxFileObject';

var tableRow = $('#speaker-placeholder').clone().removeClass('hide');
var uploadingFile;

function sendSpeakerData(url, speakerForm, isNew, callback){
    var speakerObject = {};
    speakerObject.name = speakerForm.find('[data-input="name"]').val();
    speakerObject.description = speakerForm.find('[data-input="description"]').val();
    speakerObject.photo = speakerForm.find('[data-input="photo-url"]').val();
    if(isNew){
        speakerObject.id = Date.now();    
        speakerForm.attr('id', speakerObject.id);
    } else {
        speakerObject.id = speakerForm.attr('id');
    }
    

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
    sendData(url, speakerObject, callback);
}

function addNewSpeakerCallback(newRow){
    $('[data-role="add-table-row-speakers"]').removeClass('hide');
    $('[data-role="save-new-speaker"]').addClass('hide');
    var newRow = $('[data-role="speakers-form"] [data-role="form-row"]:last-child');
    newRow.find('[data-role="save-speaker"]').removeClass('hide');
    newRow.find('[data-role="remove-table-row-speakers"]').removeClass('hide');
    var photoInput = newRow.find('[data-input="speaker-file"]');
    photoInput.val('');
}

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
    var newRow = $('[data-role="speakers-form"] [data-role="form-row"]:last-child');
    newRow.find('[data-role="save-speaker"]').addClass('hide');
    newRow.find('[data-role="remove-table-row-speakers"]').addClass('hide');
    $(this).addClass('hide');
    $('[data-role="save-new-speaker"]').removeClass('hide');   
});

$('body').on('click', '[data-role="remove-table-row-speakers"]', function (e) {
    e.preventDefault();
    $('[data-role="ajaxPreloader"]').fadeIn();
    var id =  $(this).parents('[data-role="form-row"]').attr('id');
    var container = $(this).parents('#' + id);
    $.ajax({
        url: '/speaker/' + id,
        type: 'DELETE',
        success: function(result) {
            container.remove();
            $('[data-role="ajaxPreloader"]').fadeOut();
            failMessage(result);
        }
    });
});

$('body').on('click', '[data-role="add-speaker-photo"]' ,function (e) {
    e.preventDefault();
    var photoInput = $(this).parents('[data-role="form-row"]').find('[data-input="speaker-file"]');
    photoInput.click();
});

$('body').on('change', '[data-input="speaker-file"]', function () {
    var file = this.files[0];
    var reader = new FileReader();
    var speaker = $(this).parents('[data-role="form-row"]');
    var preview = speaker.find('[data-role="speaker-photo-preview"]');
    reader.onload = function () {
        var isValidType = (file.type == 'image/png'
            || file.type == 'image/jpeg'
            || file.type == 'image/jpg');
        var isValidSize = file.size / 1024 / 1024 < 2;
        if(isValidType && isValidSize){
            preview.attr('src', reader.result); 
            $('[data-input="photo-url"]').val('content/' + file.name);
        } else if(!isValidType) {
            $('[data-input="speaker-file"]').val("");
            failMessage('Можно загружать только изображения форматов: png, jpeg, jpg');
        } else if(!isValidSize){
            $('[data-input="speaker-file"]').val("");
            failMessage('Файл не должен привышать размер 2mb');
        }
    }
    reader.readAsDataURL(file);

    uploadingFile = file;  
});

$('[data-role="save-new-speaker"]').click(function (e) { 
    e.preventDefault();
    var speaker = $('[data-role="speakers-form"] [data-role="form-row"]:last-child');
    var photoInput = speaker.find('[data-input="speaker-file"]');
    if(photoInput.val() != ''){
        sendFileWithCallback(uploadingFile, '/speaker-photo', function(){
            sendSpeakerData('/speakersList', speaker, true, addNewSpeakerCallback);
        });
    } else {
        sendSpeakerData('/speakersList', speaker, true, addNewSpeakerCallback);
    }
});

$('body').on('click', '[data-role="save-speaker"]', function (e) {
    e.preventDefault();
    var speakerId = $(this).parents('[data-role="form-row"]').attr('id');
    var speaker = $('#' + speakerId);
    var photoInput = speaker.find('[data-input="speaker-file"]');
    if(photoInput.val() != ''){
        sendFileWithCallback(uploadingFile, '/speaker-photo', function(){
            sendSpeakerData('/speaker/' + speakerId, speaker, false, function(){
                photoInput.val('');
            });
        });
    } else {
        sendSpeakerData('/speaker/' + speakerId, speaker, false);
    }
});