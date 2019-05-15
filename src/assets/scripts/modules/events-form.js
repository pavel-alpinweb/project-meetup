var tableRow = $('[data-role="events-form"] [data-role="form-row"]:last-child');

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
});