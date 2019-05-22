export default function sendData(url, data, message) {
    $('[data-role="ajaxPreloader"]').fadeIn();
    $.post( url, data, function( data ) {
        console.log(data);
    })
    .done(function() {
        $('[data-role="server message"]').removeClass('hide').removeClass('m-fail').text(message);
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

