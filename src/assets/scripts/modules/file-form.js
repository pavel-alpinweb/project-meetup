$('[data-role="upload-file"]').click(function (e) { 
    e.preventDefault();
    
});

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
            $('[data-role="server message"]').removeClass('hide').addClass('m-fail').text('Можно загружать только изображения форматов: png, jpeg, jpg');
            var hideMessage = setTimeout(function(){
                $('[data-role="server message"]').addClass('hide');
            }, 3000);
        } else if(!isValidSize){
            $('[data-role="server message"]').removeClass('hide').addClass('m-fail').text('Файл не должен привышать размер 5mb');
            var hideMessage = setTimeout(function(){
                $('[data-role="server message"]').addClass('hide');
            }, 3000);
        }
    }
    reader.readAsDataURL(file);
});