import sendData from './adminAjax';

var tableRow = $('[data-role="events-form"] [data-role="form-row"]:last-child');
var eventsArray = [];

$('[data-role="add-table-row-events"]').click(function (e) { 
    e.preventDefault();
    tableRow.clone().appendTo('[data-role="events-form"] [data-role="form-body"]');
});

$('html, body').on('click', '[data-role="remove-table-row"]', function (e) {
    e.preventDefault();
    $(this).parents('[data-role="form-row"]').remove();
});

$('[data-role="save-table-events"]').click(function (e) { 
    e.preventDefault();
    eventsArray = [];
    var eventsRows = $('[data-role="events-form"] [data-role="form-row"]'); 
    eventsRows.each(function(){
        var eventsObject = {};
        eventsObject.time = $(this).find('[data-input="event-time"]').val();
        eventsObject.name = $(this).find('[data-input="event-name"]').val();
        eventsArray.push(eventsObject);
    });
    console.log(eventsArray);

    if(eventsRows.length == 0){
        $('[data-role="server message"]').removeClass('hide').addClass('m-fail').text('Необходимо добавить хотябы одно событие!');
        var hideMessage = setTimeout(function(){
            $('[data-role="server message"]').addClass('hide');
        }, 3000);
    } else {
        sendData("/events", eventsArray);
    } 
});