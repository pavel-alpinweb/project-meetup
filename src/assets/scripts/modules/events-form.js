var tableRow = $('[data-role="events-form-row"]:last-child');

$('[data-role="add-table-row"]').click(function (e) { 
    e.preventDefault();
    tableRow.clone().appendTo('[data-role="events-form-body"]');
});

$('[data-role="save-table"]').click(function (e) { 
    e.preventDefault();
});

$('html, body').on('click', '[data-role="remove-table-row"]', function (e) {
    e.preventDefault();
    $(this).parents('[data-role="events-form-row"]').remove();
});