$('[data-role="map-swithcher"]').click(function () { 
    $('[data-role="switch-content"]').fadeOut();
    $('[data-role="address-swithcher"]').toggleClass('hide');
});

$('[data-role="address-swithcher"]').click(function () { 
    $('[data-role="switch-content"]').fadeIn();
    $(this).toggleClass('hide');
});