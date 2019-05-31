export default function failMessage(text){
    $('[data-role="server message"]').removeClass('hide').addClass('m-fail').text(text);
    var hideMessage = setTimeout(function(){
        $('[data-role="server message"]').addClass('hide');
    }, 3000);
}