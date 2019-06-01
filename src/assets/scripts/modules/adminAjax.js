export default function sendData(url, data, callback) {
    $('[data-role="ajaxPreloader"]').fadeIn();
    $.post( url, data, function( answer ) {
        $('[data-role="server message"]').removeClass('hide').removeClass('m-fail').text(answer);
        if(callback){
            callback();
        }
    })
    .fail(function() {
        $('[data-role="server message"]').removeClass('hide').addClass('m-fail').text('Что-то пошло не так!');
    })
    .always(function() {
        $('[data-role="ajaxPreloader"]').fadeOut();
        var hideMessage = setTimeout(function(){
            $('[data-role="server message"]').addClass('hide');
        }, 3000);
    });  
}

