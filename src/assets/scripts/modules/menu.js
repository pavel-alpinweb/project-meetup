$('[data-role="open-menu"]').click(function () { 
    $('[data-role="menu"]').addClass('menu--open');
});

$('[data-role="close-menu"]').click(function () { 
    $('[data-role="menu"]').removeClass('menu--open');
});