import failMessage from './fail-message';

export default function sendFileWithCallback(file, url, callback) {
    $('[data-role="ajaxPreloader"]').fadeIn();
    var data = new FormData();
    data.append('uploadFile', file);

    $.ajax({
        url: url,
        data: data,
        cache: false,
        contentType: false,
        processData: false,
        type: 'POST',
        success: function (response) {
            if (response.status == 'ok') {
                callback()
            }
            else {
                $('[data-role="ajaxPreloader"]').fadeOut();
                failMessage('Загрузка файла не удалась');
            }

        }
    });
};