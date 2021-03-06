import failMessage from './fail-message';

export default function sendFile(file, url, callback) {
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
                $('[data-role="server-message"]').removeClass('hide').removeClass('m-fail').text(response.text);
                $('[data-role="ajaxPreloader"]').fadeOut();
                var hideMessage = setTimeout(function(){
                    $('[data-role="server-message"]').addClass('hide');
                }, 3000);

                callback(response.data)
            }
            else {
                $('[data-role="ajaxPreloader"]').fadeOut();
                failMessage(response.errors);
            }

        }
    });
};