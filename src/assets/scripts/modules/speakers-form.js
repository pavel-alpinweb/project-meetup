var tableRow = $('[data-role="speakers-form"] [data-role="form-row"]:last-child');

$('body').on('click', '[data-role="remove-table-row-speakers"]', function (e) {
    e.preventDefault();
    $(this).parents('[data-role="speakers-form-row"]').remove();
});

$('body').on('click', '[data-role="soc-flag"]', function () {
    if($(this).next().val() != ''){
        $(this).parent().toggleClass('is-active');
    }
});

$('body').on('click', '[data-role="social-input"]', function () {
    $(this).parent().addClass('is-active');
});

$('body').on('focusout', '[data-role="social-input"]', function () {
    if($(this).val() == ''){
        $(this).parent().removeClass('is-active');
    }
});

$('[data-role="save-table-speakers"]').click(function (e) { 
    e.preventDefault();
});

$('[data-role="add-table-row-speakers"]').click(function (e) { 
    e.preventDefault();
    tableRow.clone().appendTo('[data-role="speakers-form"]  [data-role="form-body"]');
});