import failMessage from './fail-message';
import sendFile from './ajaxFileUpload';

var uploadingFile;

function renderNewImage(array){
    var newImage = array[array.length-1];
    $('[data-role="preview-container"]').html('');
    $('[data-role="gallery-file-input"]').val("");
    var newImageMarkup = 
    '<div class="gallery-form__image-container" id="' + newImage.id + '">' +
        '<div class="gallery-form__button" data-role="delete-image" data-id="' + newImage.id + '">' + 
            '<svg class="gallery-form__delete"><use xlink:href="assets/images/icons/sprite.svg#More_icon"></use></svg>' +
        '</div>' + 
        '<img src="' + newImage.src + '" alt="img">' + 
    '</div> '
    ;
    $('[data-role="gallery-form-container"]').append(newImageMarkup);
}

$('[data-role="add-gallery-file"]').click(function (e) { 
    e.preventDefault();
    $('[data-role="gallery-file-input"]').click();
});

$('[data-role="gallery-file-input"]').change(function () { 
    var file = this.files[0];
    var reader = new FileReader();
    reader.onload = function () {
        var isValidType = (file.type == 'image/png'
            || file.type == 'image/jpeg'
            || file.type == 'image/jpg');
        var isValidSize = file.size / 1024 / 1024 < 2;
        if(isValidType && isValidSize){
            $('[data-role="preview-container"]').html('');
            var img = $('<img>');
            img.attr('src', reader.result); 
            $('[data-role="preview-container"]').prepend(img);
        } else if(!isValidType) {
            $('[data-role="gallery-file-input"]').val("");
            failMessage('Можно загружать только изображения форматов: png, jpeg, jpg');
        } else if(!isValidSize){
            $('[data-role="gallery-file-input"]').val("");
            failMessage('Файл не должен привышать размер 2mb');
        }
    }
    reader.readAsDataURL(file);

    return uploadingFile = file;
});

$('[data-role="upload-image"]').click(function (e) { 
    e.preventDefault();
    if($('[data-role="gallery-file-input"]').val() != ""){
        sendFile(uploadingFile, '/gallery', renderNewImage);
    } else {
        failMessage('Выберите изображение для загрузки');
    }
});

$('body').on('click', '[data-role="delete-image"]', function () {
    $('[data-role="ajaxPreloader"]').fadeIn();
    
    var id = $(this).attr('data-id');
    var container = $(this).parent('#' + id);
    console.log(container);
    $.ajax({
        url: '/gallery/' + id,
        type: 'DELETE',
        success: function(result) {
            container.remove();
            $('[data-role="ajaxPreloader"]').fadeOut();
            failMessage(result);
        }
    });
});