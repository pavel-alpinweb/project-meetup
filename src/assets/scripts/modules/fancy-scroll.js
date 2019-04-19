$('[data-role="fancy-scroll"]').click(function() {
    $("html, body").animate({
       scrollTop: $($(this).attr("data-slide")).offset().top + "px"
    }, {
       duration: 800,
       easing: "swing"
    });
    return false;
 });