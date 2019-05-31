import sendFile from './ajaxFileUpload';
import failMessage from './fail-message';

var uploadingFile;

$('[data-role="add-bg-file"]').click(function (e) { 
    e.preventDefault();
    $('[data-role="file-input"]').click();
});

$('[data-role="file-input"]').change(function () { 
    var file = this.files[0];
    var reader = new FileReader();
    reader.onload = function () {
        var isValidType = (file.type == 'image/png'
            || file.type == 'image/jpeg'
            || file.type == 'image/jpg');
        var isValidSize = file.size / 1024 / 1024 < 2;
        if(isValidType && isValidSize){
            $('[data-role="preview-main-bg"]').attr('src', reader.result); 
        } else if(!isValidType) {
            $('[data-role="file-input"]').val("");
            failMessage('Можно загружать только изображения форматов: png, jpeg, jpg');
        } else if(!isValidSize){
            $('[data-role="file-input"]').val("");
            failMessage('Файл не должен привышать размер 2mb');
        }
    }
    reader.readAsDataURL(file);

    return uploadingFile = file;
});

$('[data-role="upload-file"]').click(function (e) { 
    e.preventDefault();
    if($('[data-role="file-input"]').val() != ""){
        sendFile(uploadingFile, '/mainBackgorund');
    } else {
        failMessage('Выберите изображение для загрузки');
    }
});