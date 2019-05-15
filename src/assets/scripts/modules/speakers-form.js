var tableRow = $('[data-role="speakers-form-row"]:last-child');

$('[data-role="add-table-row-speakers"]').click(function (e) { 
    e.preventDefault();
    tableRow.clone().appendTo('[data-role="speakers-form-body"]');
});

$('[data-role="save-table-speakers"]').click(function (e) { 
    e.preventDefault();
});

$('html, body').on('click', '[data-role="remove-table-row-speakers"]', function (e) {
    e.preventDefault();
    $(this).parents('[data-role="speakers-form-row"]').remove();
});